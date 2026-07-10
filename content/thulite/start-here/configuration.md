---
title: "Configuration"
description: "Configure Thulite by updating Hugo settings, project parameters, and page frontmatter, then apply integration-specific options when needed."
summary: "Configure Thulite by updating Hugo settings, project parameters, and page frontmatter, then apply integration-specific options when needed."
date: 2026-04-27T12:46:23+02:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 115
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page covers the main configuration tasks for a Thulite project.

## Update settings

Update your [settings](/thulite/reference/configuration/settings/) in `./config/_default/hugo.toml`:

```toml {title="hugo.toml"}
title = "Thulite"
baseurl = "http://localhost/"
disableAliases = true
disableHugoGeneratorInject = true
disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
rssLimit = 10
summarylength = 20 # 70 (default)

copyRight = "Copyright (c) 2020-2026 Thulite"

[build.buildStats]
  enable = true

[outputs]
  home = ["HTML"]

[caches]
  [caches.getresource]
    dir = ":cacheDir/:project"
    maxAge = "30m"

[taxonomies]
  category = "categories"

[permalinks]
  blog = "/:title/"

[minify.tdewolff.html]
  keepComments = true # If set to false, build signatures are removed
  keepWhitespace = false

[related]
  threshold = 80
  includeNewer = true
  toLower = false
    [[related.indices]]
      name = "categories"
      weight = 100
    [[related.indices]]
      name = "tags"
      weight = 80
    [[related.indices]]
      name = "date"
      weight = 10
```

## Update parameters

Update your [parameters](/thulite/reference/configuration/parameters/) in `./config/_default/params.toml`:

```toml {title="params.toml"}
# Hugo
title = "My Thulite site"
description = "Congrats on setting up a new Thulite project!"
images = ["cover.png"]

# Debug
[render_hooks.image]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)

[render_hooks.link]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)
  highlightBroken = false # true or false (default)
```

## Update page frontmatter

Update your [page frontmatter](/thulite/reference/configuration/page-frontmatter/) in `./content/*.md` files:

```md {title="_index.md"}
---
title: "My Thulite site"
description: "Congrats on setting up a new Thulite project!"
lead: "Congrats on setting up a new Thulite project!"
date: 2026-04-28T17:01:41+02:00
lastmod: 2026-04-28T17:01:52+02:00
draft: false
---
```

## Integrations

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card title="Thulite SEO" description="Update settings, parameters, and page frontmatter." href="/seo/start-here/configuration/" >}}
{{< link-card title="Thulite Images" description="Update settings and parameters." href="/images/start-here/configuration/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Thulite SVG" description="Update your project's parameters" href="/svg/start-here/configuration/" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->
