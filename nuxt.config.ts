// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
  ui:{
    fonts: false,
    colorMode: false,
  },
  routeRules: {
    '/*': {
      ssr: true,
    },
    
  },

  pinia:{
    storesDirs: [
      "stores",
      "app/store"
    ],
  },
  modules: ['@nuxt/image', '@nuxt/test-utils', '@nuxt/ui','@pinia/nuxt']
})