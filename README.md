# LLM Wiki Operating Model Skill

A cross-agent skill for maintaining a file-based knowledge base as a compounding LLM wiki.

This skill packages an operating model, not private knowledge. It helps an AI agent ingest sources, query a Markdown knowledge base, record reusable judgments, run wiki health checks, and keep raw evidence separate from synthesized knowledge.

## Compatible agents

The skill uses the standard `SKILL.md` directory format and can be installed into:

- Codex: `~/.codex/skills/llm-wiki-operating-model`
- Claude Code: `~/.claude/skills/llm-wiki-operating-model`
- OpenClaw: `~/.openclaw/skills/llm-wiki-operating-model`
- Generic agent runtimes: `~/.agents/skills/llm-wiki-operating-model`

OpenClaw documents skills as directories containing at least `SKILL.md` under `~/.openclaw/skills/<skill-name>/SKILL.md`: https://openclawcn.com/en/docs/agent/skills/

## What it provides

- A three-layer knowledge base architecture:
  - `raw/` as immutable source evidence
  - domain directories as the main knowledge layer
  - `wiki/` as the meta layer for index, log, sources, syntheses, and lint reports
- Ingest workflow for articles, transcripts, notes, and source materials
- Query workflow for answering from the local wiki
- High-value POV workflow for reusable judgments
- Content performance prediction method:
  - pre-publish blind prediction
  - prediction lock
  - post-publish retro data
  - bucket baseline
  - anchor index
  - rubric bump protocol
- Commercial analysis standard:
  - product form
  - commercial intent
  - growth logic
  - execution tactics
  - risk check
- Lint workflow for contradictions, stale claims, duplicated pages, orphan pages, missing backlinks, and missing hub pages

## Directory structure

```text
llm-wiki-operating-model-skill/
├── llm-wiki-operating-model/
│   ├── SKILL.md
│   ├── agents/
│   │   └── openai.yaml
│   ├── methods/
│   │   └── content-performance-prediction/
│   │       ├── SKILL.md
│   │       ├── docs/
│   │       ├── templates/
│   │       └── tools/
│   └── references/
│       ├── commercial-analysis.md
│       ├── directory-structure.md
│       ├── high-value-pov.md
│       ├── ingest-workflow.md
│       ├── lint-workflow.md
│       └── query-workflow.md
├── templates/
│   ├── source-summary.md
│   ├── wiki-index.md
│   └── wiki-log.md
├── install.sh
├── LICENSE
└── README.md
```

## Install

### Codex

```bash
git clone https://github.com/Coreycore123/llm-wiki-operating-model-skill.git
mkdir -p ~/.codex/skills
cp -R llm-wiki-operating-model-skill/llm-wiki-operating-model ~/.codex/skills/llm-wiki-operating-model
```

### Claude Code

```bash
git clone https://github.com/Coreycore123/llm-wiki-operating-model-skill.git
mkdir -p ~/.claude/skills
cp -R llm-wiki-operating-model-skill/llm-wiki-operating-model ~/.claude/skills/llm-wiki-operating-model
```

### OpenClaw

```bash
git clone https://github.com/Coreycore123/llm-wiki-operating-model-skill.git
mkdir -p ~/.openclaw/skills
cp -R llm-wiki-operating-model-skill/llm-wiki-operating-model ~/.openclaw/skills/llm-wiki-operating-model
```

### Install script

```bash
git clone https://github.com/Coreycore123/llm-wiki-operating-model-skill.git
cd llm-wiki-operating-model-skill
./install.sh codex
./install.sh claude
./install.sh openclaw
```

## Usage examples

```text
Use $llm-wiki-operating-model to set up this folder as an AI-maintained knowledge base.
```

```text
Use $llm-wiki-operating-model to ingest this transcript into my wiki.
```

```text
Use $llm-wiki-operating-model to answer this question from my knowledge base and separate source-backed claims from inference.
```

```text
Use $llm-wiki-operating-model to health-check my wiki and suggest pages to merge, split, rename, or index.
```

```text
Use $llm-wiki-operating-model to set up content performance prediction for my publishing workflow.
```

```text
Use $llm-wiki-operating-model to create a blind prediction before publishing this assembled draft.
```

## Content performance prediction

The package includes a reusable method for predicting content performance before publication and calibrating those predictions with post-publish data.

The default workflow is:

```text
assembled draft
→ pre-publish blind prediction
→ prediction lock
→ publish
→ T+1 / T+3 / T+7 retro
→ bucket / anchor / rubric calibration
```

This is a calibration system, not a guarantee engine. Historical samples can initialize the rubric and bucket baseline, but only predictions locked before publication should be used to claim prediction accuracy.

### What a new user must prepare

Before copying this system to another creator or workspace, prepare:

- Content assets: unpublished topics, assembled drafts, published originals, high-performing samples, low-performing samples, normal-performing samples, and cover / title / body text when relevant.
- Post-publish retro data: platform, account, content form, publish timestamp, impressions, reads or plays, likes, comments, saves, shares, follower growth, leads or conversions, paid traffic status, abnormal factors, and ideally T+1 / T+3 / T+7 snapshots.
- Platform and business intent: define whether performance means IP influence, consulting leads, course conversion, brand communication, or another outcome.
- Personal calibration samples: 20-30 published samples are recommended before treating bucket baselines as usable; with fewer samples, use only low / normal / high coarse buckets.
- Operating discipline: lock predictions before publishing, mark already-published or data-exposed samples as `reconstructed` or `contaminated_prediction`, and update rubric rules only after repeated directional error.

Public skill packages should include protocols, templates, and validators. They should not include private platform performance records, unpublished content, account-level business data, user-specific anchor samples, or private rubrics calibrated from confidential data.

## Privacy boundary

This package intentionally contains no private source material, customer data, or personal knowledge pages. It only contains the operating model, workflows, and templates.

## License

MIT License
