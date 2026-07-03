---
title: "picture"
description: "Use the `picture` partial in Hugo templates to render responsive images with format negotiation, lazy loading, and configurable source options."
summary: "Use the `picture` partial in Hugo templates to render responsive images with format negotiation, lazy loading, and configurable source options."
date: 2023-11-09T16:50:56+01:00
lastmod: 2026-04-16T16:20:45+02:00
draft: false
weight: 420
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to render a responsive image with format negotiation (e.g. WebP with JPEG fallback) using the `picture` partial.
For all available arguments, see the [picture partial reference page](/images/reference/partials/picture/).

## Examples

### Required arguments only

```go
{{- partial "picture" (dict "page" . "src" "images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg") }}
```

### All arguments

```go
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
  "class" "foo"
}}
{{- partial "picture" $opts }}
```
