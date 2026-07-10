---
title: "GIF"
description: "Add optimized, lazy-loaded GIF images in Markdown using page, global, or remote resources, and verify generated HTML output and attributes."
summary: "Add optimized, lazy-loaded GIF images in Markdown using page, global, or remote resources, and verify generated HTML output and attributes."
date: 2024-01-25T13:18:03+01:00
lastmod: 2026-04-16T16:31:20+02:00
draft: false
weight: 510
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to add optimized, lazy-loaded [GIF images](https://developer.mozilla.org/en-US/docs/Glossary/GIF) to content pages using [standard Markdown image syntax](https://daringfireball.net/projects/markdown/syntax#img).

## Examples

### Page resource

```md
![Good Morning cat](good-morning.gif)
```

![Good Morning cat](good-morning.gif)

#### Rendered HTML

```html
<img
  src="/docs/built-ins/gif/good-morning.gif"
  width="480"
  height="480"
  decoding="async"
  fetchpriority="auto"
  loading="lazy"
  alt="Good Morning cat"
  id="h-rh-i-0"
>
```

### Global resource

```md
![Unschuldig](gifs/unschuldig.gif)
```

![Unschuldig](gifs/unschuldig.gif)

### Remote resource

```md
![Swimming duck](https://media3.giphy.com/media/T3VjdigJhgYapB9Upz/giphy.gif)
```

![Swimming duck](https://media3.giphy.com/media/T3VjdigJhgYapB9Upz/giphy.gif)
