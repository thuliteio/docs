---
title: "Description"
description: "Configure meta descriptions in Thulite SEO with page-level overrides and fallback behavior, and learn how generated description tags are determined."
summary: "Configure meta descriptions in Thulite SEO with page-level overrides and fallback behavior, and learn how generated description tags are determined."
date: 2024-03-14T11:49:22+01:00
lastmod: 2026-04-10T12:21:52+02:00
draft: false
weight: 270
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

You can set a custom `description` in the frontmatter of a page:

```md
---
seo:
  description: "" # custom description (recommended)
---
```

## Generated meta tag

If a custom `description` is set in the frontmatter of a page, that `description` is used.

Otherwise, the `description` set in the frontmatter of a page is used — with a fallback to `description` set in `config/_default/params.toml`.

Thulite SEO generates the following meta tag — for example:

```html
<meta name="description" content="Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.">
```

## Resources

- [Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet)
