# Ingest Workflow

Use this when the user asks to ingest, summarize, import, process, or turn a source into wiki knowledge.

## Steps

1. Read the source.
2. Identify source type and domain:
   - article
   - transcript
   - note
   - spreadsheet
   - image or attachment
   - content production
   - business analysis
   - method or SOP
   - platform algorithm
   - client delivery
   - personal philosophy
3. Extract:
   - key claims
   - definitions
   - examples
   - tensions
   - reusable methods
   - unanswered questions
4. Decide destination:
   - create a new knowledge page
   - update an existing page
   - create a source companion in `wiki/sources/`
   - create a synthesis in `wiki/syntheses/`
5. Cite source evidence with local Markdown links where possible.
6. Update `wiki/index.md` when a meaningful page or framework is created.
7. Append a `wiki/log.md` entry.

## Source rules

- Do not rewrite raw sources.
- Keep source wording when it is valuable as a title, slogan, opening, quote, or concept name.
- Do not overgeneralize one source into a universal rule.
- Mark uncertain claims as unresolved questions.

## Log entry format

```md
## [YYYY-MM-DD] ingest | Source title

- Operation: ingest
- Source: `raw/...`
- Source type:
- Created:
  - `...`
- Updated:
  - `...`
- Key claims:
  - ...
- Unresolved questions:
  - ...
```

## Source companion template

Create a source companion when a raw source is important enough to be reused.

```md
# Source title

更新日期: YYYY-MM-DD
来源: [source](../../raw/...)
类型:
领域:

## 核心判断

- ...

## 关键证据

- ...

## 可复用方法

- ...

## 可转化页面

- ...

## 未解决问题

- ...
```

