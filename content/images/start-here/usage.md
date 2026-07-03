---
title: "Usage"
description: "Learn how to use Thulite Images in content and templates with Markdown, shortcodes, and partials for responsive, optimized image output."
summary: "Learn how to use Thulite Images in content and templates with Markdown, shortcodes, and partials for responsive, optimized image output."
date: 2026-04-13T14:51:46+02:00
lastmod: 2026-04-16T16:00:45+02:00
draft: false
weight: 140
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide shows how to add and render images in content and templates with Thulite Images.

## Supported formats

Thulite Images supports all image formats that Hugo can process.
For the complete and current list, see [processable images](https://gohugo.io/quick-reference/glossary/#processable-image).

## Image placement

{{< link-card
  title="Image placement"
  description="Store your images as page, section, global, or remote resources."
  href="/images/basics/image-placement/"
>}}

## Add to content

Add images to content pages with standard Markdown syntax or the `img`, `picture`, and `figure` shortcodes.

### Markdown syntax

{{< link-card
  title="Markdown"
  description="Add optimized, lazy-loaded images to content pages using standard Markdown image syntax."
  href="/images/basics/markdown/"
>}}

### Shortcodes

{{< card-grid >}}
{{< link-card
  title="img"
  description="Render a responsive image with lazy loading and LQIP support."
  href="/images/shortcodes/img/"
>}}
{{< link-card
  title="picture"
  description="Render a responsive image with format negotiation (e.g. WebP with JPEG fallback)."
  href="/images/shortcodes/picture/"
>}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card
  title="figure"
  description="Render a responsive, lazy-loaded image with an optional caption."
  href="/images/shortcodes/figure/"
  class="w-50"
>}}
{{< /card-grid >}}

## Add to templates

Add images to templates with the `img`, `picture`, and `figure` partials.

### Partials

{{< card-grid >}}
{{< link-card
  title="img"
  description="Render a responsive image with lazy loading and LQIP support."
  href="/images/partials/img/"
>}}
{{< link-card
  title="picture"
  description="Render a responsive image with format negotiation (e.g. WebP with JPEG fallback)."
  href="/images/partials/picture/"
>}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card
  title="figure"
  description="Render a responsive, lazy-loaded image with an optional caption."
  href="/images/partials/figure/"
  class="w-50"
>}}
{{< /card-grid >}}
