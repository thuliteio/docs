---
title: "Verification"
description: "Verify Thulite SVG output by checking inline markup, resource resolution, browser behavior, and accessibility with practical inspection steps and tools."
summary: "Verify Thulite SVG output by checking inline markup, resource resolution, browser behavior, and accessibility with practical inspection steps and tools."
date: 2026-04-17T08:45:39+02:00
lastmod: 2026-04-24T15:21:11+02:00
draft: false
weight: 150
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide helps you verify that Thulite SVG is resolving and rendering SVG markup as expected.

## Inspect generated HTML

View page source in your browser and confirm that inline SVG markup is generated.

Check for:

- `<svg>` output where expected (from shortcode and/or partial)
- A stable `id` value (for example `svg-check`) and expected classes (including `svg-inline`)
- Accessibility attributes such as `role`, `aria-labelledby`, and `aria-describedby` when configured
- Optional `<title>` and `<desc>` nodes when provided
- Expected presentational attributes such as `width`, `height`, `viewBox`, and custom attributes (for example `stroke-width`)

{{< details "Example (excerpt)" >}}

```html
<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head>
  </head>
  <body>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="svg-inline"
      id="svg-check"
      role="img"
      aria-labelledby="title-svg-check"
      aria-describedby="desc-svg-check"
      width="24"
      height="24"
    >
      <title id="title-svg-check">Success</title>
      <desc id="desc-svg-check">Operation completed successfully</desc>
      <path d="M5 12l5 5l10 -10"></path>
    </svg>
  </body>
</html>
```

{{< /details >}}

## Verify resource resolution

Confirm that the integration resolves both icon names and SVG file paths correctly.

Check for:

- Icon-name resolution from your configured `iconSetDir` (for example `src="check"`)
- Relative and global resource paths resolving correctly (for example `logo.svg` and `svgs/logos/logo.svg`)
- No missing-resource errors in the build output
- Correct behavior when switching icon set configuration values

If an SVG is not found, review [Placement](/svg/basics/placement/) and [Configuration](/svg/start-here/configuration/) and verify your `src` path is correct relative to `assets`.

## Validate in the browser

Open your pages in DevTools and verify runtime behavior in real conditions.

Check for:

- No 404 responses for any referenced SVG resources
- Expected sizing, alignment, and inherited color behavior
- Correct light/dark mode behavior when using theme-specific SVG variants
- No accessibility issues caused by missing labels on meaningful icons

## Use tools

Use external tools to validate accessibility and rendering quality.

For example:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [Nu Html Checker](https://validator.w3.org/nu/)

If anything looks incorrect, continue to the [Troubleshooting](/svg/start-here/troubleshooting/) guide.
