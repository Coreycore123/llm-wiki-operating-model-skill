# Content Performance Prediction Quickstart

This method adds a content performance prediction layer to an LLM Wiki or content-system workspace.

It should be used only when the user has, or is willing to collect, post-publish platform data. Without retro data, the rubric can still support structured judgment, but it cannot be calibrated into a reliable prediction system.

## What New Users Must Prepare

### 1. Content Assets

The user should prepare:

- unpublished topics or assembled drafts
- published content originals
- high-performing samples
- low-performing samples
- normal or median-performing samples
- cover / title / body text when relevant

The system can be copied before these are complete, but calibration quality will be low until historical samples exist.

### 2. Post-Publish Retro Data

For each published content item, collect:

- platform
- account or column
- content form
- publish timestamp
- title
- cover or hook when relevant
- body text or source draft path
- impressions, reads or plays
- likes
- comments
- saves
- shares
- follower growth
- leads, private messages, forms, or sales when relevant
- whether paid traffic was used
- abnormal external factors
- T+1, T+3, and T+7 snapshots if possible

This is the minimum source for bucket baselines and historical anchor samples.

### 3. Platform And Business Intent

Before scoring, define what performance means for this user.

Use this sequence:

1. product form
2. commercial intent
3. growth logic
4. execution tactic
5. risk check

Examples:

- IP influence may prioritize completion, interaction, follow, and share.
- Consulting acquisition may prioritize private messages, form submissions, and qualified leads.
- Course sales may prioritize saves, trust-building comments, and downstream conversion.
- Brand communication may prioritize reach, recall, and comment quality.

Do not copy another creator's bucket thresholds without checking product form and commercial intent.

### 4. Personal Calibration Samples

A new user needs a first anchor set.

Recommended minimum:

- 20-30 published samples for a usable first baseline
- at least 5 low-performing samples
- at least 5 normal-performing samples
- at least 5 high-performing samples
- platform split if the user publishes on multiple platforms

If the user has fewer than 20 samples, use only coarse buckets:

- low performance
- normal performance
- high performance

### 5. Operating Discipline

The user must follow this sequence:

```text
assembled draft
→ pre-publish blind scoring
→ prediction file
→ prediction lock
→ publish
→ append retro data
→ compare predicted bucket with actual bucket
→ update calibration only after repeated directional error
```

If a prediction is created after performance data is known, label it `contaminated_prediction`.

## Recommended Directory Layout

```text
content-performance/
├── README.md
├── bucket-baseline.md
├── anchor-index.md
├── blind-prediction-protocol.md
├── retro-protocol.md
├── rubric-bump-protocol.md
├── prediction-lock-manifest.json
├── validate-prediction-locks.js
├── predictions/
│   └── TEMPLATE.md
├── retro-records/
│   ├── xiaohongshu/
│   └── douyin/
├── rubrics/
│   └── thought-video-v0.1.md
└── scoring/
    └── reconstructed-scores.md
```

## Initial Setup Steps

1. Copy the templates into the user's workspace.
2. Create empty `bucket-baseline.md` and `anchor-index.md` from templates.
3. Import historical published samples as `reconstructed`.
4. Define the primary metric per platform and business goal.
5. Score historical samples with the rubric.
6. Build a first bucket baseline.
7. Start future predictions as `blind_prediction` only when the prediction is locked before publication.

## Reliability Standard

Do not claim predictive reliability from reconstructed samples.

Use reconstructed samples for:

- rubric initialization
- bucket baseline
- anchor selection
- error hypothesis generation

Use blind predictions for:

- actual prediction accuracy
- bucket hit rate
- rubric calibration evidence

## Privacy Boundary

Public skill packages should include protocols, templates, and validators.

They should not include:

- private platform performance records
- unpublished content
- account-level business data
- user-specific anchor samples
- private rubrics calibrated from confidential data
