---
title: "NewsArticle"
description: "Enable NewsArticle structured data in Thulite SEO for news sections and inspect the generated JSON-LD fields for publication metadata."
summary: "Enable NewsArticle structured data in Thulite SEO for news sections and inspect the generated JSON-LD fields for publication metadata."
date: 2024-03-14T21:38:40+01:00
lastmod: 2026-04-10T12:40:32+02:00
draft: false
weight: 460
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.

## Settings

You can set `newsArticle` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "headline": "Example Post",
      "description": "Just an example post.",
      "isPartOf": {
        "@id": "https://getdoks.org/blog/example-post/"
      },
      "mainEntityOfPage": {
        "@id": "https://getdoks.org/blog/example-post/"
      },
      "datePublished": "2023-09-07T16:27:22+02:00",
      "dateModified": "2023-09-07T16:27:22+02:00",
      "author": {
        "@type": "Organization",
        "name": "Thulite",
        "url": "https://getdoks.org/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Thulite"
      }
    }
  ]
}
</script>
```

## Resources

- [Article (`Article`, `NewsArticle`, `BlogPosting`) structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [NewsArticle](https://schema.org/NewsArticle)
