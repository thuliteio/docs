---
title: "Usage"
description: "Learn how to update page frontmatter and apply page-level SEO overrides, including custom title, description, canonical URL, robots tags, and structured data."
summary: "Learn how to update page frontmatter and apply page-level SEO overrides, including custom title, description, canonical URL, robots tags, and structured data."
date: 2026-04-16T17:01:59+02:00
lastmod: 2026-04-16T17:01:59+02:00
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
This guide explains how to configure page frontmatter fields and page-level SEO overrides.
For all available fields, see the [page frontmatter reference page](/seo/reference/page-frontmatter/).

## Update page frontmatter

Update your page frontmatter when needed:

```md
---
title: "First Indexed Page"
description: ""
summary: ""
date: 2026-04-02T08:28:01+02:00
lastmod: 2026-04-16T17:21:50+02:00
draft: true
weight: 999
params:
  toc: true
  sitemap_exclude: false
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
    structured_data:
      product:
        currency: USD
        price: 99
        availability: https://schema.org/OnlineOnly
---
```
