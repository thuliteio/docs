---
title: "Icons"
description: "Insert icon-set symbols with the inline-svg shortcode using icon names or paths, with support for titles, descriptions, ARIA roles, and styling."
summary: "Insert icon-set symbols with the inline-svg shortcode using icon names or paths, with support for titles, descriptions, ARIA roles, and styling."
date: 2026-04-23T16:54:28+02:00
lastmod: 2026-04-24T15:27:32+02:00
draft: false
weight: 225
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to render icons with the `inline-svg` shortcode. For all available arguments, see the [shortcode reference page](/svg/reference/shortcode/).

## Examples

### Icon name

To display a global resource icon of an icon set [configured](/svg/start-here/configuration/) in `iconSetDir`, use the icon name.

{{< callout context="note" icon="info-circle" >}}
Visit an icon set website (e.g. [Tabler Icons](https://tabler.io/icons) or [Lucide](https://lucide.dev/)), search for an icon, click it to view details, then click the icon name to copy it.
{{< /callout >}}

```md
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

#### Rendered HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-labelledby="title-svg-check" aria-describedby="desc-svg-check" class="svg-inline" desc="Operation completed successfully" id="svg-check" role="img">
  <title id="title-svg-check">Success</title>
  <desc id="desc-svg-check">Operation completed successfully</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 12l5 5l10 -10"></path>
</svg>
```

### Relative path

```md
{{</* inline-svg
  src="svgs/tabler-icons/check"
  title="Success"
  desc="Operation completed successfully"
  role="img"
*/>}}
```

{{< preview >}}

{{< inline-svg
  src="svgs/tabler-icons/check"
  title="Success"
  desc="Operation completed successfully"
  role="img"
>}}

{{</ preview >}}
