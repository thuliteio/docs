---
title: "Page Frontmatter"
description: "Reference for page frontmatter fields and per-page SEO overrides, including custom title, description, canonical URL, robots, sitemap, and product data."
summary: "Reference for page frontmatter fields and per-page SEO overrides, including custom title, description, canonical URL, robots, sitemap, and product data."
date: 2026-04-02T08:27:29+02:00
lastmod: 2026-04-10T13:45:51+02:00
draft: false
weight: 530
toc: true
params:
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
    sitemap: false # true (default) or false
---

This reference guide describes page frontmatter fields and page-level SEO overrides.

## Example

```md
---
title: "First Indexed Page"
description: ""
summary: ""
date: 2026-04-02T08:28:01+02:00
lastmod: 2026-04-02T08:28:01+02:00
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

## title

The page title used in rendered content and metadata. A string — for example `"First Indexed Page"`.

## description

The page description used for metadata and previews. A string — default is `""` (recommended to set).

## params.sitemap_exclude

Whether to exclude this page from the sitemap. A boolean — default is `false`.

## params.seo

Page-level overrides for SEO metadata.

### title

Custom SEO title for this page. A string — default is `""` (falls back to generated title).

### description

Custom SEO description for this page. A string — default is `""` (falls back to summary/description logic).

### canonical

Custom canonical URL for this page. A string URL — default is `""`.

### robots

Custom robots meta tags for this page. A string — default is `""`.

### sitemap

Whether this page is included in sitemap output. A boolean — valid values are `true` (default) or `false`.

### structured_data.product

Product-specific structured data fields for pages using Product schema.

#### currency

The product currency code. A string — for example `USD`.

#### price

The product price. A number — for example `99`.

#### availability

The product availability URL from Schema.org. A string URL — for example `https://schema.org/OnlineOnly`.
