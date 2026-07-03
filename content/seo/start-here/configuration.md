---
title: "Configuration"
description: "Learn how to configure Thulite SEO in hugo.toml, params.toml, and page frontmatter, including sitemap, title, description length, and schema settings."
summary: "Learn how to configure Thulite SEO in hugo.toml, params.toml, and page frontmatter, including sitemap, title, description length, and schema settings."
date: 2024-03-15T15:25:08+01:00
lastmod: 2026-04-16T17:19:32+02:00
draft: false
weight: 130
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Configure Thulite SEO by updating settings, parameters, and page frontmatter.

## Update settings

Update your [settings](/seo/reference/settings/) in `./config/_default/hugo.toml`:

```toml {title="hugo.toml"}
title = "Thulite"
enableRobotsTXT = true

[sitemap]
  changefreq = "monthly"
  disable = false
  filename = "sitemap.xml"
  priority = 0.5
```

## Update parameters

Update your [parameters](/seo/reference/parameters/) in `./config/_default/params.toml`:

```toml {title="params.toml"}
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
