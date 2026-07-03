---
title: "Canonical"
description: "Set canonical URLs in Thulite SEO to prevent duplicate-content issues, using either a custom frontmatter value or the page permalink default."
summary: "Set canonical URLs in Thulite SEO to prevent duplicate-content issues, using either a custom frontmatter value or the page permalink default."
date: 2024-03-13T17:44:10+01:00
lastmod: 2026-04-10T12:21:17+02:00
draft: false
weight: 220
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `rel` HTML attribute defines the relationship between a linked resource and the current document. A `canonical` value defines the preferred URL for the current document, which helps search engines reduce duplicate content.

## Settings

You can set a custom `canonical` URL in the frontmatter of a page:

```md
---
seo:
  canonical: "" # custom canonical URL (optional)
---
```

If you do not specify a custom canonical URL, the [Permalink](https://gohugo.io/methods/page/permalink/) of the current page is used (default).

## Generated meta tag

Thulite SEO generates the following meta tag — for example:

```html
<link rel="canonical" href="https://seo.thulite.io/docs/basics/canonical/">
```
