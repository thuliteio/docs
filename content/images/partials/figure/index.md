---
title: "figure"
description: "Use the `figure` partial in Hugo templates to render responsive, lazy-loaded images with optional captions and configurable output settings."
summary: "Use the `figure` partial in Hugo templates to render responsive, lazy-loaded images with optional captions and configurable output settings."
date: 2023-11-09T16:50:41+01:00
lastmod: 2026-04-16T16:20:50+02:00
draft: false
weight: 430
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to render a responsive, lazy-loaded image with an optional caption using the `figure` partial.
For all available arguments, see the [figure partial reference page](/images/reference/partials/figure/).

## Examples

### Required arguments only

```go-html-template
{{- partial "figure" (dict "page" . "src" "images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg") }}
```

### All arguments

```go-html-template
{{- $opts := dict
  "page" .
  "src" "images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg"
  "width" 768
  "sizes" "auto"
  "formats" (slice "webp" "jpeg")
  "process" "fill 1600x900"
  "lqip" "16x webp q20"
  "decoding" "async"
  "fetchpriority" "auto"
  "loading" "eager"
  "alt" "A close-up of a butterfly on a rope"
  "title" "A close-up of a butterfly on a rope"
  "caption" "A close-up of a butterfly on a rope"
  "class" "foo"
}}
{{- partial "figure" $opts }}
```
