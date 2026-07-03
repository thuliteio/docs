---
title: "picture"
description: "Reference all `picture` partial arguments, including required page context, source paths, responsive sizing, formats, processing, and attributes."
summary: "Reference all `picture` partial arguments, including required page context, source paths, responsive sizing, formats, processing, and attributes."
date: 2023-11-10T19:46:06+01:00
lastmod: 2026-04-16T16:38:20+02:00
draft: false
weight: 670
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the `picture` partial arguments.

## Example

```html
{{- $opts := dict
  "page" .
  "src" "images/bryce-canyon-national-park.jpg"
  "width" 768
  "sizes" "auto"
  "formats" (slice "webp" "jpeg")
  "process" "fill 1600x900"
  "lqip" "16x webp q20"
  "decoding" "async"
  "fetchpriority" "auto"
  "loading" "eager"
  "alt" "Bryce Canyon National Park"
  "title" "A beautiful day in Bryce Canyon National Park"
  "class" "foo"
}}
{{- partial "picture.html" $opts }}
```

## Arguments

The `page` and `src` arguments are required; others are optional.

### page

The current page (`.`) — the partial's context.

### src

A string containing the path to the image. See [Image placement](/docs/basics/image-placement/) for supported locations and syntax.

### width

The display width of the image in pixels. An integer — for example `768`.

### sizes

The value used for the `sizes` attribute on responsive images. A string — for example `auto` or `75vw`.

### formats

The image formats used to build `srcset` candidates, ordered by precedence. A comma-separated string — for example `webp, jpeg`.

### process

The Hugo image [processing](https://gohugo.io/content-management/image-processing/#processing) specification applied to the main generated image. A string — for example `fill 1600x900`.

### lqip

The Hugo [resize](https://gohugo.io/methods/resource/resize/) specification used to generate the low-quality image placeholder. A string — for example `16x webp q20`.

### decoding

The [decoding](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding) hint applied to the generated `img` element. A string — valid values are `sync`, `async`, and `auto`. If omitted, the partial uses `thulite_images.defaults.decoding`.

### fetchpriority

The [fetch priority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) hint applied to the generated `img` element. A string — valid values are `high`, `low`, and `auto`. If omitted, the partial uses `thulite_images.defaults.fetchpriority`.

### loading

The [loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) behavior applied to the generated `img` element. A string — valid values are `eager` and `lazy`. If omitted, the partial uses `thulite_images.defaults.loading`.

### alt

The `alt` attribute applied to the generated `img` element. A string.

### title

The `title` attribute applied to the generated `img` element. A string.

### class

The `class` attribute applied to the generated `img` element. A string.
