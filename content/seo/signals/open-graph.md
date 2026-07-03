---
title: "Open Graph"
description: "Learn how Thulite SEO creates Open Graph metadata from page content, images, dates, and tags to improve rich previews on social platforms."
summary: "Learn how Thulite SEO creates Open Graph metadata from page content, images, dates, and tags to improve rich previews on social platforms."
date: 2024-03-14T16:58:20+01:00
lastmod: 2026-04-10T12:33:32+02:00
draft: false
weight: 320
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The [Open Graph protocol](https://ogp.me/) enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

## Settings

You can set in `config/_default/params.toml`:

```toml {title="params.toml"}
# Hugo
title = "Thulite"
subTitle = "SEO"
description = "Congrats on setting up a new Doks project!"
images = ["cover.png"]

[social]
  facebook_admin = ""
```

You can set in the frontmatter of a page:

```md
---
title = "Example Guide"
description = "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
date = 2024-03-08T08:18:11-08:00
images = ["post-cover.png"]
audio = []
videos = []
series = []
tags = []
---
```

## Generated meta tags

Thulite SEO uses the page title and description for the title and description metadata. The first 6 URLs from the `images` array are used for image metadata. If [page bundles](https://gohugo.io/content-management/page-bundles/) are used and the `images` array is empty or undefined, images with file names matching `*feature*`, `*cover*`, or `*thumbnail*` are used for image metadata.

Thulite SEO also uses various optional metadata set:

- Date, published date, and last modified data are used to set the published time metadata if specified.
- `audio` and `videos` are URL arrays like `images` for the audio and video metadata tags, respectively.
- The first 6 `tags` on the page are used for the tags metadata.
- The `series` taxonomy is used to specify related “see also” pages by placing them in the same series.

Thulite SEO generates the following meta tags — for example:

```html
<meta property="og:title" content="Welcome to Doks">
<meta property="og:description" content="Congrats on setting up a new Doks project!">
<meta property="og:type" content="website">
<meta property="og:url" content="https://getdoks.org/">
<meta property="og:image" content="https://getdoks.org/cover.png">
<meta property="og:site_name" content="My Docs">
```

## Resources

- [Meta Tags Toolkit](https://metatags.io/)
