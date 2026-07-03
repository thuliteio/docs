---
title: "Configuration"
description: "Configure Thulite SVG by setting inline_svg parameters in params.toml, including icon set directory and variant, so icons resolve and render correctly."
summary: "Configure Thulite SVG by setting inline_svg parameters in params.toml, including icon set directory and variant, so icons resolve and render correctly."
date: 2026-04-17T08:45:23+02:00
lastmod: 2026-04-24T15:20:57+02:00
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
Configure Thulite SVG by updating your project's parameters.

## Update parameters

Update your [parameters](/svg/reference/parameters/) in `./config/_default/params.toml`:

```toml {title="params.toml"}
# Inline SVG (@thulite/inline-svg)
[inline_svg]
  iconSetDir = "tabler-icons" # "tabler-icons" (default) or "lucide" (for example)
  iconSetVariant = "outline" # outline (default) or filled
```
