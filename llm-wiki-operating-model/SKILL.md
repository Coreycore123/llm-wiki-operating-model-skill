---
name: llm-wiki-operating-model
description: "Maintain a file-based knowledge base as a compounding LLM wiki. Use when setting up, ingesting sources into, querying, linting, reorganizing, or recording reusable judgments in a Markdown knowledge base with raw sources, knowledge directories, wiki index/log files, source summaries, syntheses, and health checks. Also use for business knowledge bases that need product-form, commercial-intent, growth-logic, execution-tactic, and risk-check analysis."
---

# LLM Wiki Operating Model

Use this skill when the user wants to run a persistent file-based knowledge base with an AI agent.

The goal is to treat Markdown files as a compounding wiki, not as temporary chat output.

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

## Default operating rules

- Keep raw sources immutable.
- Add summaries, claims, and synthesis to the knowledge layer or `wiki/`, not into the original source.
- Search `wiki/index.md` first when answering workspace questions.
- Update `wiki/index.md` when important pages, frameworks, or synthesis documents are created.
- Append to `wiki/log.md` after meaningful ingest, synthesis, schema, lint, or high-value POV operations.
- Separate source-backed claims from inference.
- Prefer local Markdown links for source support.
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

