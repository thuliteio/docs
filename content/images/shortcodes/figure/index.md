---
title: "figure"
description: "Use the `figure` shortcode to render responsive, lazy-loaded images with optional captions from page, global, or remote sources."
summary: "Use the `figure` shortcode to render responsive, lazy-loaded images with optional captions from page, global, or remote sources."
date: 2023-11-09T16:48:34+01:00
lastmod: 2026-04-16T16:14:32+02:00
draft: false
weight: 330
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to render a responsive, lazy-loaded image with an optional caption using the `figure` shortcode.
For all available arguments, see the [figure shortcode reference page](/images/reference/shortcodes/figure/).

## Examples

### Page resource

```md
{{</* figure
  process="fill 2100x900"
  lqip="21x webp q20"
  loading="eager"
  fetchpriority="high"
  src="vincent-van-zalinge-e5VzJJDODbQ-unsplash.jpg"
  alt="A yellow and black bird sitting on top of a body of water"
  caption="A yellow and black bird sitting on top of a body of water. Photo by Vincent van Zalinge"
*/>}}
```

{{< figure process="fill 2100x900" lqip="21x webp q20" loading="eager" fetchpriority="high" src="vincent-van-zalinge-e5VzJJDODbQ-unsplash.jpg" alt="A yellow and black bird sitting on top of a body of water" caption="A yellow and black bird sitting on top of a body of water. Photo by Vincent van Zalinge" >}}

#### Rendered HTML

```html
<figure>
  <img
    srcset="
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_5a17d993911d39eab4c7b885a293418e.webp 480w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_23d19ec40f792d3361d1be135008267b.webp 576w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_f23ec1d631a7d8fac2595529323fbc08.webp 768w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_a15aa8ceb8573d3fb48d8fa243d07c42.webp 1025w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_a18fd0d22800f6dfddea00bec2281c63.webp 1200w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_e3a707aa6a8c6a0d531f2d92a370fcd1.webp 1440w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_13ff401046b3665589186c8927831394.webp 2100w
    "
    data-srcset="
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_5a17d993911d39eab4c7b885a293418e.webp 480w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_23d19ec40f792d3361d1be135008267b.webp 576w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_f23ec1d631a7d8fac2595529323fbc08.webp 768w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_a15aa8ceb8573d3fb48d8fa243d07c42.webp 1025w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_a18fd0d22800f6dfddea00bec2281c63.webp 1200w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_e3a707aa6a8c6a0d531f2d92a370fcd1.webp 1440w,
      /docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_13ff401046b3665589186c8927831394.webp 2100w
    "
    data-sizes="auto"
    src="/docs/shortcodes/figure/vincent-van-zalinge-e5VzJJDODbQ-unsplash_hu3d03a01dcc18bc5be0e67db3d8d209a6_162847_d59446c4f99a4c9fbb5339fae96cf2c7.jpg"
    width="2100"
    height="900"
    decoding="async"
    fetchpriority="high"
    loading="eager"
    alt="A yellow and black bird sitting on top of a body of water"
    class="blur-up lazyautosizes ls-is-cached lazyloaded"
    sizes="642px"
  >
  <figcaption>
    A yellow and black bird sitting on top of a body of water. Photo by Vincent van Zalinge
  </figcaption>
</figure>
```

### Global resource

```md
{{</* figure
  process="fill 1600x900"
  src="images/vincent-van-zalinge-XIp7Wna0ua0-unsplash.jpg"
  alt="A small bird perched on top of a tree branch"
  caption="A small bird perched on top of a tree branch. Photo by Vincent van Zalinge"
*/>}}
```

{{< figure process="fill 1600x900" src="images/vincent-van-zalinge-XIp7Wna0ua0-unsplash.jpg" alt="A small bird perched on top of a tree branch" caption="A small bird perched on top of a tree branch. Photo by Vincent van Zalinge" >}}

### Remote resource

```md
{{</* figure
  process="fill 1600x900"
  src="images/vincent-van-zalinge-XIp7Wna0ua0-unsplash.jpg"
  alt="A small bird perched on top of a pine tree"
  caption="A small bird perched on top of a pine tree. Photo by Vincent van Zalinge"
*/>}}
```

{{< figure process="fill 1600x900" src="https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=1740&auto=format&fit=crop" alt="A small bird perched on top of a pine tree" caption="A small bird perched on top of a pine tree. Photo by Vincent van Zalinge" >}}
