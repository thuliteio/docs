import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
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
        appId: 'AHKXAT87MO',
        apiKey: '72b68c153feda29c6ff4623a9f8b6073',
        indexName: 'gethyas',
      }),
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
    sidebar: [
      { label: 'thulite.io',
        link: 'https://thulite.io/',
      },
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
          { label: 'Contribute', link: '/contribute/' },
        ],
      },
    ],
    social: {
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
