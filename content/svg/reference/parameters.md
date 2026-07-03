---
title: "Parameters"
description: "Review all inline_svg configuration parameters, including icon set directory and variant options, with defaults, valid values, and deprecation notes."
summary: "Review all inline_svg configuration parameters, including icon set directory and variant options, with defaults, valid values, and deprecation notes."
date: 2026-04-17T12:14:11+02:00
lastmod: 2026-04-24T15:31:10+02:00
draft: false
weight: 910
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This reference guide describes the SVG module parameters, which can be set in `config/_default/params.toml`.

## Example

```toml {title="config/_default/params.toml"}
# Inline SVG (@thulite/inline-svg)
[inline_svg]
  iconSetDir = "tabler-icons" # "tabler-icons" (default) or "lucide" (for example)
  iconSetVariant = "outline" # outline (default) or filled
```

## inline_svg

Default parameters for resolving and rendering inline SVG icons.

### iconSetDir

The icon set directory used when resolving SVG icon files. A string — default is `"tabler-icons"`.

### iconSetVariant

{{< callout context="warning" title="Deprecated" icon="alert-triangle" >}}
This setting will be removed in a future release.
{{< /callout >}}

The icon set variant used for icons that provide multiple styles. A string — valid values are `"outline"` and `"filled"`. Default is `"outline"`.
