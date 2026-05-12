---
title: "Cloudflare"
description: "You can deploy your Thulite project on Cloudflare Pages, a JAMstack platform for frontend developers to collaborate and deploy websites."
summary: "You can deploy your Thulite project on Cloudflare Pages, a JAMstack platform for frontend developers to collaborate and deploy websites."
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
You can deploy your Thulite project on [Cloudflare Pages](https://pages.cloudflare.com/), a JAMstack platform for frontend developers to collaborate and deploy websites.

This guide includes:

- [How to deploy through the Cloudflare Pages Dashboard](#how-to-deploy-a-site-with-git)
- [How to deploy using Wrangler, the Cloudflare CLI](#how-to-deploy-a-site-using-wrangler)

## Prerequisites

To get started, you will need:

- A Cloudflare account. If you don't already have one, you can create a free Cloudflare account during the process.
- Your app code pushed to a [GitHub](https://github.com/) or a [GitLab](https://about.gitlab.com/) repository.

## How to deploy a site with Git

1. Set up a new project on Cloudflare Pages.
2. Push your code to your git repository (GitHub, GitLab).
3. Log in to the Cloudflare dashboard and select your account in **Account Home** > **Pages**.
4. Select **Create a new Project** and the **Connect Git** option.
5. Select the git project you want to deploy and click **Begin setup**
6. Use the following build settings:

    - **Framework preset**: `exit 0`
    - **Build command:** `npm run build`
    - **Build output directory:** `public`

7. Click the **Save and Deploy** button.

## How to deploy a site using Wrangler

1. Install the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/) in your project:

    {{< tabs "tabs-1" >}}
      {{< tab "npm" >}}
    ```bash
    npm install wrangler --save-dev
    ```
      {{< /tab >}}
      {{< tab "pnpm" >}}
    ```bash
    pnpm add wrangler  --save-dev
    ```
      {{< /tab >}}
      {{< tab "Yarn" >}}
    ```bash
    yarn add --dev wrangler
    ```
      {{< /tab >}}
    {{< /tabs >}}

2. Authorize Wrangler with your Cloudflare account using OAuth:

    ```bash
    wrangler login
    ```

3. Run your build command:

    {{< tabs "tabs-1" >}}
      {{< tab "npm" >}}
    ```bash
    npm run build
    ```
      {{< /tab >}}
      {{< tab "pnpm" >}}
    ```bash
    pnpm run build
    ```
      {{< /tab >}}
      {{< tab "Yarn" >}}
    ```bash
    yarn run build
    ```
      {{< /tab >}}
    {{< /tabs >}}

4. Deploy the build output directory as a Pages deployment:

    ```bash
    wrangler pages deploy public
    ```

After your assets are uploaded, Wrangler will give you a preview URL to inspect your site. When you log into the Cloudflare Pages dashboard, you will see your new project.

### Enabling Preview locally with Wrangler

Update the preview script to run `wrangler` instead of Thulite' built-in preview command:

```json title="package.json"
"preview": "wrangler pages dev ./public"
```

## Troubleshooting

If you're encountering errors, check whether the `node` version you're using locally (`node -v`) matches the `NODE_VERSION` environment variable under **Settings**.
