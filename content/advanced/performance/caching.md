---
title: "Caching"
description: "Use build caches and immutable asset caching in Thulite."
summary: "Configure Hugo caches, ship fingerprinted assets, and validate cache behavior."
date: 2026-05-18T08:11:14+02:00
lastmod: 2026-05-18T08:11:14+02:00
draft: false
weight: 411
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Caching in Thulite has two layers:

- Build-time cache (Hugo resource and data caches)
- Runtime cache (browser and CDN caching for generated assets)

## Configure Hugo build caches

Set cache directories in your Hugo config so repeated builds are faster and deterministic:

```toml {title="config/_default/hugo.toml"}
[caches]
  [caches.getresource]
    dir = ":cacheDir/:project"
    maxAge = -1
```

For projects using Thulite Core, you can also configure `getjson`, `getcsv`, `images`, and `assets` caches.

## Use fingerprinted assets for long-lived caching

Thulite Core fingerprints CSS and JavaScript bundles. Because filenames change when content changes, you can safely cache those files aggressively.

Recommended strategy:

- HTML: short cache lifetime or revalidate often
- Fingerprinted CSS/JS/fonts/images: long cache lifetime (for example `max-age=31536000, immutable`)

## Add cache headers at the edge

Set cache headers in your host or CDN config (for example Netlify). Keep document caching conservative and static fingerprinted assets aggressive.

## Verify caching behavior

After `npm run build`, check `public/` for fingerprinted assets and validate headers in browser dev tools:

- HTML responses are revalidated as expected
- Fingerprinted assets return long-lived cache headers
- A new build changes asset filenames when content changes

## Related

- [Configuration](/start-here/configuration/)
- [Verification](/start-here/verification/)
- [Thulite Core integration](/basics/integrations/core/)
