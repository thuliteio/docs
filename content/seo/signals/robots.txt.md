---
title: "robots.txt"
description: "Understand how robots.txt controls crawler access and review the default robots.txt output Thulite SEO generates for your website root."
summary: "Understand how robots.txt controls crawler access and review the default robots.txt output Thulite SEO generates for your website root."
date: 2024-03-14T20:52:14+01:00
lastmod: 2026-04-10T12:33:43+02:00
draft: false
weight: 340
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

`robots.txt` is a file which is usually placed in the root of your website. It decides whether crawlers are permitted or forbidden access to your website.

For example, you can forbid crawlers to visit a certain folder (and all the files therein contained) or to crawl a specific file, usually to prevent those files being indexed by other search engines.

## Settings

No settings.

## Generated file

Thulite SEO generates the following `robots.txt` — for example:

```txt
User-agent: *
Disallow: /admin/
Sitemap: https://seo.thulite.io/sitemap.xml
```

## Resources

- [How Google interprets the robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
