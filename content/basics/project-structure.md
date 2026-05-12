---
title: "Project Structure"
description: "Your new Thulite project generated from the `create thulite` CLI wizard already includes some files and folders. Others, you will create yourself and add to Thulite' e..."
summary: "Your new Thulite project generated from the `create thulite` CLI wizard already includes some files and folders. Others, you will create yourself and add to Thulite' e..."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 200
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide.

## Example

Thulite basic starter (with recommended integrations):

```bash
.
├── LICENSE
├── archetypes
│   └── default.md
├── assets
│   ├── favicon.png
│   ├── favicon.svg
│   ├── images
│   │   └── paul-pascale-FI9QMIVMdCM-unsplash.jpg
│   └── scss
│       ├── app.scss
│       └── common
│           ├── _custom.scss
│           └── _variables-custom.scss
├── config
│   ├── _default
│   │   ├── hugo.toml
│   │   ├── markup.toml
│   │   ├── menus.toml
│   │   ├── module.toml
│   │   └── params.toml
│   ├── babel.config.js
│   ├── next
│   │   └── hugo.toml
│   ├── postcss.config.js
│   └── production
│       └── hugo.toml
├── content
│   └── _index.md
├── layouts
│   ├── home.html
│   └── single.html
├── netlify.toml
├── package.json
└── static
    ├── apple-touch-icon.png
    ├── cover.png
    ├── favicon.ico
    └── icon.svg

13 directories, 26 files
```


---


Your new Thulite project generated from the `create thulite` CLI wizard already includes some files and folders. Others, you will create yourself and add to Thulite' existing file structure.

Here's how a Thulite project is organized, and some files you will find in your new project.

## Directories and Files

Thulite leverages the Hugo [directory structure](https://gohugo.io/getting-started/directory-structure/) for your project. Every Thulite project root should include the following directories and files:

- `assets` - Your project assets (scripts, styles, images, etc.)
- `config` - Your project's configuration files (Thulite, Hugo, PostCSS, etc.)
- `content` - Your project content (pages, posts, etc.)
- `layouts` - Your project layouts (partials, shortcodes, etc.)
- `static` - Your non-code, unprocessed assets (fonts, icons, etc.)
- `package.json` - A project manifest.

## Example Project Tree

A common Thulite project directory might look like this:

{{< tree >}}

- {folder} assets/scss
  - {folder} common
    - {brand-sass} _custom.scss
    - {brand-sass} _variables-custom.scss
  - {brand-sass} app.scss
- {folder} config
  - {folder} _default
    - {toml} hugo.toml
    - {toml} module.toml
    - {toml} params.toml
- {folder} content
  - {markdown} _index.md
- {folder} layouts
  - {html} index.html
- {folder} static
  - {svg} favicon.svg
- {json} package.json

{{< /tree >}}


### `assets/scss`

It is a common convention to store your CSS or Sass files in a `assets/scss` directory, but this is not required. As long as your styles live somewhere in the `assets/` directory and are imported correctly, Thulite will handle and optimize them.

The `app.scss` file is used to specify the CSS or Sass files to import (or use). Put your custom (S)CSS variables in `common/variables-custom` and custom (S)CSS code in `common/_custom.scss`.

### `config/_default/`

The `hugo.toml` file includes [Hugo configuration](https://gohugo.io/getting-started/configuration/) options for your Thulite project. Here you can specify taxonomies to use, build options, server options, and more.

The `module.toml` file specifies the [Hugo mounts](https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts), logically linking `node_modules` directories to component folders (ex: `assets`, `layouts`) — making Thulite Integrations available in your Thulite project.

The `params.toml` file is where you set [Thulite configuration](/reference/configuration/) options like e.g. options for themes and integrations.

### `content/`

The `content/` directory is where you store [pages](/basics/pages/), organized in sections or page bundles (leaf bundles or branch bundles) and can contain page resources.

### `layouts/`

[Layouts](/basics/layouts/) are Thulite templates that define the UI structure shared by one or more pages.

### `static/`

The `static/` directory is for files and assets that do not need to be processed during Thulite' build process. These files will be copied into the build folder untouched.

This behavior makes `static/` ideal for common assets like images and fonts, or special files such as `robots.txt` and `manifest.webmanifest`.

You can place CSS and JavaScript in your `static/` directory, but be aware that those files will not be bundled or optimized in your final build.

:::tip
As a general rule, any CSS or JavaScript that you write yourself should live in your `assets/` directory.
:::


### `package.json`

This is a file used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Thulite (ex: `npm run dev`, `npm run build`).

There are [two kinds of dependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) you can specify in a `package.json`: `dependencies` and `devDependencies`. In most cases, these work the same: Thulite needs all dependencies at build time, and your package manager will install both. We recommend putting all of your dependencies in `dependencies` to start, and only use `devDependencies` if you find a specific need to do so.

For help creating a new `package.json` file for your project, check out the [manual setup](/install/manual/) instructions.
