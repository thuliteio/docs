---
title: "Image placement"
description: "Learn where to store Thulite Images as page, section, global, or remote resources and how to reference each type correctly in your site."
summary: "Learn where to store Thulite Images as page, section, global, or remote resources and how to reference each type correctly in your site."
date: 2023-11-09T14:37:09+01:00
lastmod: 2026-04-16T16:08:50+02:00
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

This guide explains where to store image resources and how to reference them.
You can store images as page, section, global, or remote resources.

## Page resource

A page resource is a resource in the current [page bundle](https://gohugo.io/content-management/page-bundles/). A page bundle is a directory with an `index.md` or `_index.md` file at its root.

```bash
content/
└── posts/
    └── post-1/         # page bundle
        ├── index.md
        └── bird.jpg    # page resource
```

### Reference

To display a page resource image, use the relative path:

```bash { frame=none }
bird.jpg
```

## Section resource

A section resource is a resource in the current section.

```bash
content/
└── posts/
    ├── bird.jpg        # section resource
    └── post-1.md
```

### Reference

To display a section resource image, use the relative path:

```bash { frame=none }
bird.jpg
```

## Global resource

A global resource is a resource in the `assets` directory, or within any directory [mounted](https://gohugo.io/configuration/module/#mounts) to the `assets` directory.

```bash
assets/
└── images/
    └── bird.jpg    # global resource
```

### Reference

To display a global resource image, use the relative path:

```bash { frame=none }
images/bird.jpg
```

## Remote resource

A remote resource is a resource on a remote server, accessible via HTTP(S).

### Reference

To display a remote resource image, use the URL:

```bash { frame=none }
https://images.unsplash.com/photo-1690198517569-45458a850563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
```
