/**
 * Documentation of Vuetify module for Nuxt 3
 * https://vuetifyjs.com/en/components/all/#containment
 *
 * Icon Documentation
 * https://pictogrammers.github.io/@mdi/font/7.4.47/
 */

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';


import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
//import { es,en } from 'vuetify/locale';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#3351ff',
            secondary: '#212121',
            background: '#e6e6e6',
          },
        },
        dark: {
          colors: {
            background:"#000000"
          }
         }
      },
    },
    defaults: {
      VBtn: {
        color: 'primary',
        variant: 'elevated'
      },
      VTextField: {
        color: 'primary',
        //variant: 'outlined',
        density:'compact'
      },
      VProgressLinear: {
        color:"primary"
      },
      VCheckbox: {
        color:"primary"
      },
      VSlider: {
        color:"primary"
      }
    },
    /* locale: {
      locale: 'en',
      fallback: 'en',
      messages: { en },
    }, */
  });
  app.vueApp.use(vuetify);
});
