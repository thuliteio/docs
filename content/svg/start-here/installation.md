---
title: "Installation"
description: "Install Thulite SVG and optional icon sets with your package manager, then add required Hugo mounts so layouts and SVG assets are discovered correctly."
summary: "Install Thulite SVG and optional icon sets with your package manager, then add required Hugo mounts so layouts and SVG assets are discovered correctly."
date: 2026-04-17T08:45:15+02:00
lastmod: 2026-04-24T15:20:50+02:00
draft: false
weight: 120
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide shows how to add Thulite SVG to your Thulite project.

{{< callout context="note" title="Already installed?" icon="info-circle" >}}
If your Thulite template already includes the Thulite SVG integration, skip installation and continue to [Configuration](/svg/start-here/configuration/).
{{< /callout >}}

## Add Thulite SVG

Add Thulite SVG to your site by running the following command in your project's root directory:

{{< tabs "install-inline-svg" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/inline-svg@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/inline-svg@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/inline-svg@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install @thulite/inline-svg@latest
```

{{< /tab >}}
{{< /tabs >}}

This installs the required package.

## Add icon set(s)

Add one or more icon sets, for example [Tabler Icons](https://tabler.io/icons) (recommended, included in the Doks template) and [Lucide](https://lucide.dev/).

{{< tabs "install-inline-svg" >}}
{{< tab "npm" >}}

```bash
npm install @tabler/icons@latest lucide-static@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @tabler/icons@latest lucide-static@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @tabler/icons@latest lucide-static@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install @tabler/icons@latest lucide-static@latest
```

{{< /tab >}}
{{< /tabs >}}

This installs the required package(s).

## Update mounts

Add mounts to `./config/_default/module.toml`:

```toml {title=module.toml}
## layouts
[[mounts]]
  source = "layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/inline-svg/layouts"
  target = "layouts"

## assets
[[mounts]]
  source = "node_modules/@tabler/icons/icons/outline"
  target = "assets/svgs/tabler-icons"

[[mounts]]
  source = "node_modules/lucide-static/icons"
  target = "assets/svgs/lucide"

[[mounts]]
  source = "assets"
  target = "assets"
```

## Configure Thulite SVG

{{< link-card
  title="Configure Thulite SVG"
  description="Update your project's parameters."
  href="/svg/start-here/configuration/"
>}}
