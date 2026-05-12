---
title: "Integrations Overview"
linkTitle: "Overview"
description: "**Thulite integrations** add new functionality and behaviors for your project. You can write a custom integration yourself, use an official integration, or use integra..."
summary: "**Thulite integrations** add new functionality and behaviors for your project. You can write a custom integration yourself, use an official integration, or use integra..."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 499
toc: true
params:
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
**Thulite integrations** add new functionality and behaviors for your project. You can write a custom integration yourself, use an official integration, or use integrations built by the community.

Integrations can…

- Unlock Tailwind CSS, Bootstrap, and other popular CSS frameworks.
- Add new features to your project, like Images and SEO.
- Integrate themes like Doks or Bolt.

## Official Integrations

The following integrations are maintained by Thulite.

{{< card-grid >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/bolt-core" href="/guides/integrations/core/" >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/bootstrap" href="/guides/integrations/doks-core/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/core" href="/guides/integrations/core/" >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/doks-core" href="/guides/integrations/doks-core/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/images" href="/guides/integrations/doks-core/" >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/inline-svg" href="/guides/integrations/doks-core/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/seo" href="/guides/integrations/core/" >}}
{{< link-card src="svgs/thulite.svg" title="@thulite/tailwindcss" href="/guides/integrations/core/" >}}
{{< /card-grid >}}

## Setting up an Integration

### Adding an Integration

Add an integration to your site by running the following command in your project's root directory:

{{< tabs "tabs-1" >}}
  {{< tab "npm" >}}
```bash
  # Example: add Images
  npm install @thulite/images@latest
```
  {{< /tab >}}
  {{< tab "pnpm" >}}
```bash
  # Example: add Images
  pnpm add @thulite/images@latest
```
  {{< /tab >}}
  {{< tab "Yarn" >}}
```bash
  # Example: add Images
  yarn add @thulite/images@latest
```
  {{< /tab >}}
{{< /tabs >}}

### Configuring an Integration

You'll most likely have to update the mounts configuration, add parameters, add some CSS/JavaScript, and update the PostCSS settings.

## Upgrading an Integration

To upgrade an integration, use the appropriate command for your package manager.

{{< tabs "tabs-1" >}}
  {{< tab "npm" >}}
```bash
  # Example: upgrade Images
  npm install @thulite/images@latest
```
  {{< /tab >}}
  {{< tab "pnpm" >}}
```bash
  # Example: upgrade Images
  pnpm add @thulite/images@latest
```
  {{< /tab >}}
  {{< tab "Yarn" >}}
```bash
  # Example: upgrade Images
  yarn add @thulite/images@latest
```
  {{< /tab >}}
{{< /tabs >}}

## Removing an Integration

To remove an integration, uninstall the integration from your project.

{{< tabs "tabs-1" >}}
  {{< tab "npm" >}}
```bash
  # Example: remove Images
  npm uninstall @thulite/images
```
  {{< /tab >}}
  {{< tab "pnpm" >}}
```bash
  # Example: remove Images
  pnpm uninstall @thulite/images
```
  {{< /tab >}}
  {{< tab "Yarn" >}}
```bash
  # Example: remove Images
  yarn remove @thulite/images
```
  {{< /tab >}}
{{< /tabs >}}

Optionally, remove the configuration settings.

## Finding More Integrations

You can find integrations developed by the community in the [Thulite Integrations Directory](https://thulite.io/integrations/). Follow links there for detailed usage and configuration instructions.

## Building Your Own Integration

Thulite' Integrations are inspired by npm and Hugo, and designed to feel familiar to anyone who has written an npm package or Hugo Module before.

Check out the [Build a Thulite Integration](/guides/integrations/) guide to learn what integrations can do and how to write one yourself.
