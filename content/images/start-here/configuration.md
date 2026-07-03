---
title: "Configuration"
description: "Configure Thulite Images by updating Hugo imaging settings and module parameters for responsive output, lazy loading, and processing defaults."
summary: "Configure Thulite Images by updating Hugo imaging settings and module parameters for responsive output, lazy loading, and processing defaults."
date: 2026-04-13T14:42:41+02:00
lastmod: 2026-04-16T16:00:38+02:00
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

Configure Thulite Images by updating settings and parameters.

## Update settings

Update your [settings](/images/reference/settings/) in `./config/_default/hugo.toml`:

```toml {title="hugo.toml"}
[imaging]
  anchor = "Center"
  bgColor = "#ffffff"
  compression = "lossy"
  quality = 85
  resampleFilter = "Lanczos"
  [imaging.webp]
    hint = "photo"
    method = 2
    useSharpYuv = false
```

## Update parameters

Update your [parameters](/images/reference/parameters/) in `./config/_default/params.toml`:

```toml {title="params.toml"}
# Images (@thulite/images)
[thulite_images]
  [thulite_images.defaults]
    decoding = "async" # sync, async, or auto (default)
    fetchpriority = "auto" # high, low, or auto (default)
    loading = "lazy" # eager or lazy (default)
    widths = [480, 576, 768, 1025, 1200, 1440] # [640, 768, 1024, 1366, 1600, 1920] for example
    sizes = "auto" # 100vw (default), 75vw, or auto for example
    process = "" # "fill 1600x900" or "fill 2100x900" for example
    lqip = "16x webp q20" # "16x webp q20" or "21x webp q20" for example
```
