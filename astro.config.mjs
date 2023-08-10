import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

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
    description: 'The all-in-one Hugo-npm framework. Fast, flexible, and easy-to-use.',
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
        link: '/getting-started/'
      }, {
        label: 'Installation',
        link: '/install/auto/'
      }, {
        label: 'Editor Setup',
        link: '/editor-setup/'
      }, {
        label: 'Upgrade to v2',
        link: '/guides/upgrade-to/v2/'
      }]
    }, {
      label: 'Core Concepts',
      items: [
      {
        label: 'Why Hyas',
        link: '/concepts/why-hyas/'
      }]
    }, {
      label: 'Basics',
      items: [
      {
        label: 'Project Structure',
        link: '/basics/project-structure/'
      }]
    }, {
      label: 'Recipes',
      items: [
      {
        label: 'Connect a CMS',
        link: '/guides/cms/'
      }]
    }, {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    social: {
      github: 'https://github.com/gethyas'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    lastUpdated: true
  }), sitemap({
      // configuration options
    })
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
