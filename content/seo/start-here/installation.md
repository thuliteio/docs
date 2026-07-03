---
title: "Installation"
description: "Install Thulite SEO in your project with npm, pnpm, Yarn, or bun, then add required module mounts so the integration layouts are loaded correctly."
summary: "Install Thulite SEO in your project with npm, pnpm, Yarn, or bun, then add required module mounts so the integration layouts are loaded correctly."
date: 2023-11-08T12:26:26+01:00
lastmod: 2026-04-10T12:09:11+02:00
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

This guide shows how to add Thulite SEO to your Thulite project.

{{< callout context="note" title="Already installed?" icon="info-circle" >}}
If your Thulite template already includes the recommended integrations (SEO and Images), skip installation and continue to [Configuration](/seo/start-here/configuration/).
{{< /callout >}}

## Add Thulite SEO

Add Thulite SEO to your site by running the following command in your project's root directory:

{{< tabs "install-images" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/seo@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install @thulite/seo@latest
```

{{< /tab >}}
{{< /tabs >}}

This installs the required package.

## Update mounts

Add mounts to `./config/_default/module.toml`:

```toml {title=module.toml}
## layouts
[[mounts]]
  source = "layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/seo/layouts"
  target = "layouts"
```

## Configure Thulite SEO

{{< link-card
  title="Configure Thulite SEO"
  description="Update settings, parameters, and page front matter."
  href="/seo/start-here/configuration/"
>}}
