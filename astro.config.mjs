import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.gethyas.com',
  integrations: [starlight({
    title: 'Hyas Docs',
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
      replacesTitle: true,
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    social: {
      github: 'https://github.com/gethyas'
    },
    sidebar: [{
      label: 'Start Here',
      items: [{
        label: 'Getting Started',
        link: '/start-here/getting-started/'
      }, {
        label: 'Installation',
        link: '/start-here/installation/'
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
    }]
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
