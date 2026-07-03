---
title: "Favicons"
description: "Configure favicon source files in Thulite SEO and learn which icon files, manifest entries, and favicon-related tags are generated for your site."
summary: "Configure favicon source files in Thulite SEO and learn which icon files, manifest entries, and favicon-related tags are generated for your site."
date: 2024-03-14T12:22:05+01:00
lastmod: 2026-04-10T12:33:26+02:00
draft: false
weight: 310
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A favicon (favorite icon) is a tiny icon included along with a website, which is displayed in places like the browser's address bar, page tabs and bookmarks menu. It can also be included in search results for your website.

## Settings

You can set `icon` and `svgIcon` in `config/_default/params.toml`:

```toml {title="params.toml"}
# SEO (@thulite/seo)
[seo]
  [seo.favicons]
    icon = "favicon.png" # (required)
    svgIcon = "favicon.svg" # (optional)
```

Add the files — "favicon.png" and "favicon.svg" in the example above — to your projects' `/assets/` directory. Make sure the `icon` file — "favicon.png" in the example above — is at least 512x512 pixels.

## Generated meta tags

Thulite SEO generates a `favicon.ico`, `apple-touch-icon.png`, `favicon-192x192.png`, and `favicon-512x512.png` file from the `icon` file you set in `params.toml`. The generated files are copied to your projects' `public` directory.

Thulite SEO generates the following meta tags — for example:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link
  rel="apple-touch-icon"
  href="/apple-touch-icon.png"
  sizes="180x180"
  type="image/png"
>
<link
  rel="icon"
  href="/favicon-192x192.png"
  sizes="192x192"
  type="image/png"
>
<link
  rel="icon"
  href="/favicon-512x512.png"
  sizes="512x512"
  type="image/png"
>
<link rel="manifest" href="/manifest.webmanifest">
```

Thulite SEO also generates a `manifest.webmanifest` file — for example:

```json {title="manifest.webmanifest"}
{
  "name": "My Docs",
  "short_name": "My Docs",
  "lang": "en",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/"
}
```

## Resources

- [How to Favicon in 2026: Three files that fit most needs](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
