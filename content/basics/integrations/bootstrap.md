---
title: "Bootstrap"
description: "Bootstrap integration for Thulite."
summary: "Bootstrap integration for Thulite."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 500
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Bootstrap integration for Thulite.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@thulite/bootstrap?style=flat-square)](https://www.npmjs.com/package/@thulite/bootstrap)

## Installation

```bash
npm i -D @thulite/bootstrap
```

## Setup

Add mounts to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@thulite/bootstrap/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@thulite/bootstrap/layouts"
  target = "layouts"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

## How to use

[..]

## Credits

This npm package is based on the Bootstrap examples:

- [Bootstrap Color Modes](https://github.com/twbs/examples/tree/main/color-modes)
- [Bootstrap w/ Vite](https://github.com/twbs/examples/tree/main/vite)

{{< link-card title="Add integrations" href="/guides/integrations/" >}}
