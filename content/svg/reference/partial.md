---
title: "Partial"
description: "Explore every argument accepted by the inline-svg partial, from required page and source values to accessibility, sizing, and pass-through SVG attributes."
summary: "Explore every argument accepted by the inline-svg partial, from required page and source values to accessibility, sizing, and pass-through SVG attributes."
date: 2026-04-23T20:32:43+02:00
lastmod: 2026-04-24T15:31:20+02:00
draft: false
weight: 930
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the `inline-svg` partial arguments.

## Example

```md
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

The `src` value can point to an SVG resource path (for example `svgs/logos/thulite.svg`) or to an icon name from the configured icon set (for example `check`).

## Arguments

The `page` and `src` arguments are required; others are optional.

### page

The current page context passed as `.`. Required by the partial to resolve resources and site configuration.

### src

The path or name of the SVG resource to inline. A string.

### id

The `id` attribute applied to the generated `svg` element. A string. If omitted, the partial uses `svg-[filename]`.

### class

The `class` attribute applied to the generated `svg` element. A string. If omitted, the partial still adds `svg-inline`.

### role

The ARIA `role` attribute applied to the generated `svg` element. A string. If omitted, the partial uses `img`.

### title

The accessible `title` element inserted into the generated `svg` element. A string.

### desc

The accessible `desc` element inserted into the generated `svg` element. A string.

### ariaLabelledby

The `aria-labelledby` attribute applied to the generated `svg` element when `title` is set. A string. If omitted, the partial uses `title-[id]`.

### ariaDescribedby

The `aria-describedby` attribute applied to the generated `svg` element when `desc` is set. A string. If omitted, the partial uses `desc-[id]`.

### width

The `width` attribute applied to the generated `svg` element. A string or integer.

### height

The `height` attribute applied to the generated `svg` element. A string or integer.

### Additional attributes

Any extra named arguments are passed through as attributes on the generated `svg` element. For example: `stroke-width`, `viewBox`, `aria-hidden`, or `data-*`.
