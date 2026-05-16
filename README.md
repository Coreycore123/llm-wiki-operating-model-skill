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

## Privacy boundary

This package intentionally contains no private source material, customer data, or personal knowledge pages. It only contains the operating model, workflows, and templates.

## License

MIT License
