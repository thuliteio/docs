---
title: "Translations"
description: "Understand translation alternate links in Thulite SEO, including hreflang and x-default tags generated from multilingual page variants."
summary: "Understand translation alternate links in Thulite SEO, including hreflang and x-default tags generated from multilingual page variants."
date: 2024-03-13T19:39:06+01:00
lastmod: 2026-04-10T12:21:25+02:00
draft: false
weight: 230
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

The `rel` HTML attribute defines the relationship between a linked resource and the current document. An `alternate` value indicates an alternate representation of the current document. With an `hreflang` attribute that differs from the document language, it indicates a translation.

## Settings

You can set the `defaultContentLanguage` in `config/_default/hugo.toml`

```toml {title="hugo.toml"}
# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["fr"]
defaultContentLanguageInSubdir = false
```

## Generated meta tags

Thulite SEO uses [IsTranslated](https://gohugo.io/methods/page/istranslated/) to determine whether the given page has one or more translations and [AllTranslations](https://gohugo.io/methods/page/alltranslations/) to return all translations of the given page, including the current language.

Thulite SEO generates the following meta tags (if applicable) — for example:

```html
<link rel="alternate" hreflang="nl" href="https://getdoks.org/nl/docs/guides/example-guide/">
<link rel="alternate" hreflang="de" href="https://getdoks.org/de/docs/guides/example-guide/">
<link rel="alternate" hreflang="en" href="https://getdoks.org/docs/guides/example-guide/">
<link rel="alternate" hreflang="x-default" href="https://getdoks.org/docs/guides/example-guide/">
```

## Resources

- [Tell Google about localized versions of your page](https://developers.google.com/search/docs/specialty/international/localized-versions)
