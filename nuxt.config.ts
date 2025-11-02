// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
  ui:{
    fonts: false,
  },
  routeRules: {
    '/*': {
      ssr: false,
    },
    
  },
  pinia:{
    storesDirs: [
      "@/store"
    ],
  },
  modules: ['@nuxt/image', '@nuxt/test-utils', '@nuxt/ui',"@pinia/nuxt"]
})