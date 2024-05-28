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
  site: 'https://docs.gethyas.com/',
  integrations: [starlight({
    head: [
      {
        tag: 'script',
        attrs: {
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'docs.gethyas.com',
          defer: true,
        },
      },
    ],
    title: 'Hyas Docs',
    description: 'Node.js web framework designed for speed and security. Build the website you want with integrations, and deploy everywhere, all powered by Hugo and npm.',
    components: {
      MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      Sidebar: './src/components/starlight/Sidebar.astro',
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
      alt: 'Hyas Docs',
      replacesTitle: true,
    },
    editLink: {
      baseUrl: 'https://github.com/gethyas/docs/edit/main/',
    },
    sidebar: [
      {
        label: 'Start Here',
        items: [
          { label: 'Getting Started', link: '/getting-started/'},
          { label: 'Installation', link: '/install/auto/' },
          { label: 'Editor Setup', link: '/editor-setup/' },
          { label: 'Upgrade Hyas', link: '/upgrade-hyas/' },
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
        autogenerate: {
          directory: 'reference'
        },
      },
    ],
    social: {
      github: 'https://github.com/gethyas',
      'x.com': 'https://x.com/gethyas',
      mastodon: 'https://fosstodon.org/@hyas',
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
