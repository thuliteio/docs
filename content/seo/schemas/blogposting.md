---
title: "BlogPosting"
description: "Set up BlogPosting schema generation in Thulite SEO by assigning blog sections, then validate the resulting JSON-LD for blog entries."
summary: "Set up BlogPosting schema generation in Thulite SEO by assigning blog sections, then validate the resulting JSON-LD for blog entries."
date: 2024-03-14T21:38:52+01:00
lastmod: 2026-04-10T12:40:43+02:00
draft: false
weight: 470
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A blog post.

## Settings

You can set `blogPosting` in `config/_default/params.toml`:

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
      "@type": "BlogPosting",
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
- [BlogPosting](https://schema.org/BlogPosting)
