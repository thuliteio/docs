---
title: "img"
description: "Use the `img` partial in Hugo templates to render responsive images with lazy loading, LQIP support, and configurable rendering options."
summary: "Use the `img` partial in Hugo templates to render responsive images with lazy loading, LQIP support, and configurable rendering options."
date: 2023-11-09T16:50:46+01:00
lastmod: 2026-04-16T16:20:40+02:00
draft: false
weight: 410
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to render a responsive image with lazy loading and LQIP support using the `img` partial.
For all available arguments, see the [img partial reference page](/images/reference/partials/img/).

## Examples

### Required arguments only

```go
{{- partial "img" (dict "page" . "src" "images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg") }}
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
{{- partial "img" $opts }}
```
