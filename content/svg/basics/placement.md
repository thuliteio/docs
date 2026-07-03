---
title: "Placement"
description: "Understand where SVG files belong in Hugo, when to use page resources or global assets, and how to reference logos and icons with reliable paths."
summary: "Understand where SVG files belong in Hugo, when to use page resources or global assets, and how to reference logos and icons with reliable paths."
date: 2026-04-17T14:47:01+02:00
lastmod: 2026-04-24T15:27:18+02:00
draft: false
weight: 210
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains where to store SVG resources and how to reference them.
You can store SVGs as page or global resources. Icons are available as global resources.

## Page resource

A page resource is a resource in the current [page bundle](https://gohugo.io/content-management/page-bundles/). A page bundle is a directory with an `index.md` or `_index.md` file at its root.

{{< tree >}}

- {folder} content
  - {folder} docs
    - {folder} getting-started
      - {markdown} index.md
      - {svg} logo-netlify.svg

{{< /tree >}}

### Reference

To display a page resource SVG, use the relative path:

```bash { frame=none }
logo-netlify.svg
```

## Global resource

A global resource is a resource in the `assets` directory, or within any directory [mounted](https://gohugo.io/configuration/module/#mounts) to the `assets` directory (like for example icon sets).

{{< tree >}}

- {folder} assets
  - {folder} svgs
    - {svg} logo-netlify.svg
    - {folder} lucide
      - {svg} check.svg
    - {folder} tabler-icons
      - {svg} check.svg

{{< /tree >}}

### Reference

To display a global resource SVG or icon, use the relative path:

```bash { frame=none }
svgs/logo-netlify.svg
```

```bash { frame=none }
svgs/lucide/check.svg
```

```bash { frame=none }
svgs/tabler-icons/check.svg
```

To display a global resource icon of an icon set [configured](/svg/start-here/configuration/) in `iconSetDir`, use the icon name:

```bash { frame=none }
check
```
