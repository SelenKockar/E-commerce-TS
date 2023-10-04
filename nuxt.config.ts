// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  css: ['/node_modules/primeflex/primeflex.css', 'primeicons/primeicons.css','/node_modules/primevue/resources/themes/lara-light-indigo/theme.css'],
  modules: [
      '@nuxt/image',
      '@pinia/nuxt',
    ],
  
    build: {
      transpile: ["primevue"]
    },

      image: {
        format: ['webp'],
        dir: 'assets/images'
      },
     
    
    
   
})
