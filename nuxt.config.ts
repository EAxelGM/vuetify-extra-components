// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import * as utils from './utils';
import envs from './enviroments';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    },
    vscode: {},
  },
  ssr: false,

  app: {
    head: {
      titleTemplate: `%s - ${utils.projectName}`,
      title: utils.projectName,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        /* { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com"}, */
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //{ hid: 'description', name: 'description', content: 'External Api Sys' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  css: [
    '~/styles/global.css',
    '~/styles/footer.css',
    '~/styles/vuetify-styles.css',
    '~/styles/scroll-web.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  //configure envs
  runtimeConfig: {
    // public keys, accesibles en client y server
    public: envs
  }

});