---
title: "Person"
description: "Set Person schema defaults in Thulite SEO for the homepage, including name, profiles, and images, to generate accurate personal JSON-LD."
summary: "Set Person schema defaults in Thulite SEO for the homepage, including name, profiles, and images, to generate accurate personal JSON-LD."
date: 2024-03-14T21:37:57+01:00
lastmod: 2026-04-10T12:40:13+02:00
draft: false
weight: 430
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A person (alive, dead, undead, or fictional).

## Settings

You can set `type`, `name`, `sameAs`, and `images` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.schemas]
    type = "Person" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Henk Verlinde" # Name of Organization or Person
    sameAs = [] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable, homepage only) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "url": "https://henkverlinde.com/",
      "name": "Henk Verlinde",
      "image": [
        {
          "@id": "https://henkverlinde.com/cover.png"
        }
      ]
    }
  ]
}
</script>
```

## Resources

- [Person](https://schema.org/Person)
