---
title: "SVGs"
description: "Insert page or global SVG resources with the inline-svg shortcode, including options for custom classes, dimensions, and light or dark mode variants."
summary: "Insert page or global SVG resources with the inline-svg shortcode, including options for custom classes, dimensions, and light or dark mode variants."
date: 2026-04-23T16:54:17+02:00
lastmod: 2026-04-24T15:27:25+02:00
draft: false
weight: 223
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide explains how to render SVGs with the `inline-svg` shortcode. For all available arguments, see the [shortcode reference page](/svg/reference/shortcode/).

## Examples

### Page resource

For example, you can add a monochrome monogram that respects darkmode/lightmode — toggle between light and dark mode to see the effect:

```md
{{</* inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" */>}}
```

{{< preview >}}

{{< inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome mb-1" >}}

{{< /preview >}}

#### Rendered HTML

```html
<svg viewBox="0 0 128 113" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-inline svg-inline-custom svg-monochrome" height="57px" id="svg-logo-netlify-monogram-monochrome-lightmode" role="img" width="64px">
  <g clip-path="url(#clip0_236_179)">
    <path d="M34.593 94.2052H33.3844L27.3514 88.1722V86.9637L36.5743 77.7409H42.9639L43.8158 78.5928V84.9824L34.593 94.2052Z" fill="#181A1C"></path>
    <path d="M27.3514 25.9703V24.7617L33.3844 18.7287H34.593L43.8158 27.9515V34.3411L42.9639 35.1931H36.5743L27.3514 25.9703Z" fill="#181A1C"></path>
    <path d="M80.4594 74.759H71.6824L70.9493 74.026V53.4802C70.9493 49.8248 69.5129 46.9915 65.1046 46.8925C62.836 46.833 60.2405 46.8925 57.4668 47.0014L57.0507 47.4274V74.0161L56.3176 74.7491H47.5406L46.8075 74.0161V38.9179L47.5406 38.1848H67.2939C74.9713 38.1848 81.1925 44.406 81.1925 52.0834V74.026L80.4594 74.759Z" fill="#181A1C"></path>
    <path d="M35.8412 61.6034H0.73307L0 60.8703V52.0735L0.73307 51.3404H35.8412L36.5743 52.0735V60.8703L35.8412 61.6034Z" fill="#181A1C"></path>
    <path d="M127.277 61.6034H92.1687L91.4356 60.8703V52.0735L92.1687 51.3404H127.277L128.01 52.0735V60.8703L127.277 61.6034Z" fill="#181A1C"></path>
    <path d="M58.9428 27.2185V0.887367L59.6759 0.154297H68.4727L69.2058 0.887367V27.2185L68.4727 27.9515H59.6759L58.9428 27.2185Z" fill="#181A1C"></path>
    <path d="M58.9428 112.056V85.7254L59.6759 84.9923H68.4727L69.2058 85.7254V112.056L68.4727 112.79H59.6759L58.9428 112.056Z" fill="#181A1C"></path>
  </g>
  <defs>
    <clipPath id="clip0_236_179">
      <rect width="128" height="112.635" fill="white" transform="translate(0 0.154297)"></rect>
    </clipPath>
  </defs>
</svg>
```

### Global resource

For example, you can add a logo that respects darkmode/lightmode — toggle between light and dark mode to see the effect:

```md
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" */>}}
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" */>}}
```

{{< preview >}}

{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" >}}
{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" >}}

{{< /preview >}}
