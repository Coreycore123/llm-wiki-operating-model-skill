# Query Workflow

Use this when answering questions against a user's knowledge base.

## Steps

1. Read `wiki/index.md` first.
2. Search relevant directories with fast text search such as `rg`.
3. Read the most relevant pages before answering.
4. Separate:
   - source-backed claims
   - inference
   - missing evidence
5. If the answer creates reusable knowledge, ask whether to save it unless the user already requested persistence.

## Search order

1. `wiki/index.md`
2. `wiki/sources/`
3. `wiki/syntheses/`
4. relevant knowledge directories
5. `raw/` only when source evidence is needed

## Answer template

```md
## Source-backed claims

- ...

## Inference

- ...

## Judgment

- ...

## Suggested write-back

- ...
```

Do not use this full template when the answer is simple. Keep the answer proportional to the request.

## Reliability rules

- If sources disagree, state the contradiction.
- If the wiki lacks evidence, say so.
- Do not present a synthesis as source-backed unless the supporting page or raw source was read.
- For new commercial recommendations, run the commercial analysis sequence.
- Use Obsidian-style links only for concept navigation. Use ordinary Markdown links for precise evidence citations.
