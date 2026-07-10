---
title: "Updating"
description: "Update Thulite Images with your package manager and review release notes so you can adopt the latest fixes, features, and changes safely."
summary: "Update Thulite Images with your package manager and review release notes so you can adopt the latest fixes, features, and changes safely."
date: 2026-04-13T14:43:09+02:00
lastmod: 2026-04-16T16:01:01+02:00
draft: false
weight: 160
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Update Thulite Images the same way you update any `@thulite/*` integration or template package.

## Update to the latest version

{{< tabs "update-images" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/images@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/images --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/images --latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun update @thulite/images --latest
```

{{< /tab >}}
{{< /tabs >}}

## Review release notes

See the [Thulite Images releases](https://github.com/thuliteio/images/releases) for a complete list of changes in each version.
