---
title: "Product"
description: "Generate Product schema in Thulite SEO by defining product sections and frontmatter offer fields like price, currency, and availability."
summary: "Generate Product schema in Thulite SEO by defining product sections and frontmatter offer fields like price, currency, and availability."
date: 2024-03-14T21:39:05+01:00
lastmod: 2026-04-10T12:40:50+02:00
draft: false
weight: 480
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.

## Settings

You can set `product` in `config/_default/params.toml`:

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
    product = ["themes"] # Product sections
```

You can set `currency`, `price`, and `availability` in the frontmatter of a page:

```md
---
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
  structured_data:
    product:
      currency: USD
      price: 0
      availability: https://schema.org/OnlineOnly
---
```

## Generated meta tag

Thulite SEO generates the following meta tag (if applicable) — for example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Doks",
      "description": "Doks theme for Thulite sites.",
      "brand": {
        "@type": "Brand",
        "name": "Thulite"
      },
      "image": [
        {
          "@id": "https://thulite.io/themes/doks/featured-doks.png"
        }
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://thulite.io/themes/doks/",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/OnlineOnly"
      }
    }
  ]
}
</script>
```

## Resources

- [Product (`Product`, `Review`, `Offer`) structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Product](https://schema.org/Product)
