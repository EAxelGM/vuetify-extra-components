import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // 👈
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VuetifyExtraComponents",
      fileName: (format) => `vuetify-extra-components.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "vuetify"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify"
        }
      }
    }
  }
});
