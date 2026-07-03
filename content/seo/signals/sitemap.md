---
title: "Sitemap"
description: "Configure sitemap defaults in Hugo, inspect generated sitemap files, and learn how to disable sitemaps globally or exclude individual pages."
summary: "Configure sitemap defaults in Hugo, inspect generated sitemap files, and learn how to disable sitemaps globally or exclude individual pages."
date: 2024-03-14T21:04:10+01:00
lastmod: 2026-04-10T12:33:52+02:00
draft: false
weight: 350
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A sitemap is a list of pages of a website. Structured listings of a site's pages help with search engine optimization, providing a link for web crawlers such as search engines to follow.

## Settings

Set the default values for [change frequency](https://www.sitemaps.org/protocol.html#changefreqdef) and [priority](https://www.sitemaps.org/protocol.html#priority), and the name of the generated file, in `config/_default/hugo.toml`.

See the [Sitemap reference page](/docs/reference/settings/) for all available values.

```toml {title="hugo.toml"}
[sitemap]
  changefreq = "monthly"
  disable = false
  filename = "sitemap.xml"
  priority = 0.5
```

## Generated files

Thulite SEO generates the following `sitemap.xml` — for example:

```xml {title="sitemap.xml"}
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>https://seo.thulite.io/en/sitemap.xml</loc>
      <lastmod>2023-09-07T17:19:07+02:00</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://seo.thulite.io/de/sitemap.xml</loc>
      <lastmod>2023-09-07T16:04:48+02:00</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://seo.thulite.io/nl/sitemap.xml</loc>
   </sitemap>
</sitemapindex>
```

## Disable sitemap

To disable the sitemap (applies to all pages unless overridden in the frontmatter of a page), set `sitemap.disable = true` in `config/_default/hugo.toml`:

```toml {title="hugo.toml"}
[sitemap]
  disable = true
```

## Exclude a page

To exclude a page from the sitemap, add to the frontmatter of the page:

```md
---
params:
  sitemap_exclude: true
---
```

## Resources

- [Sitemap templates](https://gohugo.io/templates/sitemap/)
