---
title: "Archetypes"
description: "Use archetypes to define default front matter for new content files."
summary: "A short guide to creating and using archetypes in Thulite."
date: 2026-03-25T08:23:03+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 220
toc: true
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Archetypes are templates used when you create new content.

In Thulite, archetypes live in `archetypes/` and are applied by the [`create` command](/reference/commands/#create).

## Default archetype

The default template is `archetypes/default.md`. It defines front matter for new pages, including fields like `title`, `date`, and `draft`.

When you run `create`, Hugo fills template values such as `.Date` and generates a title from the filename.

## Section-specific archetypes

Add an archetype with the section name to customize defaults for that section.

Examples:

- `archetypes/blog.md` for `content/blog/`
- `archetypes/docs.md` for `content/docs/`

Minimal example (`archetypes/blog.md`):

```md {title="blog.md"}
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ .Date }}
draft: true
tags:
  - blog
---
```

Use archetypes to keep metadata consistent and reduce repetitive editing.

## Learn more

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Archetypes" description="Create and customize content templates." href="https://gohugo.io/content-management/archetypes/" target="_blank" class="w-50" >}}
{{< /card-grid >}}
