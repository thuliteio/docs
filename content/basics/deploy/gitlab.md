---
title: "Gitlab"
description: "You can use GitLab Pages to host a Thulite site for your GitLab projects, groups, or user account."
summary: "You can use GitLab Pages to host a Thulite site for your GitLab projects, groups, or user account."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 500
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
You can use [GitLab Pages](https://pages.gitlab.io/) to host a Thulite site for your [GitLab](https://about.gitlab.com/) projects, groups, or user account.

:::tip[Looking for an example?]
Check out the [GitLab Pages Doks example project](https://gitlab.com/h-enk/doks-gitlab-pages)!
:::

## How to deploy

Follow the instructions below to deploy your Thulite site to GitLab pages.

1. Create a file called `.gitlab-ci.yml` in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:

    ```yaml title=".gitlab-ci.yml"
    # The Docker image that will be used to build your app
    image: node:lts
    # Functions that should be executed before the build script is run
    before_script:
      - npm ci
    pages:
      script:
        - npm run build
      artifacts:
        paths:
          # The folder that contains the files to be exposed at the Page URL
          - public
      rules:
        # This ensures that only pushes to the default branch will trigger
        # a pages deploy
        - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    ```

2. On GitLab, go to your repository's Deploy tab and find the Pages section.

3. Copy the **Access pages** URL and paste it as `baseurl` in `./config/production/hugo.toml`.

4. Set `canonifyURLs = true` in `./config/production/hugo.toml`.

5. Push the changes to GitLab.

That's it. After a minute or so, you site is avaliable at the **Access pages** URL.
