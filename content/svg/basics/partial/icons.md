---
title: "Icons"
description: "Render icon-set assets with the inline-svg partial using icon names or paths, plus options for ARIA labels, sizing, classes, and custom attributes."
summary: "Render icon-set assets with the inline-svg partial using icon names or paths, plus options for ARIA labels, sizing, classes, and custom attributes."
date: 2026-04-23T16:55:01+02:00
lastmod: 2026-04-24T15:27:48+02:00
draft: false
weight: 235
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to render icons with the `inline-svg` partial. For all available arguments, see the [partial reference page](/svg/reference/partial/).

## Examples

### Required arguments only

```go-html-template
{{- partial "inline-svg" (dict "page" . "src" "check") }}
```

### All arguments

```go-html-template
{{- $opts := dict
  "page" .
  "src" "svgs/tabler-icons/check.svg"
  "id" "svg-check"
  "class" "check-icon"
  "role" "img"
  "title" "Success"
  "desc" "Operation completed successfully"
  "ariaLabelledby" "logo-title"
  "ariaDescribedby" "logo-desc"
  "width" "32"
  "height" "32"
  "stroke-width" "1.5"
}}
{{- partial "inline-svg.html" $opts }}
```
