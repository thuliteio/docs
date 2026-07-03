---
title: "Robots"
description: "Control indexing directives in Thulite SEO with robots meta values in frontmatter, and understand when robots tags are generated or omitted."
summary: "Control indexing directives in Thulite SEO with robots meta values in frontmatter, and understand when robots tags are generated or omitted."
date: 2024-03-14T09:01:07+01:00
lastmod: 2026-04-10T12:21:38+02:00
draft: false
weight: 250
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `<meta>` HTML element represents metadata that cannot be represented by other HTML meta-related elements, like `<base>`, `<link>`, `<script>`, `<style>` or `<title>`. If the `name` attribute is set, the `<meta>` element provides document-level metadata, applying to the whole page.

## Settings

You can set `robots` in the frontmatter of a page:

```md
---
seo:
  robots: "noindex, nofollow" # custom robot tags (optional)
---
```

If `robots` is not set, a meta tag is not generated (default).

{{< callout context="note" icon="info-circle" >}}
See Google Search Central for [Valid indexing and serving rules](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives)
{{< /callout >}}

## Generated meta tags

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<meta name="robots" content="noindex, nofollow">
```

## Resources

- [Robots `meta` tag, `data-nosnippet`, and `X-Robots-Tag` specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
