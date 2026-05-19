---
title: "Pages"
description: "__Pages__ are files that live in the `content` directory of your Thulite project. They are responsible for handling routing, data loading, and overall page layout for..."
summary: "__Pages__ are files that live in the `content` directory of your Thulite project. They are responsible for handling routing, data loading, and overall page layout for..."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 205
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Pages are files that live in the `content` directory of your Thulite project. They are responsible for handling routing, data loading, and overall page layout for every page in your website.

## Create new content

You can create new content by running the [`create` command](/basics/commands/#create) in your terminal.

### Examples

For example, create an about page using a [leaf bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles):

{{< tabs "package-manager-1" >}}
{{< tab "npm" >}}

```bash
npm run create content about/index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create content about/index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create content about/index.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create content about/index.md
```

{{< /tab >}}
{{< /tabs >}}

Or, create a home page using a [branch bundle](https://gohugo.io/content-management/page-bundles/#branch-bundles):

{{< tabs "package-manager-1" >}}
{{< tab "npm" >}}

```bash
npm run create content _index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create content _index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create content _index.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create content _index.md
```

{{< /tab >}}
{{< /tabs >}}

## Hugo documentation

Thulite leverages Hugo's [content management](https://gohugo.io/content-management/). Here are some relevant topics:

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Content organization" description="Organize your content in a manner that reflects the rendered website." href="https://gohugo.io/content-management/organization/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Page bundles" description="Use page bundles to logically associate one or more resources with content." href="https://gohugo.io/content-management/page-bundles/" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Content formats" description="Create your content using multiple content formats." href="https://gohugo.io/content-management/formats/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Front matter" description="Use front matter to add metadata to your content." href="https://gohugo.io/content-management/front-matter/" target="_blank" >}}
{{< /card-grid >}}
