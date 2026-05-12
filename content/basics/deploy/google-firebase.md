---
title: "Google Firebase"
description: "Firebase Hosting is a service provided by Google's Firebase app development platform, which can be used to deploy a Thulite site."
summary: "Firebase Hosting is a service provided by Google's Firebase app development platform, which can be used to deploy a Thulite site."
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
[Firebase Hosting](https://firebase.google.com/products/hosting) is a service provided by Google's [Firebase](https://firebase.google.com/) app development platform, which can be used to deploy a Thulite site.

## Prerequisites

To follow this guide, you will need to have [firebase-tools](https://github.com/firebase/firebase-tools) installed.

## How to deploy

1. Create `firebase.json` at the root of your project with the following content:

   ```json title="firebase.json"
   {
     "hosting": {
       "public": "public",
       "ignore": []
     }
   }
   ```

2. Create `.firebaserc` at the root of your project with the following content:

   ```json title= ".firebaserc"
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
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

4. Deploy using the command:

    ```bash
    firebase deploy
    ```
