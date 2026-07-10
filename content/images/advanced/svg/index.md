---
title: "SVG"
description: "Add optimized, lazy-loaded SVG images in Markdown, review dark-mode contrast caveats, and apply CSS background or color inversion fixes."
summary: "Add optimized, lazy-loaded SVG images in Markdown, review dark-mode contrast caveats, and apply CSS background or color inversion fixes."
date: 2026-04-15T09:48:43+02:00
lastmod: 2026-04-16T16:31:26+02:00
draft: false
weight: 520
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to add optimized, lazy-loaded [SVG images](https://developer.mozilla.org/en-US/docs/Web/SVG) to content pages using [standard Markdown image syntax](https://daringfireball.net/projects/markdown/syntax#img).

{{< callout context="note" icon="info-circle" >}}
[Thulite SVG](/svg/) is a Thulite integration that provides a shortcode for inlining SVG icons and graphics directly into your HTML, making them easy to style and manipulate with CSS.
{{< /callout >}}

## Example

### Page resource

```md
![A spiral that looks snail shell-ish](snailish-spiral.svg)
```

![A spiral that looks snail shell-ish](snailish-spiral.svg)

#### Rendered HTML

```html
<img
  src="/docs/advanced/svg/snailish-spiral.svg"
  decoding="async"
  fetchpriority="auto"
  loading="lazy"
  alt="A spiral that looks snail shell-ish"
  id="h-rh-i-0"
  class="markdown-svg"
>
```

## Caveat

An SVG with a grey stroke and a transparent background will have low contrast in dark mode, though it looks fine in light mode — toggle between light and dark mode to see the effect in the example above.

### Solution 1: Set an SVG background color

Add to `assets/scss/common/_variables-custom.scss`:

```scss {title="_variables-custom.scss"}
// Put your custom (S)CSS variables here
:root {
  --markdown-svg: #fff; // SVG background color
}
```

#### Result

Result (visually) — toggle between light and dark mode to see the effect:

![A spiral that looks snail shell-ish](snailish-spiral-solution-1.jpg)

### Solution 2: Invert SVG colors in dark mode

Add to `assets/scss/common/_custom.scss`:

```scss {title="_custom.scss"}
@include color-mode(dark) {
  .markdown-svg {
    filter: invert(100%); // invert colors in dark mode
    // filter: invert(1) brightness(0.78); // invert colors and reduce brightness in dark mode
  }
}
```

#### Result

Result (visually) — toggle between light and dark mode to see the effect:

![A spiral that looks snail shell-ish](snailish-spiral-solution-2-dark-mode.jpg)
{.svg-inline-custom .svg-darkmode}

![A spiral that looks snail shell-ish](snailish-spiral-solution-2-light-mode.jpg)
{.svg-inline-custom .svg-lightmode}
