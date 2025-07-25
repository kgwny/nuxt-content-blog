import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  typescript: {
    shim: false,
  },
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
    "vuetify/styles"
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [
    './plugins/vuetify.ts',
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    plugins: [vuetify()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
