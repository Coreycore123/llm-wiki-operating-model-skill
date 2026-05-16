# Lint Workflow

Use this when the user asks to lint, audit, health-check, reorganize, or find problems in the wiki.

## Checks

Find:

- contradictions between pages
- stale claims superseded by newer notes
- orphan pages
- duplicated pages
- important repeated concepts without dedicated pages
- missing backlinks
- missing index entries
- raw sources without companion pages when they are important
- synthesis pages without clear source support
- methods mixed with one-off notes

## Procedure

1. Read `wiki/index.md`.
2. Inspect `wiki/log.md` for recent changes.
3. List high-density directories.
4. Search repeated terms.
5. Identify structural problems.
6. Suggest specific actions:
   - merge
   - split
   - rename
   - update
   - add index entry
   - add backlink
   - create hub page
7. Save the report to `wiki/lint/` only when the user asks for a saved report.

## Report template

```md
# Wiki Lint Report

更新日期: YYYY-MM-DD

## Summary

- ...

## Findings

### P1

- ...

### P2

- ...

### P3

- ...

## Recommended Actions

- ...

## Suggested New Hub Pages

- ...

## Unresolved Questions

- ...
```

