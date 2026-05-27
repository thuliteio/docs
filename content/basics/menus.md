---
title: "Menus"
description: "Create menus by defining entries, localizing each entry, and rendering the resulting data structure."
summary: "Create menus by defining entries, localizing each entry, and rendering the resulting data structure."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 231
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Create menus by defining entries, localizing each entry, and rendering the resulting data structure.

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

## Learn more

<!-- markdownlint-disable MD034 -->
{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menus" description="Hugo guide to defining and working with menu entries." href="https://gohugo.io/content-management/menus/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menu localization" description="How to translate menus for multilingual sites." href="https://gohugo.io/content-management/multilingual/#menus" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menu templates" description="Template reference for rendering menus in layouts." href="https://gohugo.io/templates/menu/" target="_blank" class="w-50">}}
{{< /card-grid >}}
<!-- markdownlint-enable MD034 -->
