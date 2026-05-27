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
Deploy your Thulite project to [Render](https://render.com/), a platform for building sites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto-deploys from Git.

## How to deploy

{{< steps >}}
{{< step >}}
Create a [render.com account](https://dashboard.render.com/register) and sign in
{{< /step >}}
{{< step >}}
In your dashboard, click New+ and select Static Site.
{{< /step >}}
{{< step >}}
Connect your [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) repository, or enter the URL of a public repository.
{{< /step >}}
{{< step >}}
Name your site, select the branch, and set the build command and publish directory:

- build command: `npm run build`
- publish directory: `public`
- Environment variables (advanced): By default, Render uses Node.js 14.17.0, but Thulite [requires a higher version](/start-here/getting-started/#prerequisites). Add an environment variable with the key `NODE_VERSION` and a value of `24.0.4` or higher to use a compatible Node.js version. Alternatively, add a [`.node-version`](https://render.com/docs/node-version) or [`.nvmrc`](https://render.com/docs/node-version) file to specify a Node.js version.
{{< /step >}}
{{< step >}}
Click Create Static Site.
{{< /step >}}
{{< /steps >}}

## Learn more

<!-- markdownlint-disable MD034 -->
{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Render" description="Official Hugo guide for deploying sites on Render." href="https://gohugo.io/host-and-deploy/host-on-render/" target="_blank" >}}
{{< /card-grid >}}
<!-- markdownlint-enable MD034 -->
