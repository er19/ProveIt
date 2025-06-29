// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'github_pages', // 👈 this sets output to static and correct router.base
  },
  // app: {
  //   baseURL: '/ProveIt/', // IMPORTANT: replace with your repo name
  // },
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-lucide-icons',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css', 'katex/dist/katex.min.css'],
  
  future: {
    compatibilityVersion: 4
  },
  
  compatibilityDate: '2024-11-27'
})