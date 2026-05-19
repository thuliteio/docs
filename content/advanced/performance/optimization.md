---
title: "Optimization"
description: "Optimize Thulite builds and delivery with a few high-impact defaults."
summary: "Minify output, reduce CSS/JS payload, defer non-critical work, and verify results."
date: 2026-05-18T08:11:22+02:00
lastmod: 2026-05-18T08:11:22+02:00
draft: false
weight: 413
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Optimization in Thulite is mostly about shipping less code and doing less work on first load.

## Build for production

Use a production build with garbage collection and minification (`hugo build --gc --minify`):

{{< tabs "build-command" >}}
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
yarn build
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build
```

{{< /tab >}}
{{< /tabs >}}

This removes unused build artifacts and compresses generated output.

## Keep CSS lean

Thulite uses PostCSS and can remove unused selectors in production (via `hugo_stats.json` + PurgeCSS). Keep your safelist current for dynamic classes.

## Ship optimized assets

Thulite Core compiles and fingerprints CSS/JS bundles. This gives:

- Smaller assets in production
- Stable integrity hashes
- Efficient browser caching with automatic cache busting on content change

## Defer non-critical work

Thulite Core supports async script loading, link prefetching using [Quicklink](https://getquick.link/), and native image lazy loading. These reduce main-thread and network pressure during initial render.

## Verify with real checks

After each change, run a production build and validate:

- Lighthouse / PageSpeed scores
- JavaScript and CSS payload size
- No regressions in Core Web Vitals

## Related

- [Caching](/advanced/performance/caching/)
- [Verification](/start-here/verification/)
- [Thulite Core integration](/basics/integrations/core/)
