# Directory Structure

Use this structure as the default. Adapt names to the user's existing workspace instead of forcing a migration.

```text
workspace/
├── raw/
│   ├── articles/
│   ├── transcripts/
│   ├── notes/
│   └── assets/
├── knowledge/
├── content/
├── methods/
├── data/
├── business/
├── delivery/
├── ideas/
└── wiki/
    ├── index.md
    ├── log.md
    ├── sources/
    ├── syntheses/
    └── lint/
```

## Layer definitions

### `raw/`

Original sources. These are evidence, not finished knowledge.

Rules:

- One source per file when possible.
- Do not rewrite source content.
- Store attachments, screenshots, images, and downloaded files in `raw/assets/`.
- Add metadata notes only when requested or necessary for provenance.

### Knowledge layer

The user's main content and thinking layer. Names can be customized.

Typical directories:

- `knowledge/`: broad concepts, domain knowledge, evergreen notes.
- `content/`: topic management, research, drafts, published pieces, source material.
- `methods/`: reusable SOPs, frameworks, templates, playbooks.
- `data/`: spreadsheets, data analysis, competitor research, reports.
- `business/`: growth, monetization, operations, model analysis.
- `delivery/`: client delivery, course material, product material.
- `ideas/`: daily idea capture.

If the workspace already has numbered Chinese directories or other domain-specific folders, keep them as the knowledge layer.

For workspaces that already use numbered Chinese directories, treat directories like these as first-class knowledge-layer roots:

- `00知识库/`: broad concepts, domain knowledge, evergreen notes.
- `01内容生产/`: topic management, research, drafts, published pieces, source material.
- `02方法论沉淀/`: reusable SOPs, frameworks, templates, playbooks, and high-value POV compatibility pages.
- `03数据统计/`: spreadsheets, data analysis, competitor research, reports.
- `04业务运营/`: growth, monetization, operations, and business model analysis.
- `05客户交付/`: client delivery, course material, product material.
- `06每日IDEA/`: daily idea capture.

### `wiki/`

The meta layer.

- `wiki/index.md`: navigation and important-page index.
- `wiki/log.md`: chronological operation log and canonical high-value judgment log.
- `wiki/sources/`: companion summaries for important raw sources.
- `wiki/syntheses/`: multi-source or query-driven synthesis pages.
- `wiki/lint/`: saved health-check reports.

## Initial setup checklist

Create missing directories:

```text
raw/articles/
raw/transcripts/
raw/notes/
raw/assets/
wiki/sources/
wiki/syntheses/
wiki/lint/
```

Create `wiki/index.md` with:

- update date
- meta links
- knowledge area links
- recent source syntheses
- recent knowledge pages
- operating principles
- open index tasks

Create `wiki/log.md` with:

- setup entry
- schema decisions
- future operation entries
