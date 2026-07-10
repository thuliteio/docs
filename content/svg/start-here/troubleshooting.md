---
title: "Troubleshooting"
description: "Troubleshoot Thulite SVG issues by validating paths, markup, and configuration, then use docs, GitHub issues, and community discussions to resolve blockers."
summary: "Troubleshoot Thulite SVG issues by validating paths, markup, and configuration, then use docs, GitHub issues, and community discussions to resolve blockers."
date: 2026-04-17T08:45:58+02:00
lastmod: 2026-04-24T15:21:26+02:00
draft: false
weight: 170
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This guide helps you diagnose and fix common issues with your Thulite SVG installation.

## Verify your configuration

Start by reviewing the [Parameters](/svg/reference/parameters/), [Shortcode](/svg/reference/shortcode/), and [Partial](/svg/reference/partial/) reference pages to confirm your setup. Then use the guides in the sidebar for topic-specific instructions.

If your SVG still doesn't appear, run through these checks in order:

1. Verify the path is correct relative to the `assets` directory
2. Confirm the SVG file exists and contains valid SVG markup
3. Check that the filename and extension match exactly, including letter case

## Consult the documentation

If you cannot find an answer in this documentation, visit the [Thulite Docs](/thulite/) for framework-level guidance. Many SVG questions can be resolved by understanding how Thulite works under the hood.

## Ask the community

Check for known [SVG issues on GitHub](https://github.com/thuliteio/inline-svg/issues) or ask for help in [Thulite Discussions](https://github.com/thuliteio/thulite/discussions). The community is active and happy to help.
