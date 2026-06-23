# Workspace Conventions

Use this reference when a workspace already has local wiki rules, such as `wiki/AGENTS.md`, numbered domain directories, or Obsidian navigation habits.

## Local Rules First

Treat local wiki instructions as workspace-specific conventions layered on top of this skill. Do not overwrite them with a generic structure unless the user explicitly asks for a migration.

If a local rule conflicts with this skill, prefer the local rule for that workspace and report the difference when it materially affects the operation.

## Layer Mapping

Common local layout:

- `raw/`: immutable source evidence. Only clean filenames or add metadata when necessary.
- `00知识库/`, `01内容生产/`, `02方法论沉淀/`, `03数据统计/`, `04业务运营/`, `05客户交付/`, `06每日IDEA/`: main knowledge layer.
- `wiki/`: meta layer for navigation, logs, source companions, syntheses, and lint reports.

## Source Rules

- Keep original sources immutable.
- Write summaries, judgments, and synthesis into the knowledge layer or `wiki/`.
- Prefer local Markdown links for evidence.
- Update `wiki/index.md` when meaningful pages or frameworks are created.
- Append `wiki/log.md` after meaningful ingest, synthesis, structure changes, lint, or POV recording.

## Query Rules

- Read `wiki/index.md` first.
- Use `rg` or equivalent fast text search across relevant directories.
- Separate source-backed judgment from inference.
- State evidence gaps directly.

## Page Conventions

- Use clear Chinese titles for domain knowledge pages when the workspace is Chinese-first.
- Prefer short paragraphs and explicit judgments.
- Use Obsidian-style links, such as `[[页面名]]`, for concept navigation.
- Use ordinary Markdown links for precise evidence citations.
- For synthesis or framework pages, include these fields near the top when useful:
  - `更新日期`
  - `适用场景`
  - `核心判断`
  - `证据来源`
- Preserve user wording when it can become a concept name, slogan, title, or opening.

## High Value POV Compatibility

Use `wiki/log.md` as the canonical high-value POV record.

If a workspace already has a compatibility page such as `02方法论沉淀/00High Value POV.md`, keep it as an entrypoint or index only. Do not make it the canonical write target unless the user asks.
