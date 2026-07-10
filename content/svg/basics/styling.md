---
title: "Styling"
description: "Style inline SVG output with reusable CSS classes and direct SVG attributes, controlling size, stroke, fill, and presentation for consistent branding."
summary: "Style inline SVG output with reusable CSS classes and direct SVG attributes, controlling size, stroke, fill, and presentation for consistent branding."
date: 2026-04-17T14:47:56+02:00
lastmod: 2026-04-24T15:28:15+02:00
draft: false
weight: 250
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to style inlined SVGs using CSS classes and SVG attributes.

## Class selector

All inlined SVGs receive the `svg-inline` class by default, making it easy to style them with CSS:

```css {title="assets/scss/common/_custom.scss"}
.svg-inline {
  fill: currentColor;
}

.svg-inline.large {
  width: 2em;
  height: 2em;
}
```

## SVG attributes

You can specify [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute), for example:

```md
{{</* inline-svg src="alert-triangle" class="warning-icon" title="Warning" width="32" height="32" stroke-width="1.5" stroke="orange" */>}}
```

{{< preview >}}

{{< inline-svg src="alert-triangle" class="warning-icon" title="Warning" width="32" height="32" stroke-width="1.5" stroke="orange" >}}

{{< /preview >}}

### Rendered HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-labelledby="title-svg-alert-triangle"
  class="alert-triangle svg-inline warning-icon"
  height="32"
  id="svg-alert-triangle"
  role="img"
  stroke="orange"
  stroke-width="1.5"
  width="32"
>
  <title id="title-svg-alert-triangle">Warning</title>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 9v4"></path>
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"></path>
  <path d="M12 16h.01"></path>
</svg>
```
