---
title: "SVGs"
description: "Render standalone SVG files with the inline-svg partial and pass options for IDs, classes, accessibility metadata, dimensions, and stroke settings."
summary: "Render standalone SVG files with the inline-svg partial and pass options for IDs, classes, accessibility metadata, dimensions, and stroke settings."
date: 2026-04-23T16:54:55+02:00
lastmod: 2026-04-24T15:27:41+02:00
draft: false
weight: 233
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to render SVGs with the `inline-svg` partial. For all available arguments, see the [partial reference page](/svg/reference/partial/).

## Examples

### Required arguments only

```go-html-template
{{- partial "inline-svg" (dict "page" . "src" "svgs/logos/thulite.svg") }}
```

### All arguments

```go-html-template
{{- $opts := dict
  "page" .
  "src" "svgs/logos/thulite.svg"
  "id" "logo-thulite"
  "class" "icon icon-brand"
  "role" "img"
  "title" "Thulite logo"
  "desc" "Wordmark and symbol for the Thulite project"
  "ariaLabelledby" "logo-title"
  "ariaDescribedby" "logo-desc"
  "width" "160"
  "height" "32"
  "stroke-width" "1.5"
}}
{{- partial "inline-svg.html" $opts }}
```
