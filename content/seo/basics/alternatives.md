---
title: "Alternatives"
description: "Understand alternate links for feeds in Thulite SEO, how Hugo output formats control RSS generation, and which rel=alternate tags are emitted."
summary: "Understand alternate links for feeds in Thulite SEO, how Hugo output formats control RSS generation, and which rel=alternate tags are emitted."
date: 2024-03-14T08:34:57+01:00
lastmod: 2026-04-10T12:21:32+02:00
draft: false
weight: 240
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `rel` HTML attribute defines the relationship between a linked resource and the current document. An `alternate` value indicates an alternate representation of the current document. With the `type` attribute value of "application/rss+xml" or "application/atom+xml", it creates a hyperlink referencing a syndication feed.

## Settings

By default, when you build your site, Hugo generates RSS feeds for home, section, taxonomy, and term pages. You can control feed generation in `config/_default/hugo.toml`.

For example, to generate feeds for home and section pages, but not for taxonomy and term pages:

```toml {title="hugo.toml"}
[outputs]
  home = ['html', 'rss']
  section = ['html', 'rss']
  taxonomy = ['html']
  term = ['html']
```

## Generated meta tags

Thulite uses [AlternativeOutputFormats](https://gohugo.io/methods/page/alternativeoutputformats/) to return a slice of OutputFormat objects, excluding the current output format, each representing one of the output formats enabled for the given page.

Thulite SEO generates the following meta tags (if applicable) — for example:

```html
<link rel="alternate" type="application/rss+xml" href="https://getdoks.org/index.xml" title="My Docs">
```

## Resources

- [RSS templates](https://gohugo.io/templates/rss/)
