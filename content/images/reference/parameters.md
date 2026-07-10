---
title: "Parameters"
description: "Review Thulite Images module parameters for default decoding, fetch priority, loading, widths, sizes, processing, and LQIP behavior."
summary: "Review Thulite Images module parameters for default decoding, fetch priority, loading, widths, sizes, processing, and LQIP behavior."
date: 2026-04-14T14:57:52+02:00
lastmod: 2026-04-16T16:37:49+02:00
draft: false
weight: 620
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the Images module parameters, which can be set in `config/_default/params.toml`.

## Example

```toml {title="config/_default/params.toml"}
# Images (@thulite/images)
[thulite_images]
  [thulite_images.defaults]
    decoding = "async" # sync, async, or auto (default)
    fetchpriority = "auto" # high, low, or auto (default)
    loading = "lazy" # eager or lazy (default)
    widths = [480, 576, 768, 1025, 1200, 1440] # [640, 768, 1024, 1366, 1600, 1920] for example
    sizes = "auto" # 100vw (default), 75vw, or auto for example
    process = "" # "fill 1600x900" or "fill 2100x900" for example
    lqip = "16x webp q20" # "16x webp q20" or "21x webp q20" for example
```

## thulite_images.defaults

Default rendering and processing parameters for generated images.

### decoding

The default [decoding](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding) hint applied to generated `img` elements. A string — valid values are `sync`, `async`, and `auto`. Default is `"async"`.

### fetchpriority

The default [fetch priority](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) hint applied to generated `img` elements. A string — valid values are `high`, `low`, and `auto`. Default is `"auto"`.

### loading

The default [loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) behavior applied to generated `img` elements. A string — valid values are `eager` and `lazy`. Default is `"lazy"`.

### widths

The responsive image widths used to build `srcset` candidates. An array of integers ordered from smallest to largest — default is `[480, 576, 768, 1025, 1200, 1440]`.

### sizes

The default value used for the `sizes` attribute on responsive images. A string — for example `"auto"` or `"75vw"`. Default is `"auto"`.

### process

The default Hugo image [processing](https://gohugo.io/content-management/image-processing/#processing) specification applied to the main generated image. A string — for example `"fill 1600x900"`. Default is `""`.

### lqip

The default Hugo [resize](https://gohugo.io/methods/resource/resize/) specification used to generate the low-quality image placeholder. A string — for example `"16x webp q20"`. Default is `"16x webp q20"`.
