// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  imports: {
    dirs: ['composables/**'],
  },

  ssr: true,

  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        esModuleInterop: true,
        isolatedModules: true,
        noImplicitThis: true,
        verbatimModuleSyntax: true,
      },
    },
  },

  modules: ['@unocss/nuxt'],

  css: ['@unocss/reset/tailwind.css', '/assets/main.css'],
})
