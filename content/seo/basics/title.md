---
title: "Title"
description: "Learn how Thulite SEO builds page titles from frontmatter, separator, and suffix settings, and when custom SEO titles take precedence."
summary: "Learn how Thulite SEO builds page titles from frontmatter, separator, and suffix settings, and when custom SEO titles take precedence."
date: 2024-03-14T09:53:11+01:00
lastmod: 2026-04-10T12:21:44+02:00
draft: false
weight: 260
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `<title>` HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.

## Settings

You can set a `separator` and a `suffix` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = "" # "|" (default)
    suffix = "" # title set in hugo.toml (default)
```

You can set a custom `title` in the frontmatter of a page:

```md
---
seo:
  title: "" # custom title (optional)
---
```

## Generated meta tag

If a custom `title` is set in the frontmatter of a page, that `title` is used.

Otherwise, the `title` set in the frontmatter of a page, followed by the `separator` (surrounded by spaces), and the `suffix` is used.

Thulite SEO generates the following meta tag — for example:

```html
<title>Example Guide | My Docs</title>
```

## Resources

- [`<title>`: The Document Title element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title)
- [Influencing your title links in search results](https://developers.google.com/search/docs/appearance/title-link)
