---
title: Dependencies
description: Thulite leverages npm to explicitly declare and isolate dependencies and uses Hugo's module configuration to mount the dependencies' directories, making them available for processing.
sidebar:
  order: 1
---
Thulite leverages npm to explicitly declare and isolate dependencies and uses Hugo's module configuration to mount the dependencies' directories, making them available for processing.

## Explicit declaration and isolation

The ["Dependencies"](https://12factor.net/dependencies) section of the Twelve-Factor App methodology emphasizes the importance of explicitly declaring and isolating dependencies in an application. This involves using a dependency declaration manifest and an isolation tool to ensure that no implicit dependencies from the system environment affect the app. This practice ensures consistency across different environments and simplifies setup for new developers. Additionally, twelve-factor apps avoid relying on the implicit existence of system tools, instead bundling necessary tools within the app itself to ensure compatibility and reliability.

## JavaScript

For a JavaScript project following the Twelve-Factor App methodology, dependencies are explicitly declared in a `package.json` file. This file acts as the dependency declaration manifest, listing all necessary packages. Isolation is achieved by using a tool like [npm](https://www.npmjs.com/), which installs dependencies in a `node_modules` directory within the project. This ensures that the app does not rely on system-wide packages, maintaining consistency across different environments. Additionally, any required scripts or tools should be included as npm scripts to avoid system tool dependencies.

### Pros

- Centralizes all dependencies (JavaScript and other assets) in one place (`package.json`).
- Common for JavaScript developers, leveraging npm's ecosystem and tools.

### Cons

- Not following the preferred, familiar Hugo way.

## Hugo

To follow the Twelve-Factor App methodology with Hugo, use [Hugo Modules](https://gohugo.io/hugo-modules/use-modules/) to manage dependencies. Here's how it works:

1. __Declare Dependencies__: Use a `go.mod` file to specify the modules your Hugo project requires.
2. __Isolation__: Use Hugo's module system to isolate dependencies, ensuring the same versions are used in all environments.

Additionally, Hugo provides the [`hugo mod npm pack`](https://gohugo.io/commands/hugo_mod_npm_pack/) command, which creates a composite `package.json` file from `package.hugo.json` files found in your project and its dependencies. This helps manage JavaScript dependencies consistently.

### Pros

- Following the preferred, familiar Hugo way.

### Cons

- Using Hugo Modules requires you to have [Go](https://go.dev/dl/) installed.
- Using npm next to Hugo Modules introduces _two_ sets of dependencies.
- Hugo's integrated JavaScript support is _experimental_.
- Hugo's integrated JavaScript support is _limited_. For example, the `scripts` section of a `package.json` is not supported.

## Thulite

Thulite leverages npm to explicitly declare and isolate dependencies. Thulite's [integrations](/guides/integrations/) (including themes) are npm packages explicitly declared in your project's `package.json` and installed in the `node_modules` directory of your project. Thulite uses Hugo's [module configuration](https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts) to mount the Thulite dependencies' `node_modules` directories to one of Hugo's corresponding [component folders](https://gohugo.io/getting-started/directory-structure/#directories), making them available to Hugo for processing.

:::note[Still want to use Hugo Modules?]
 Thats okay! Thulite works in combination with [Hugo Modules](https://gohugo.io/hugo-modules/) (but without it's npm support).
:::
