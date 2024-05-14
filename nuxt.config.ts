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

  modules: ['@unocss/nuxt', '@nuxtjs/i18n', '@pinia/nuxt'],

  css: ['@unocss/reset/tailwind.css', '/assets/main.css'],

  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    langDir: 'locales',
    compilation: {
      strictMessage: false,
    },
    lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'english',
        file: 'en.json',
      },
    ],
  },
})
