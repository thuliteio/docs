---
title: "Google Firebase"
description: "Firebase Hosting is a service provided by Google's Firebase app development platform, which can be used to deploy a Thulite site."
summary: "Firebase Hosting is a service provided by Google's Firebase app development platform, which can be used to deploy a Thulite site."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 517
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Use [Firebase Hosting](https://firebase.google.com/products/hosting), part of [Firebase](https://firebase.google.com/), to deploy a Thulite site.

## Prerequisites

To follow this guide, install [firebase-tools](https://github.com/firebase/firebase-tools).

## How to deploy

{{< steps >}}
{{< step >}}

Create `firebase.json` at the root of your project with the following content:

```json {title="firebase.json"}
{
  "hosting": {
    "public": "public",
    "ignore": []
  }
}
```

{{< /step >}}
{{< step >}}

Create `.firebaserc` at the root of your project with the following content:

```json {title= ".firebaserc"}
{
  "projects": {
    "default": "<YOUR_FIREBASE_ID>"
  }
}
```

{{< /step >}}
{{< step >}}
Run your build command:

{{< tabs "run-build" >}}
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
{{< tab "bun" >}}

```bash
bun run build
```

{{< /tab >}}
{{< /tabs >}}

{{< /step >}}
{{< step >}}

Deploy your site:

```bash
firebase deploy
```

{{< /step >}}
{{< /steps >}}

## Learn more

<!-- markdownlint-disable MD034 -->
{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Firebase" description="Official Hugo guide for deploying sites on Firebase." href="https://gohugo.io/host-and-deploy/host-on-firebase/" target="_blank" >}}
{{< /card-grid >}}
<!-- markdownlint-enable MD034 -->
