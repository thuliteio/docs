---
title: "Verification"
description: "Verify Thulite Images by inspecting generated HTML, transformed assets, and browser behavior to confirm responsive, optimized output."
summary: "Verify Thulite Images by inspecting generated HTML, transformed assets, and browser behavior to confirm responsive, optimized output."
date: 2026-04-13T14:42:56+02:00
lastmod: 2026-04-16T16:00:53+02:00
draft: false
weight: 150
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide helps you verify that Thulite Images is rendering optimized image markup and generated assets as expected.

## Inspect generated HTML

View page source in your browser and confirm that image markup is generated correctly.

Check for:

- `<img>` and/or `<picture>` output where expected
- `srcset` and `sizes` attributes for responsive images
- `loading`, `decoding`, and `fetchpriority` attributes according to your settings
- `alt` text on all content images
- Width and height attributes to reduce layout shift

If you use fallback formats, also verify that generated `<source>` elements (for example WebP) are present in `<picture>` markup.

{{< details "Example (excerpt)" >}}

```html
<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head>
  </head>
  <body>
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
  </body>
</html>
```

{{< /details >}}

## Inspect generated image assets

Build your site and confirm that transformed files are generated.

Check for:

- Multiple widths for responsive variants
- Expected output formats (for example WebP with JPEG/PNG fallback)
- LQIP output when configured
- File sizes that match your quality and compression settings

You can inspect the generated assets in your build output and compare dimensions and file size across variants.

## Validate in the browser

Open your pages in DevTools and verify image behavior in real conditions.

Check for:

- Correct candidate selection from `srcset` at different viewport widths
- Lazy loading behavior below the fold
- No 404 responses for generated image URLs
- No unexpected layout shifts caused by image rendering

## Use tools

Use external tools to validate image quality and performance impact.

For example:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org)

If anything looks incorrect, continue to the [Troubleshooting](/images/start-here/troubleshooting/) guide.
