---
title: "Render"
description: "You can deploy your Thulite project to Render, a service to build websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploy..."
summary: "You can deploy your Thulite project to Render, a service to build websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploy..."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 523
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
You can deploy your Thulite project to [Render](https://render.com/), a service to build websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

## How to deploy

1. Create a [render.com account](https://dashboard.render.com/) and sign in
2. Click the **New +** button from your dashboard and select **Static Site**
3. Connect your [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) repository or alternatively enter the public URL of a public repository
4. Give your website a name, select the branch and specify the build command and publish directory
   - **build command:** `npm run build`
   - **publish directory:** `public`
   - **Environment variables (advanced)**: By default, Render uses Node.js 14.17.0, but Thulite [requires a higher version](/install/auto/#prerequisites). Add an environment variable with a **Variable key** of `NODE_VERSION` and a **Value** of `18.14.1` or higher to tell Render to use a compatible Node.js version. Alternatively, add a [`.node-version`](https://render.com/docs/node-version) or [`.nvmrc`](https://render.com/docs/node-version) file to your project to specify a Node.js version.
5. Click the **Create Static Site** button
