---
title: "Configuration Overview"
linkTitle: "Overview"
description: "Here's how a Thulite project configuration is organized, and the configuration files you will find in your new project."
summary: "Here's how a Thulite project configuration is organized, and the configuration files you will find in your new project."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 421
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Here's how a Thulite project configuration is organized, and the configuration files you will find in your new project.

## Example

A common Thulite project configuration directory might look like this:

{{< tree >}}

- {folder} config
  - {folder} _default
    - {toml} hugo.toml
    - {toml} markup.toml
    - {toml} menus.toml
    - {toml} module.toml
    - {toml} params.toml
  - {folder} next
    - {toml} hugo.toml
    - {toml} params.toml
  - {folder} production
    - {toml} hugo.toml
    - {toml} params.toml
- {brand-javascript} babel.config.js
- {brand-javascript} postcss.config.js

{{< /tree >}}

## `config/_default/`

### `hugo.toml`

The `hugo.toml` file includes [Hugo configuration](https://gohugo.io/getting-started/configuration/) options for your Thulite project. Here you can specify taxonomies to use, build options, server options, and more.

### `markup.toml`

The `markup.toml` file is where you [configure rendering](https://gohugo.io/getting-started/configuration-markup/) of markup to HTML.

### `menus.toml`

The `menus.toml` file is where you [define menu entries](https://gohugo.io/content-management/menus/).

### `module.toml`

The `module.toml` file specifies the [Hugo mounts](https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts), logically linking `node_modules` directories to component folders (ex: `assets`, `layouts`) — making Thulite Integrations available in your Thulite project.

### `params.toml`

The `params.toml` file is where you set [Thulite configuration](/reference/configuration/) options like e.g. options for themes and integrations.

## `config/next/`

Overrides for your next environment.

## `config/production/`

Overrides for your production environment.

{{< callout context="tip" icon="rocket" >}}
Set `baseurl` in `hugo.toml` to the absolute URL (protocol, host, path, and trailing slash) of your published site (e.g., https://www.example.org/docs/).
{{< /callout >}}

## `babel.config.js`

The `babel.config.js` file is where you configure [Babel](https://babeljs.io/). Thulite supports processing JavaScript files with Babel.

## `postcss.config.js`

The `postcss.config.js` file is where you configure [PostCSS](https://postcss.org/). Thulite uses PostCSS to add vendor prefixes to CSS rules using [Autoprefixer](https://github.com/postcss/autoprefixer) and to remove unused CSS from your project using [PurgeCSS](https://purgecss.com/).

## Hugo documentation

Thulite leverages Hugo's [configuration](https://gohugo.io/getting-started/configuration/). Here are some relevant topics:

{{< card-grid >}}
{{< link-card title="Configure Hugo" description="How to configure your Hugo site." href="https://gohugo.io/getting-started/configuration/" target="_blank" >}}
{{< link-card title="Babel" description="Hugo Pipes can process JavaScript files with Babel." href="https://gohugo.io/hugo-pipes/babel/" target="_blank" >}}
{{< /card-grid >}}
{{< card-grid >}}
{{< link-card title="PostCSS" description="Process CSS files with PostCSS, using any of the available plugins." href="https://gohugo.io/hugo-pipes/postcss/" target="_blank" >}}
{{< link-card title="CSS purging with PostCSS" description="There are several ways to set up CSS purging with PostCSS in Hugo." href="https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss" target="_blank" >}}
{{< /card-grid >}}
