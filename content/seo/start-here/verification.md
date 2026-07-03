---
title: "Verification"
description: "Verify your Thulite SEO setup by inspecting generated HTML tags, checking sitemaps, and validating metadata with external SEO and indexing tools."
summary: "Verify your Thulite SEO setup by inspecting generated HTML tags, checking sitemaps, and validating metadata with external SEO and indexing tools."
date: 2026-04-02T15:58:30+02:00
lastmod: 2026-04-10T12:09:21+02:00
draft: false
weight: 150
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide will help you verify your Thulite SEO configuration.

## Inspect generated HTML

View page source in your browser and confirm that key SEO tags are generated.

Check for:

- `<title>` and `<meta name="description">`
- `<link rel="canonical">`
- Open Graph tags (for example, `og:title`, `og:description`, `og:image`)
- Twitter tags (for example, `twitter:card`, `twitter:title`)
- Structured data (`<script type="application/ld+json">`)

{{< details "Example (excerpt)" >}}

```html
<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" as="font" href="https://seo.thulite.io/fonts/geist/files/geist-latin-wght-normal.woff2" type="font/woff2" crossorigin>
    <link rel="preload" as="font" href="https://seo.thulite.io/fonts/geist-mono/files/geist-mono-latin-wght-normal.woff2" type="font/woff2" crossorigin>
    <script src="/js/color-mode.7d9843fe8d06b487f08000f3dfc783b2c283d303e738a3e80bd25a903243b9aa.js" integrity="sha256-fZhD/o0GtIfwgADz38eDssKD0wPnOKPoC9JakDJDuao="></script>
    <link rel="stylesheet" href="/main.aa407ff5ae00292785649ab4eabc8231499a06171e4833459f0a67c3667404bbea6fcc40e14250fc3eefaa03bd9efd371a90716e85e98e86a1863ac7559f7160.css" integrity="sha512-qkB/9a4AKSeFZJq06ryCMUmaBhceSDNFnwpnw2Z0BLvqb8xA4UJQ/D7vqgO9nv03GpBxboXpjoahhjrHVZ9xYA==" crossorigin="anonymous">
    <noscript><style>img.lazyload { display: none; }</style></noscript>
    <base href="https://seo.thulite.io/docs/basics/canonical/">
    <link rel="canonical" href="https://seo.thulite.io/docs/basics/canonical/">
    <link rel="alternate" type="text/markdown" href="https://seo.thulite.io/docs/basics/canonical/index.md" title="Canonical | Thulite SEO">
    <title>Canonical — Thulite SEO</title>
    <meta name="description" content="The rel HTML attribute defines the relationship between a linked resource and the current document. A canonical value defines the preferred URL for the current document, which helps search engines reduce duplicate content.">
    <link rel="icon" href="/favicon.ico" sizes="32x32">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png">
    <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png">
    <link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png">
    <link rel="manifest" href="/manifest.webmanifest">
    <meta property="og:url" content="https://seo.thulite.io/docs/basics/canonical/">
    <meta property="og:site_name" content="Thulite SEO">
    <meta property="og:title" content="Canonical">
    <meta property="og:description" content="The rel HTML attribute defines the relationship between a linked resource and the current document. A canonical value defines the preferred URL for the current document, which helps search engines reduce duplicate content.">
    <meta property="og:locale" content="en">
    <meta property="og:type" content="article">
    <meta property="article:section" content="docs">
    <meta property="article:published_time" content="2024-03-13T17:44:10+01:00">
    <meta property="article:modified_time" content="2024-08-15T11:55:28+02:00">
    <meta property="og:image" content="https://seo.thulite.io/cover.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://seo.thulite.io/cover.png">
    <meta name="twitter:title" content="Canonical">
    <meta name="twitter:description" content="The rel HTML attribute defines the relationship between a linked resource and the current document. A canonical value defines the preferred URL for the current document, which helps search engines reduce duplicate content.">
    <meta name="twitter:site" content="@getdoks">
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": "https://seo.thulite.io/",
            "name": "Improve Your Search Rankings",
            "position": 1
          },
          {
            "@type": "ListItem",
            "item": "https://seo.thulite.io/docs/",
            "name": "Docs",
            "position": 2
          },
          {
            "@type": "ListItem",
            "item": "https://seo.thulite.io/docs/basics/",
            "name": "Basics",
            "position": 3
          },
          {
            "@type": "ListItem",
            "name": "Canonical",
            "position": 4
          }
        ]
      }
    </script>
  </head>
  <body>
  </body>
</html>
```

{{< /details >}}

## Inspect sitemaps

Open your sitemap URLs and confirm that expected pages are listed.

For example:

- [https://docs.thulite.io/sitemap-index.xml](/sitemap-index.xml)
- [https://docs.thulite.io/seo/start-here/sitemap.xml](/seo/start-here/sitemap.xml)

## Use tools

Use external tools to validate your metadata and indexing setup.

For example:

- [Meta Tags Toolkit](https://metatags.io/)
- [Google Search Console](https://search.google.com/search-console/about)
- [Ahrefs](https://ahrefs.com/)

If anything looks incorrect, continue to the [Troubleshooting](/seo/start-here/troubleshooting/) guide.
