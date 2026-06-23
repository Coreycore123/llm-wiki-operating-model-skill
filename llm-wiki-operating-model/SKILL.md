---
name: llm-wiki-operating-model
description: "Maintain a file-based knowledge base as a compounding LLM wiki. Use when setting up, ingesting sources into, querying, linting, reorganizing, or recording reusable judgments in a Markdown knowledge base with raw sources, knowledge directories, wiki index/log files, source summaries, syntheses, and health checks. Also use for business knowledge bases that need product-form, commercial-intent, growth-logic, execution-tactic, and risk-check analysis."
---

# LLM Wiki Operating Model

Use this skill when the user wants to run a persistent file-based knowledge base with an AI agent.

The goal is to treat Markdown files as a compounding wiki, not as temporary chat output.

This skill also includes `methods/content-performance-prediction/` as the native content performance prediction layer. Use it when the user wants to score assembled content before publishing, lock blind predictions, compare predictions against published retro data, build anchor samples, calibrate buckets, or adapt the system for a new creator.

## Core model

The workspace has three layers:

1. `raw/`: immutable source material.
2. Knowledge layer: domain pages, methods, content plans, business analysis, delivery material, and ideas.
3. `wiki/`: navigation, logs, source companions, synthesis pages, and health checks.

If the workspace already has domain directories, preserve them. Do not force all knowledge pages into `wiki/`.

## Files to read

Load only the relevant reference file:

- `references/directory-structure.md`: when creating or explaining the folder architecture.
- `references/ingest-workflow.md`: when ingesting a source into the wiki.
- `references/query-workflow.md`: when answering a question against the wiki.
- `references/high-value-pov.md`: when recording reusable judgments.
- `references/commercial-analysis.md`: when analyzing growth, monetization, products, IP, courses, or client delivery.
- `references/lint-workflow.md`: when linting or health-checking the wiki.
- `references/workspace-conventions.md`: when adapting the operating model to a user's existing local wiki conventions.
- `methods/content-performance-prediction/docs/quickstart.md`: when setting up content performance prediction, blind prediction, retro, bucket calibration, or user onboarding requirements.

## Default operating rules

- Keep raw sources immutable.
- Add summaries, claims, and synthesis to the knowledge layer or `wiki/`, not into the original source.
- Search `wiki/index.md` first when answering workspace questions.
- Update `wiki/index.md` when important pages, frameworks, or synthesis documents are created.
- Append to `wiki/log.md` after meaningful ingest, synthesis, schema, lint, or high-value POV operations.
- Do not treat reconstructed or already-published samples as blind predictions. Published samples can calibrate buckets and anchors, but only predictions locked before publishing can enter the blind-prediction accuracy pool.
- Separate source-backed claims from inference.
- Prefer local Markdown links for source support.
- Preserve existing workspace conventions when present, including numbered domain folders, Obsidian-style concept links, and existing high-value POV compatibility pages.
- Ask before saving a reusable framework unless the user already requested persistence.

## Trigger phrases

Use this skill for requests like:

- "Set up an LLM wiki"
- "Ingest this article/transcript/note into my knowledge base"
- "Answer from my wiki"
- "Where should this source go?"
- "Record this high value POV"
- "Health-check my wiki"
- "Find duplicated or stale knowledge pages"
- "Turn this folder into an AI-maintained knowledge base"
- "建立内容表现预测"
- "做发布前盲评"
- "锁定 prediction"
- "校准 bucket / anchor / rubric"
- "把这套内容预测系统复制给新用户"

## Output style

When changing files, report:

- files created
- files updated
- log entry added
- unresolved questions

When answering a query, separate:

- source-backed claims
- inference
- reusable judgment
- recommended next write-back, if any
