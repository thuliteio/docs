---
title: "Base"
description: "See how the HTML base element sets a document base URL in Thulite SEO, including its effect on relative links and in-page anchor navigation."
summary: "See how the HTML base element sets a document base URL in Thulite SEO, including its effect on relative links and in-page anchor navigation."
date: 2024-03-14T09:31:46+01:00
lastmod: 2026-04-10T12:21:11+02:00
draft: false
weight: 210
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `<base>` HTML element specifies the base URL to use for all *relative* URLs in a document.

## In-page anchors

Links pointing to a fragment in the document — e.g. `<a href="#some-id">` — are resolved with the `<base>`, triggering an HTTP request to the base URL with the fragment attached.

For example, given `<base href="https://example.com/">` and this link: `<a href="#anchor">To anchor</a>`. The link points to `https://example.com/#anchor`.

## Settings

No settings.

## Generated meta tags

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<base href="http://example.com/">
```
