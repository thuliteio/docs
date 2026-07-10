---
title: "X Cards"
description: "Set up X Card metadata in Thulite SEO, including image selection fallbacks and the generated twitter card tags for richer shared links."
summary: "Set up X Card metadata in Thulite SEO, including image selection fallbacks and the generated twitter card tags for richer shared links."
date: 2024-03-14T20:11:18+01:00
lastmod: 2026-04-10T12:33:37+02:00
draft: false
weight: 330
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

With [X Cards](https://docs.x.com/overview), you can attach rich photos, videos and media experiences to Tweets, helping to drive traffic to your website.

## Settings

You can set in `config/_default/params.toml`:

```toml {title="params.toml"}
# Hugo
title = "Thulite"
subTitle = "SEO"
description = "Congrats on setting up a new Doks project!"
images = ["cover.png"]

[social]
  twitter = "getdoks"
```

You can set in the frontmatter of a page:

```md
---
title = "Example Guide"
description = "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
date = 2024-03-08T08:18:11-08:00
images = ["post-cover.png"]
---
```

## Generated meta tags

If images aren't specified in the page front-matter, Thulite SEO searches for [image page resources](https://gohugo.io/content-management/image-processing/) with `feature`, `cover`, or `thumbnail` in their name. If no image resources with those names are found, the images defined in `config/_default/params.toml` are used instead. If no images are found at all, then an image-less `summary` card is used instead of `summary_large_image`.

Thulite SEO uses the page title and description for the card’s title and description fields. The page summary is used if no description is given.

Thulite SEO generates the following meta tags — for example:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://getdoks.org/cover.png">
<meta name="twitter:title" content="Welcome to Doks">
<meta name="twitter:description" content="Congrats on setting up a new Doks project!">
<meta name="twitter:site" content="@getdoks">
```

## Resources

- [Meta Tags Toolkit](https://metatags.io/)
