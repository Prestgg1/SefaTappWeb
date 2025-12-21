// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
  experimental:{
    typedPages:true
  },
  nitro: {
    openAPI:{
      
      route: "/_docs/openapi.json",
      ui: {
        scalar: {
          route: "/_docs/scalar"
        },
        swagger: {
          route: "/_docs/swagger"
        }
      }
    },
    experimental:{
      openAPI: true,
    }
  },
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
  modules: [
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
  ]
})