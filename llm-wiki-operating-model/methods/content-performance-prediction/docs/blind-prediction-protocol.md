# Blind Prediction Protocol

This protocol governs predictions made before content is published.

## Core Rule

The order must be:

```text
draft completed
→ blind prediction
→ prediction lock
→ publish
→ retro
→ calibration
```

Do not rewrite a post-publish explanation as a pre-publish prediction.

## Sample Types

Use these labels:

- `blind_prediction`: prediction locked before publication.
- `reconstructed`: historical published sample scored after the fact.
- `contaminated_prediction`: score made after the current content's real performance was already known.
- `protocol_test`: test file that does not enter calibration.

Only `blind_prediction` should enter the blind-prediction accuracy pool.

## Allowed Inputs Before Prediction

Before publishing, the scorer may read:

- current draft or assembled content
- current cover and title if packaging is being scored
- current rubric
- bucket baseline
- anchor index
- historical reconstructed scores
- platform and intended publication plan

## Forbidden Inputs Before Prediction

The scorer must not read:

- current content's post-publish metrics
- backend screenshots for the current content
- current content's retro file
- user statements revealing actual performance
- any table, screenshot, chat, or note that reveals actual performance

If this rule is broken, mark the file as `contaminated_prediction`.

## Prediction Lock

The prediction file must contain:

```text
## Prediction Lock Section
```

After publishing, do not edit this section. Append real data and error analysis only in the retro section.

If the workspace uses Chinese headings, use:

```text
## 预测锁定区
## 发布后复盘区
```

The included validator protects the locked section from later edits.

## Preflight Guard

Before creating a `blind_prediction`, check whether the content already exists in published records.

If the source content is already published or has retro data, do not label it `blind_prediction`. Use `reconstructed` or `contaminated_prediction`.
