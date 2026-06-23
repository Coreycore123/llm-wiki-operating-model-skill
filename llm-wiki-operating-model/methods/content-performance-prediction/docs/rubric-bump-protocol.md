# Rubric Bump Protocol

Use this protocol when changing scoring dimensions, weights, bucket rules, or anchor selection.

## Change Threshold

Do not change the rubric after a single miss.

Consider a bump only when:

- multiple blind predictions miss in the same direction
- low-performing samples pass the current rubric too easily
- high-performing samples are consistently under-scored
- a dimension is repeatedly ambiguous in real scoring
- business intent changes the meaning of performance

## Change Types

Possible bumps:

- dimension definition change
- dimension rename
- weight change
- bucket threshold change
- packaging correction change
- anchor selection priority change
- platform-specific split

## Required Record

Every bump should record:

- date
- old rule
- new rule
- evidence
- affected samples
- migration impact
- whether old predictions remain comparable

## Versioning

Use rubric versions such as:

```text
thought-video-v0.1
thought-video-v0.2
```

Do not silently overwrite the meaning of a previous version.
