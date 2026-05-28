---
title: "Page Frontmatter"
description: ""
summary: ""
date: 2026-03-25T13:02:07+01:00
lastmod: 2026-03-25T13:02:11+01:00
draft: false
weight: 429
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This reference guide describes page frontmatter fields in `./content/*.md` files.

## Example

```md {title="_index.md"}
---
title: "My page"
description: "Short description for metadata and previews."
summary: "Short summary shown in lists and cards."
date: 2026-05-28T08:00:00+02:00
lastmod: 2026-05-28T08:00:00+02:00
draft: false
weight: 100
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
```

## title

The page title used in rendered content and metadata. A string — for example `"First Indexed Page"`.

## description

The page description used for metadata and previews. A string — default is `""` (recommended to set).

## summary

The short summary used in lists and cards. A string — default is `""` (recommended to set).

## date

The original publication date of the page. A datetime value.

## lastmod

The last modified date of the page. A datetime value.

## draft

Whether the page is excluded from production builds. A boolean — default is `true` in the archetype.

## weight

The sort order for pages within a section. A number — lower values sort first.

## params

### toc

Whether to show the table of contents on the page. A boolean — default is `true`.

### seo

#### title

The page-specific SEO title override. A string — default is `""`.

#### description

The page-specific SEO description override. A string — default is `""`.

#### canonical

The custom canonical URL for the page. A string — default is `""`.

#### robots

The custom robots meta value for the page. A string — default is `""`.

## Learn more

<!-- markdownlint-disable MD034 -->
{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Front matter" description="Official guide to front matter fields and formats in Hugo." href="https://gohugo.io/content-management/front-matter/" target="_blank" >}}
{{< /card-grid >}}
<!-- markdownlint-enable MD034 -->
