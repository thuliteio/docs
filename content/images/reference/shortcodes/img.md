---
title: "img"
description: "Reference all `img` shortcode arguments for source paths, responsive sizing, formats, processing, placeholders, and image element attributes."
summary: "Reference all `img` shortcode arguments for source paths, responsive sizing, formats, processing, placeholders, and image element attributes."
date: 2023-11-28T14:23:35+01:00
lastmod: 2026-04-16T16:37:54+02:00
draft: false
weight: 630
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the `img` shortcode arguments.

## Example

```md
{{</* img
  src="images/bryce-canyon-national-park.jpg"
  width=768
  sizes="75vw"
  formats="webp, jpeg"
  process="fill 1600x900"
  lqip="16x webp q20"
  decoding="async"
  fetchpriority="auto"
  loading="eager"
  alt="Bryce Canyon National Park"
  title="A beautiful day in Bryce Canyon National Park"
  class="foo"
*/>}}
```

## Arguments

The `src` argument is required; others are optional.

### src

A string containing the path to the image. See [Image placement](/images/basics/image-placement/) for supported locations and syntax.

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

The [decoding](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding) hint applied to the generated `img` element. A string — valid values are `sync`, `async`, and `auto`. If omitted, the shortcode uses `thulite_images.defaults.decoding`.

### fetchpriority

The [fetch priority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) hint applied to the generated `img` element. A string — valid values are `high`, `low`, and `auto`. If omitted, the shortcode uses `thulite_images.defaults.fetchpriority`.

### loading

The [loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) behavior applied to the generated `img` element. A string — valid values are `eager` and `lazy`. If omitted, the shortcode uses `thulite_images.defaults.loading`.

### alt

The `alt` attribute applied to the generated `img` element. A string.

### title

The `title` attribute applied to the generated `img` element. A string.

### class

The `class` attribute applied to the generated `img` element. A string.
