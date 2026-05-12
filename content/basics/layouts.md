---
title: "Layouts"
description: "__Layouts__ are files that live in the `layouts` directory of your Thulite project. They are used to provide a reusable UI structure, such as a page template."
summary: "__Layouts__ are files that live in the `layouts` directory of your Thulite project. They are used to provide a reusable UI structure, such as a page template."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 315
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
__Layouts__ are files that live in the `layouts` directory of your Thulite project. They are used to provide a reusable UI structure, such as a page template.

## Examples

For example, the default Thulite [base template](https://gohugo.io/templates/base/#define-the-base-template) looks like this:

```html title="baseof.html"
<!doctype html>
<html lang="{{ .Site.LanguageCode | default "en" }}">
  {{ partial "head/head.html" . }}
  {{ partial "head/body-class.html" . }}
  <body class="{{ delimit (.Scratch.Get "class") " " }}">
    {{ block "main" . }}{{ end }}
    {{ if templates.Exists "partials/footer/script-footer.html" -}}
      {{ partial "footer/script-footer.html" . }}
    {{ else -}}
      {{ partial "footer/script-footer-core.html" . }}
    {{ end -}}
  </body>
</html>
```

## Hugo documentation

Thulite leverages Hugo's [templates](https://gohugo.io/templates/). Here are some relevant topics:

{{< card-grid >}}
  {{< link-card title="Introduction to templating" description="Create templates to render your content, resources, and data." href="https://gohugo.io/templates/introduction/" target="_blank" >}}
  {{< link-card title="Template lookup order" description="Hugo uses a template for a given page, starting from the most specific." href="https://gohugo.io/templates/lookup-order/" target="_blank" >}}
  {{< link-card title="Base templates and blocks" description="Base and block constructs define the outer shell of your master templates." href="https://gohugo.io/templates/base/" target="_blank" >}}
  {{< link-card title="Single page templates" description="Single page templates are the primary view of content in Hugo." href="https://gohugo.io/templates/single-page-templates/" target="_blank" >}}
  {{< link-card title="List page templates" description="List page templates render multiple pieces of content in a HTML page." href="https://gohugo.io/templates/lists/" target="_blank" >}}
  {{< link-card title="Partial templates" description="Partials are context-aware components in your list and page templates." href="https://gohugo.io/templates/partials/" target="_blank" >}}
{{< /card-grid >}}
