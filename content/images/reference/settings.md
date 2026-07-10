---
title: "Settings"
description: "Review Thulite Images imaging settings in Hugo, including anchor, background color, compression, quality, resample filters, and WebP options."
summary: "Review Thulite Images imaging settings in Hugo, including anchor, background color, compression, quality, resample filters, and WebP options."
date: 2026-04-14T14:57:42+02:00
lastmod: 2026-04-16T16:37:44+02:00
draft: false
weight: 610
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the imaging settings, which can be set in `config/_default/hugo.toml`.

## Example

```toml {title="config/_default/hugo.toml"}
[imaging]
  anchor = "Center"
  bgColor = "#ffffff"
  compression = "lossy"
  quality = 85
  resampleFilter = "Lanczos"
  [imaging.webp]
    hint = "photo"
    method = 2
    useSharpYuv = false
```

## anchor

The focal point used when cropping or filling an image. A string — valid values are `TopLeft`, `Top`, `TopRight`, `Left`, `Center`, `Right`, `BottomLeft`, `Bottom`, `BottomRight`, and `Smart`. Default is `smart`.

## bgColor

The background color used when converting transparent images to formats that do not support transparency, or when rotation introduces empty areas. A string containing an RGB hexadecimal color — for example `"#ffffff"`. Default is `#ffffff`.

## compression

The encoding strategy used when processing images. A string — valid values are `lossy` and `lossless`. The `lossless` setting is only supported for WebP output. Default is `lossy`.

## quality

The visual fidelity used for JPEG and lossy WebP images. An integer from `1` to `100`. Lower values reduce file size; higher values preserve more detail. Default is `75`.

## resampleFilter

The algorithm used when Hugo resizes, fits, or fills an image. A string — common values are `box`, `lanczos`, `catmullRom`, `mitchellNetravali`, `linear`, and `nearestNeighbor`. Default is `box`.

## imaging.webp

Controls WebP-specific encoding behavior.

### hint

The encoding preset used for WebP images. A string — valid values are `drawing`, `icon`, `photo`, `picture`, and `text`. Default is `photo`.

### method

The effort level used by the WebP compression algorithm. An integer from `0` to `6`. Lower values prioritize speed; higher values prioritize compression efficiency. Default is `2`.

### useSharpYuv

Whether Hugo uses the sharp RGB-to-YUV conversion path for WebP encoding. A boolean — default is `false`.
