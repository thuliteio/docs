---
title: "Settings"
description: "Reference for Hugo site settings used by Thulite SEO, including title, robots.txt generation, and sitemap options like changefreq and priority."
summary: "Reference for Hugo site settings used by Thulite SEO, including title, robots.txt generation, and sitemap options like changefreq and priority."
date: 2024-03-15T15:45:35+01:00
lastmod: 2026-04-10T13:45:38+02:00
draft: false
weight: 510
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the main site settings and sitemap settings, which can be set in `config/_default/hugo.toml`.

## Example

```toml {title="config/_default/hugo.toml"}
title = "Thulite"
enableRobotsTXT = true

[sitemap]
  changefreq = "monthly"
  disable = false
  filename = "sitemap.xml"
  priority = 0.5
```

## title

The website title used across the site output. A string — for example `"Thulite"`.

## enableRobotsTXT

Whether Hugo generates a `robots.txt` file. A boolean — default is `true`.

## sitemap

### changefreq

How frequently a page is likely to change in the sitemap. A string — valid values are `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, and `never`. Default is `""` (change frequency omitted from the rendered sitemap).

### disable

Whether sitemap generation is disabled. A boolean — default is `false`.

### filename

The output filename for the sitemap. A string — default is `sitemap.xml`.

### priority

The relative priority of a page in the sitemap. A float — valid values range from `0.0` to `1.0`. Default is `-1` (priority omitted from the rendered sitemap).
