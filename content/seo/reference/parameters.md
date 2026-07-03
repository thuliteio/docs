---
title: "Parameters"
description: "Reference for params.toml values in Thulite SEO, covering site metadata, social accounts, description rules, favicons, and schema settings."
summary: "Reference for params.toml values in Thulite SEO, covering site metadata, social accounts, description rules, favicons, and schema settings."
date: 2024-03-15T15:45:42+01:00
lastmod: 2026-04-10T13:45:45+02:00
draft: false
weight: 520
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the main site parameters and SEO module parameters, which can be set in `config/_default/params.toml`.

## Example

```toml {title="config/_default/params.toml"}
# Hugo
title = "Thulite"
subTitle = "SEO"
description = "Everything you need to make your Thulite website more visible in search results. Solid setup and easy to use."
images = ["cover.png"]

[social]
  twitter = "getdoks"
  facebook_admin = ""

# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = "—"
    suffix = ""
  [seo.description]
    summaryFallback = "" # "" (default)
  [seo.description.length]
    errorlevel = "warning" # warning (default), error, or ignore
    min = 110
    max = 160
  [seo.favicons]
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = [] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = [] # BlogPosting sections
    product = [] # Product sections
```

## title

The website title used across the site output. A string — for example `"Thulite"`.

## subtitle

The website subtitle used in theme/UI contexts. A string — for example `"SEO"`.

## description

The default website description used for metadata and previews. A string — for example `"Everything you need to make your Thulite website more visible in search results."`.

## images

Default site images used for social cards and metadata fallbacks. An array of strings — for example `["cover.png"]`.

## social

Social account settings used by templates and metadata.

### twitter

The Twitter/X account handle (without `@`) used for social metadata. A string — for example `"getdoks"`.

### facebook_admin

The Facebook admin ID used for Facebook metadata. A string — default is `""`.

## seo.title

Title generation settings for SEO metadata.

### separator

The separator between page title parts. A string — default is `"—"`.

### suffix

An optional suffix appended to generated titles. A string — default is `""` (no suffix).

## seo.description

Description generation settings for SEO metadata.

### summaryFallback

Fallback text used when no explicit description is available. A string — default is `""`.

## seo.description.length

Description length validation settings.

### errorlevel

Validation severity when description length is outside the configured range. A string — valid values are `warning`, `error`, and `ignore`. Default is `"warning"`.

### min

Minimum recommended description length in characters. An integer — for example `110`.

### max

Maximum recommended description length in characters. An integer — for example `160`.

## seo.favicons

Favicon file settings used by generated metadata.

### icon

The PNG favicon filename. A string — default is `"favicon.png"`.

### svgIcon

The SVG favicon filename. A string — default is `"favicon.svg"`.

## seo.schemas

Schema.org configuration for structured data output.

### type

The primary schema type. A string — valid values are `"Organization"` and `"Person"`. Default is `"Organization"`.

### logo

Logo image used for structured data. A string — default is `"favicon-512x512.png"`.

### name

Name used for Organization or Person structured data. A string — for example `"Thulite"`.

### sameAs

Profile URLs associated with the Organization or Person. An array of strings — default is `[]`.

### images

Default images used in schema markup. An array of strings — default is `["cover.png"]`.

### article

Sections that should use the `Article` schema. An array of section names — default is `[]`.

### newsArticle

Sections that should use the `NewsArticle` schema. An array of section names — default is `[]`.

### blogPosting

Sections that should use the `BlogPosting` schema. An array of section names — default is `[]`.

### product

Sections that should use the `Product` schema. An array of section names — default is `[]`.
