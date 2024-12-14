import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  legacy: {
    collections: true
  },
  redirects: {
    '/': {
      status: 301,
      destination: '/getting-started/',
    },
  },
  site: 'https://docs.thulite.io/',
  integrations: [starlight({
    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: 'https://docs.thulite.io/cover-docs.png',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'twitter:image',
          content: 'https://docs.thulite.io/cover-docs.png',
        },
      },
      {
        tag: 'script',
        attrs: {
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'docs.thulite.io',
          defer: true,
        },
      },
    ],
    title: 'Thulite Docs',
    description: 'Node.js web framework designed for speed and security. Build the website you want with integrations, and deploy everywhere, all powered by Hugo and npm.',
    components: {
      MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      TableOfContents: './src/components/TableOfContents.astro',
    },
    plugins: [
      starlightDocSearch({
        appId: '70H5139H21',
        apiKey: '401f8b545478ebe52faeeeb6cf77cefc',
        indexName: 'thulite',
      }),
      starlightSidebarTopics([
        {
          label: 'Start',
          link: 'getting-started',
          icon: 'rocket',
          id: 'start',
          items: [
            { label: 'Getting started', link: 'getting-started'},
            {
              label: 'Welcome world!',
              autogenerate: { directory: 'concepts' },
            },
            {
              label: 'Start a new project',
              items: [
                'install-and-setup',
                'basics/project-structure',
                'basics/commands',
              ],
            },
            {
              label: 'Configuration',
              items: [
                'basics/configuration',
                'editor-setup',
                'environment-variables',
              ],
            },
            { label: 'Migrate to Thulite', link: 'migrate-to-thulite'},
          ],
        },
        {
          label: 'Guides',
          link: 'basics/pages',
          icon: 'open-book',
          id: 'guides',
          items: [
            {
              label: 'Routing and navigation',
              items: [
                'basics/menus',
                'guides/internationalization',
              ],
            },
            {
              label: 'Build your UI',
              items: [
                'guides/shortcodes',
                'basics/layouts',
                'guides/styles',
                'guides/scripts',
                'guides/fonts',
              ],
            },
            {
              label: 'Add content',
              items: [
                'guides/archetypes',
                'basics/pages',
                'guides/markdown',
                'guides/images',
              ],
            },
            {
              label: 'Add a theme',
              autogenerate: { directory: 'guides/themes' },
            },
            {
              label: 'Upgrade Thulite',
              items: [
                'upgrade-thulite',
                'guides/upgrade-to/v2',
              ],
            },
            {
              label: 'Other guides',
              collapsed: true,
              items: [
                'guides/data',
                'guides/email-obfuscation',
              ],
            },
            { label: 'Contribute', link: 'contribute'},
          ],
        },
        {
          label: 'Reference',
          link: 'reference/configuration',
          icon: 'information',
          id: 'reference',
          items: [
            { label: 'Configuration', link: 'reference/configuration' },
            { label: 'Frontmatter', link: 'reference/frontmatter' },
            { label: 'Markdown', link: 'reference/markdown' },
          ],
        },
        {
          label: 'Integrations',
          link: '/guides/integrations/',
          icon: 'puzzle',
          id: 'integrations',
          items: [
            { label: 'Overview', link: 'guides/integrations' },
            {
              label: 'UI frameworks',
              items: [
                'guides/integrations/bootstrap',
                'guides/integrations/tailwind',
              ],
            },
            {
              label: 'Themes',
              items: [
                'guides/integrations/bolt-core',
                'guides/integrations/doks-core',
              ],
            },
            {
              label: 'Other integrations',
              items: [
                'guides/integrations/core',
                'guides/integrations/images',
                'guides/integrations/inline-svg',
                'guides/integrations/seo',
              ],
            },
          ],
        },
        {
          label: 'Third-party services',
          link: '/guides/third-party-services',
          icon: 'setting',
          id: 'third-party-services',
          items: [
            { label: 'Overview', link: 'guides/third-party-services' },
            { label: 'Deployment', autogenerate: { directory: 'guides/deploy' } },
            { label: 'Content management', autogenerate: { directory: 'guides/cms' } },
            { label: 'Web analytics', autogenerate: { directory: 'guides/analytics' } },
          ],
        },
      ]),
    ],
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
      alt: 'Thulite',
      replacesTitle: true,
    },
    editLink: {
      baseUrl: 'https://github.com/thuliteio/docs/edit/main/',
    },
    /*
    sidebar: [
      {
        label: 'Start Here',
        items: [
          { label: 'Getting Started', link: '/getting-started/'},
          { label: 'Installation', link: '/install/auto/' },
          { label: 'Editor Setup', link: '/editor-setup/' },
          { label: 'Upgrade Thulite', link: '/upgrade-thulite/' },
        ],
      },
      {
        label: 'Concepts',
        autogenerate: { directory: 'concepts' },
      },
      {
        label: 'Basics',
        autogenerate: { directory: 'basics' },
      },
      {
        label: 'Built-ins',
        collapsed: true,
        items: [
          { label: 'Archetypes', link: '/guides/archetypes/' },
          { label: 'Data', link: '/guides/data/' },
          { label: 'Internationalization', link: '/guides/internationalization/' },
          { label: 'Static', link: '/guides/static/' },
        ],
      },
      {
        label: 'Add-ons',
        items: [
          { label: 'Add integrations', link: '/guides/integrations/' },
          { label: 'Add a theme', link: '/guides/themes/' },
          { label: 'Email obfuscation', link: '/guides/email-obfuscation/' },
        ],
      },
      {
        label: 'Recipes',
        items: [
          { label: 'Add analytics', link: '/guides/analytics/' },
          { label: 'Connect a CMS', link: '/guides/cms/' },
          { label: 'Deploy your site', link: '/guides/deploy/' },
        ],
      },
      {
        label: 'Guides',
        items: [
          { label: 'Markdown', link: '/guides/markdown/' },
          { label: 'CSS & Styling', link: '/guides/styles/' },
          { label: 'JavaScript', link: '/guides/scripts/' },
          { label: 'Images', link: '/guides/images/' },
          { label: 'Fonts', link: '/guides/fonts/' },
        ],
      },
      {
        label: 'Reference',
        collapsed: true,
        items: [
          { label: 'Configuration', link: '/reference/configuration/' },
          { label: 'Frontmatter', link: '/reference/frontmatter/' },
          { label: 'Markdown', link: '/reference/markdown/' },
        ],
      },
    ],
    */
    social: {
      openCollective: 'https://opencollective.com/thulite',
      github: 'https://github.com/thuliteio',
      'x.com': 'https://x.com/thuliteio',
      mastodon: 'https://fosstodon.org/@thulite',
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    lastUpdated: true,
    favicon: '/favicon.svg',
    titleDelimiter: '—',
  })
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
