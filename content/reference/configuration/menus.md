---
title: "Menus"
description: "Create __menus__ by defining entries, localizing each entry, and rendering the resulting data structure."
summary: "Create __menus__ by defining entries, localizing each entry, and rendering the resulting data structure."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
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
Create __menus__ by defining entries, localizing each entry, and rendering the resulting data structure.


## Examples

For example, to define entries for the main menu:

```toml title="config/_default/menus.toml"
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10

[[main]]
  name = 'Products'
  pageRef = '/products'
  weight = 20

[[main]]
  name = 'Services'
  pageRef = '/services'
  weight = 30

```

## Hugo documentation

Thulite leverages Hugo's [menus](https://gohugo.io/content-management/menus/). Here are some relevant topics:

{{< card-grid >}}
  {{< link-card title="Menus" description="There are three ways to define menu entries" href="https://gohugo.io/content-management/menus/" target="_blank" >}}
  {{< link-card title="Localization" description="Localization of menu entries depends on how you define them." href="https://gohugo.io/content-management/multilingual/#menus" target="_blank" >}}
  {{< link-card title="Templates" description="Create templates to render one or more menus." href="https://gohugo.io/templates/menu-templates/" target="_blank" >}}
{{< /card-grid >}}
