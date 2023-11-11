import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
    title: 'Hyas Docs',
    description: 'Node.js web framework designed for speed and security. Build the website you want with integrations, and deploy everywhere, all powered by Hugo and npm.',
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
      replacesTitle: true,
    },
    editLink: {
      baseUrl: 'https://github.com/gethyas/docs/edit/main/',
    },
    sidebar: [{
      label: 'Start Here',
      items: [{
        label: 'Getting Started',
        link: '/getting-started'
      }, {
        label: 'Installation',
        link: '/install/auto'
      }, {
        label: 'Editor Setup',
        link: '/editor-setup'
      }, {
        label: 'Upgrade to v2',
        link: '/guides/upgrade-to/v2'
      }]
    }, {
      label: 'Core Concepts',
      items: [
      {
        label: 'Why Hyas',
        link: '/concepts/why-hyas'
      }, {
        label: 'Site Generator',
        link: '/concepts/site-generator'
      }, {
        label: 'Dependencies',
        link: '/concepts/dependencies'
      }]
    }, {
      label: 'Basics',
      items: [
      {
        label: 'Project Structure',
        link: '/basics/project-structure'
      },
      {
        label: 'Pages',
        link: '/basics/pages'
      }]
    }, {
      label: 'Recipes',
      items: [
      {
        label: 'Connect a CMS',
        link: '/guides/cms'
      }, {
        label: 'Add integrations',
        link: '/guides/integrations'
      }, {
        label: 'Deploy your site',
        link: '/guides/deploy'
      }]
    }, {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example'
      },
      {
        label: 'Images',
        link: 'https://images.gethyas.com/',
        attrs: { target: '_blank' },
        badge: 'New'
      }]
    }, {
      label: 'Reference',
      collapsed: true,
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Websites',
      collapsed: true,
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Hyas',
        link: 'https://gethyas.com/',
        attrs: { target: '_blank' }
      },
      {
        label: 'Doks',
        link: 'https://getdoks.org/',
        attrs: { target: '_blank' }
      }]
    }],
    social: {
      github: 'https://github.com/gethyas',
      'x.com': 'https://x.com/gethyas',
      mastodon: 'https://fosstodon.org/@hyas'
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
