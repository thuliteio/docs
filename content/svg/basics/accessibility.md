---
title: "Accessibility"
description: "Make inline SVGs accessible with meaningful titles, descriptions, roles, and ARIA attributes so assistive technologies can understand icons clearly."
summary: "Make inline SVGs accessible with meaningful titles, descriptions, roles, and ARIA attributes so assistive technologies can understand icons clearly."
date: 2026-04-17T14:47:42+02:00
lastmod: 2026-04-24T15:28:05+02:00
draft: false
weight: 240
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to make inline SVGs accessible with titles, descriptions, and ARIA attributes.

## Features

The package automatically enhances SVGs for accessibility:

- Adds proper ARIA attributes
- Supports adding title and description elements
- Sets appropriate ARIA roles

## Example

Example with accessibility features:

```html
{{</* inline-svg
  src="check"
  title="Success"
  desc="Operation completed successfully"
  role="img"
*/>}}
```

{{< preview >}}
{{< inline-svg
  src="check"
  title="Success"
  desc="Operation completed successfully"
  role="img"
>}}
{{< /preview >}}

### Rendered HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-labelledby="title-svg-check"
  aria-describedby="desc-svg-check"
  class="check svg-inline"
  desc="Operation completed successfully"
  id="svg-check"
  role="img"
>
  <title id="title-svg-check">Success</title>
  <desc id="desc-svg-check">Operation completed successfully</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 12l5 5l10 -10"></path>
</svg>
```
