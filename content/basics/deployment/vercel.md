---
title: "Vercel"
description: "You can use Vercel to deploy a Thulite site to their global edge network with zero configuration."
summary: "You can use Vercel to deploy a Thulite site to their global edge network with zero configuration."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 525
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
You can use [Vercel](http://vercel.com/) to deploy a Thulite site to their global edge network with zero configuration.

This guide includes instructions for deploying to Vercel through the website UI or Vercel's CLI.

## How to deploy

You can deploy to Vercel through the website UI or using Vercel’s CLI (command line interface).

### Website UI Deployment

1. Push your code to your online Git repository (GitHub, GitLab, BitBucket).
2. [Import your project](https://vercel.com/new) into Vercel.
3. Vercel will automatically detect Thulite and configure the right settings.
4. Your application is deployed!

After your project has been imported and deployed, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/concepts/deployments/preview-deployments), and all changes made to the Production Branch (commonly “main”) will result in a [Production Deployment](https://vercel.com/docs/concepts/deployments/environments#production).


- Learn more about Vercel's [Git Integration](https://vercel.com/docs/concepts/git).


### CLI Deployment

1. Install the [Vercel CLI](https://vercel.com/cli) and run `vercel` to deploy.

    ```bash
    npm install -g vercel && vercel
    ```

2. Vercel will automatically detect Thulite and configure the right settings.
3. When asked `Want to override the settings? [y/N]`, choose `N`.
4. Your application is deployed!


### Project config with vercel.json

You can use `vercel.json` to override the default behavior of Vercel and to configure additional settings. For example, you may wish to attach headers to HTTP responses from your Deployments.


- Learn more about [Vercel's project configuration](https://vercel.com/docs/project-configuration).
