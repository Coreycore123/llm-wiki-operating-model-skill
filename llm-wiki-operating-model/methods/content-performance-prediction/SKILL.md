---
name: content-performance-prediction
description: "Content performance prediction method for LLM Wiki. Use when scoring assembled content before publishing, locking blind predictions, building anchor samples from published retro data, calibrating buckets, and onboarding a new creator into the system."
---

# Content Performance Prediction

Use this method when the user wants to predict how assembled content may perform before publishing and then compare that prediction with actual platform data.

The method is a calibration system, not a guarantee engine. Its job is to make judgment explicit before publication, preserve a locked prediction, collect retro data after publication, and improve future scoring through anchor samples.

## Core Workflow

```text
assembled draft
→ pre-publish blind prediction
→ prediction lock
→ publish
→ T+1 / T+3 / T+7 retro
→ bucket / anchor / rubric calibration
```

## Files To Read

- `docs/quickstart.md`: setup flow, new-user preparation, and operating sequence.
- `docs/blind-prediction-protocol.md`: rules for blind prediction, contamination, and prediction locks.
- `docs/retro-protocol.md`: post-publish retro workflow.
- `docs/rubric-bump-protocol.md`: rules for changing rubric, weights, buckets, or anchor logic.
- `templates/prediction-template.md`: prediction file template.
- `templates/retro-record-template.md`: platform retro record template.
- `templates/anchor-index-template.md`: anchor index template.
- `templates/bucket-baseline-template.md`: bucket baseline template.
- `tools/validate-prediction-locks.js`: local validator for locked prediction sections.

## Default Rules

- Never use already-published content as `blind_prediction`.
- Use `reconstructed` for historical scored samples.
- Use `contaminated_prediction` when the current content's actual performance was already known before scoring.
- Keep private platform data out of public skill repositories.
- Build a user's own anchor set before claiming prediction reliability.
- Treat commercial intent as part of performance definition. A viral content bucket and a lead-generation bucket may not mean the same thing.

## Output Style

When setting this up for a user, report:

- files created
- data the user still needs to provide
- whether blind prediction is currently possible
- whether the system only supports historical reconstruction so far
