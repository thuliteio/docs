---
title: "Installation"
description: "Install Thulite Images in your Thulite project, update module mounts, and safelist required CSS classes so image components build correctly."
summary: "Install Thulite Images in your Thulite project, update module mounts, and safelist required CSS classes so image components build correctly."
date: 2026-04-13T14:42:30+02:00
lastmod: 2026-04-16T16:00:33+02:00
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

This guide shows how to add Thulite Images to your Thulite project.

{{< callout context="note" title="Already installed?" icon="info-circle" >}}
If your Thulite template already includes the recommended integrations (SEO and Images), skip installation and continue to [Configuration](/images/start-here/configuration/).
{{< /callout >}}

## Add Thulite Images

Add Thulite Images to your site by running the following command in your project's root directory:

{{< tabs "install-images" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/images@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/images@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/images@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install @thulite/images@latest
```

{{< /tab >}}
{{< /tabs >}}

This installs the required package.

## Update mounts

Add mounts to `./config/_default/module.toml`:

```toml {title=module.toml}
## assets
[[mounts]]
  source = "node_modules/@thulite/images/assets"
  target = "assets"

[[mounts]]
  source = "assets"
  target = "assets"

## layouts
[[mounts]]
  source = "layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/images/layouts"
  target = "layouts"
```

## Update PostCSS configuration

Add the following CSS class selectors to the `safelist` array in `./config/postcss.config.js`:

```js {title="postcss.config.js"}
const purgecss = purgeCSSPlugin({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements;
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
  },
  dynamicAttributes: [],
  safelist: [
    'img-fluid',
    'blur-up',
    'lazyload',
    'lazyloaded',
  ]
});
```

## Configure Thulite Images

{{< link-card
  title="Configure Thulite Images"
  description="Update settings and parameters."
  href="/images/start-here/configuration/"
>}}
