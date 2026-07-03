---
title: "Markdown"
description: "Use standard Markdown image syntax with Thulite Images to render optimized, lazy-loaded page, global, and remote images in content."
summary: "Use standard Markdown image syntax with Thulite Images to render optimized, lazy-loaded page, global, and remote images in content."
date: 2023-11-09T12:54:19+01:00
lastmod: 2026-04-16T16:08:55+02:00
draft: false
weight: 220
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide explains how to add optimized, lazy-loaded images to content pages using [standard Markdown image syntax](https://daringfireball.net/projects/markdown/syntax#img).

## Examples

### Page resource

```md
![A bird with a little fish in its mouth](2024-01-22_16-55-13.jpg "A bird with a little fish in its mouth")
```

![A bird with a little fish in its mouth](2024-01-22_16-55-13.jpg "A bird with a little fish in its mouth")

#### Rendered HTML

```html
<img
  src="/docs/basics/markdown/2024-01-22_16-55-13_hu2f182e3f395c5b315c12df5e4e37e701_15767_410x274_resize_q85_h2_lanczos.webp"
  width="410"
  height="274"
  decoding="async"
  fetchpriority="auto"
  loading="lazy"
  alt="A bird with a little fish in its mouth"
  title="A bird with a little fish in its mouth"
  id="h-rh-i-0"
>
```

### Global resource

```md
![A bug is sitting on a green stem](images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg)
```

![A bug is sitting on a green stem](images/vincent-van-zalinge-IicWDdQUfsQ-unsplash.jpg)

### Remote resource

```md
![A young lion cub walking through a wooded area](https://images.unsplash.com/photo-1703237307519-104c7aebf46c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D)
```

![A young lion cub walking through a wooded area](https://images.unsplash.com/photo-1703237307519-104c7aebf46c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D)
