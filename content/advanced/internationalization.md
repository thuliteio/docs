---
title: "Internationalization"
description: "Set up and manage multilingual content in your Thulite project."
summary: "Set up and manage multilingual content in your Thulite project."
date: 2026-03-25T08:23:03+01:00
lastmod: 2026-03-25T08:23:03+01:00
draft: false
weight: 305
toc: true
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Internationalization (i18n) in Thulite is powered by Hugo's multilingual mode.

## Quick setup

1. Define your languages in `config/_default/languages.toml`.
2. Create language-specific content directories (for example, `content/en`, `content/de`, `content/nl`).
3. Add translated pages with matching paths in each language directory.
4. Add UI string translations in `i18n/*.toml`.

## Configure languages

In `config/_default/languages.toml`, each language has its own settings:

```toml {title="languages.toml"}
[en]
  languageName = "English"
  contentDir = "content/en"
  weight = 10

[de]
  languageName = "German"
  contentDir = "content/de"
  weight = 15
```

`contentDir` tells Hugo where to find content for each language.

## Add translated content

Keep the same relative path for each translation.

- English: `content/en/docs/getting-started.md`
- German: `content/de/docs/getting-started.md`

This keeps URLs and page structure aligned across languages.

## Translate interface strings

Store shared UI translations in `i18n` files, such as:

- `i18n/en.toml`
- `i18n/de.toml`
- `i18n/nl.toml`

Example:

```toml
[read_more]
other = "Read more"
```

Use Hugo's `i18n` function in templates to render translated strings.

## Resources

- [Multilingual mode](https://gohugo.io/content-management/multilingual/)
