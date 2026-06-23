#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const predictionsDir = path.join(root, "predictions");
const manifestPath = path.join(root, "prediction-lock-manifest.json");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(dir, file))
    .sort();
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return {};
  const end = content.indexOf("\n---", 4);
  if (end < 0) return {};
  const raw = content.slice(4, end).trim();
  const result = {};
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^([^:#]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function isLocked(frontmatter) {
  return String(frontmatter.prediction_locked).trim() === "true";
}

function lockedSection(content) {
  const lockedMatch = content.match(/^## 预测锁定区\s*$/m) || content.match(/^## Prediction Lock Section\s*$/m);
  if (!lockedMatch) return null;
  const start = lockedMatch.index;
  const rest = content.slice(start);
  const retroMatch = rest.match(/^## 发布后复盘区\s*$/m) || rest.match(/^## Post-Publish Retro Section\s*$/m);
  if (!retroMatch) return rest.trim();
  return rest.slice(0, retroMatch.index).trim();
}

function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    return {
      version: 1,
      generated_at: new Date().toISOString(),
      locks: {},
    };
  }
  return JSON.parse(readText(manifestPath));
}

function main() {
  const manifest = loadManifest();
  manifest.version ||= 1;
  manifest.locks ||= {};

  const errors = [];
  const warnings = [];
  let added = 0;
  let checked = 0;

  for (const filePath of listMarkdownFiles(predictionsDir)) {
    const rel = path.relative(root, filePath);
    const content = readText(filePath);
    const frontmatter = parseFrontmatter(content);
    if (!isLocked(frontmatter)) continue;

    const section = lockedSection(content);
    if (!section) {
      errors.push(`${rel}: prediction_locked is true but no prediction lock heading was found.`);
      continue;
    }

    const hash = sha256(section);
    checked += 1;

    if (!manifest.locks[rel]) {
      manifest.locks[rel] = {
        hash,
        prediction_id: frontmatter.prediction_id || "",
        sample_type: frontmatter.sample_type || "",
        prediction_status: frontmatter.prediction_status || "",
        locked_at: new Date().toISOString(),
      };
      added += 1;
      continue;
    }

    if (manifest.locks[rel].hash !== hash) {
      errors.push(`${rel}: locked prediction section changed.`);
    }
  }

  for (const rel of Object.keys(manifest.locks)) {
    const filePath = path.join(root, rel);
    if (!fs.existsSync(filePath)) {
      warnings.push(`${rel}: manifest entry exists but file is missing.`);
    }
  }

  manifest.generated_at = new Date().toISOString();
  writeJson(manifestPath, manifest);

  for (const warning of warnings) console.warn(`WARN ${warning}`);

  if (errors.length) {
    for (const error of errors) console.error(`ERROR ${error}`);
    console.error(`Prediction lock validation failed. Checked ${checked}, added ${added}, errors ${errors.length}.`);
    process.exit(1);
  }

  console.log(`Prediction lock validation passed. Checked ${checked}, added ${added}.`);
}

main();
