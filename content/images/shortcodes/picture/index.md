---
title: "picture"
description: "Use the `picture` shortcode to render responsive images with format negotiation, lazy loading, and support for page, global, or remote sources."
summary: "Use the `picture` shortcode to render responsive images with format negotiation, lazy loading, and support for page, global, or remote sources."
date: 2023-11-09T16:48:27+01:00
lastmod: 2026-04-16T16:14:27+02:00
draft: false
weight: 320
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to render a responsive image with format negotiation (e.g. WebP with JPEG fallback) using the `picture` shortcode.
For all available arguments, see the [picture shortcode reference page](/images/reference/shortcodes/picture/).

## Examples

### Page resource

```md
{{</* picture
  process="fill 480x270"
  lqip="16x webp q20"
  loading="eager"
  fetchpriority="high"
  width="320"
  sizes="75vw"
  formats="webp, jpeg"
  class="rounded-3"
  src="vincent-van-zalinge-M9YgjD0XCvY-unsplash.jpg"
  alt="A bird with a little fish in its mouth"
*/>}}
```

{{< picture process="fill 480x270" lqip="16x webp q20" loading="eager" fetchpriority="high" width="320" sizes="75vw" formats="webp, jpeg" class="rounded-3" src="vincent-van-zalinge-M9YgjD0XCvY-unsplash.jpg" alt="A bird with a little fish in its mouth" >}}

### Global resource

```md
{{</* picture width="320" sizes="75vw" process="fill 1600x900" formats="webp, jpeg" src="images/vincent-van-zalinge-XIp7Wna0ua0-unsplash.jpg" alt="A small bird perched on top of a tree branch" */>}}
```

{{< picture width="320" sizes="75vw" process="fill 1600x900" formats="webp, jpeg" src="images/vincent-van-zalinge-XIp7Wna0ua0-unsplash.jpg" alt="A small bird perched on top of a tree branch" >}}

#### Rendered HTML

```html
<picture>
  <source
    type="image/webp"
    data-srcset="
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_d932322747ae0d552fecacdd389253fd.webp 320w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_fa67adcac4a7e232b71452872ee263d0.webp 640w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_d99733e70155a8055cd452f9f59c6a6b.webp 960w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_636bb64dcf72ee976a5548567590c38f.webp 1280w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_b41d6f95ab9c07af4aa5398c5229f27c.webp 1600w
    "
    data-sizes="75vw"
    srcset="
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_d932322747ae0d552fecacdd389253fd.webp 320w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_fa67adcac4a7e232b71452872ee263d0.webp 640w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_d99733e70155a8055cd452f9f59c6a6b.webp 960w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_636bb64dcf72ee976a5548567590c38f.webp 1280w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_b41d6f95ab9c07af4aa5398c5229f27c.webp 1600w
    "
  >
  <source
    type="image/jpeg"
    data-srcset="
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_245f38c70d4405f674fc05a4f7142724.jpg 320w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_c02a4662ab578cc479c9d307ba10092a.jpg 640w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_8470cece12f02e253bb11fa0c816dd81.jpg 960w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_706ca793841a98824fb735a7a7444c72.jpg 1280w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_6db6bb67c44e5119a3c479af04f9f95c.jpg 1600w
    "
    data-sizes="75vw"
    srcset="
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_245f38c70d4405f674fc05a4f7142724.jpg 320w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_c02a4662ab578cc479c9d307ba10092a.jpg 640w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_8470cece12f02e253bb11fa0c816dd81.jpg 960w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_706ca793841a98824fb735a7a7444c72.jpg 1280w,
      /images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_6db6bb67c44e5119a3c479af04f9f95c.jpg 1600w
    "
  >
  <img
    src="/images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_245f38c70d4405f674fc05a4f7142724.jpg"
    data-src="/images/vincent-van-zalinge-XIp7Wna0ua0-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_241522_245f38c70d4405f674fc05a4f7142724.jpg"
    width="1600"
    height="900"
    decoding="async"
    fetchpriority="auto"
    loading="lazy"
    alt="A small bird perched on top of a tree branch"
    class="blur-up ls-is-cached lazyloaded"
  >
</picture>
```

### Remote resource

```md
{{</* picture process="fill 1600x900" src="https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=1740&auto=format&fit=crop" alt="A small bird perched on top of a pine tree" */>}}
```

{{< picture process="fill 1600x900" src="https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=1740&auto=format&fit=crop" alt="A small bird perched on top of a pine tree" >}}
