// https://nuxt.com/docs/api/configuration/nuxt-config

import { head } from './src/lib/head'

export default defineNuxtConfig({
  serverDir: 'server/',
  srcDir: 'src/',
  dir: {
    public: '../public', // Redirect public directory to /public
  },
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    payloadExtraction: false, // Отключает генерацию _payload.json
  },
  app: {
    head,
    rootId: 'app',
  },
  icon: {
    clientBundle: {
      includeCustomCollections: true,
    },
    customCollections: [
      {
        prefix: 'custom',
        dir: './src/assets/icons',
        normalizeIconName: false,
      },
    ],
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
      crawlLinks: false,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@aarsteinmedia/dotlottie-player-light'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/icon',
  ],
  // router: {
  //   options: {
  //     scrollBehaviorType: 'smooth',
  //   },
  // },
  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [{ code: 'en', label: 'English' }],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  colorMode: {
    preference: 'light',
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['dotlottie-player'].includes(tag),
    },
  },
  runtimeConfig: {
    public: {
      vk: process.env.APP_VK,
      blog: process.env.APP_BLOG,
      store: process.env.APP_APPSTORE,
      google: process.env.APP_GOOGLESTORE,
      facebook: process.env.APP_FACEBOOK,
      instagram: process.env.APP_INSTAGRAM,
      tiktok: process.env.APP_TIKTOK,
      copyright: process.env.APP_COPYRIGHT,
      mailFrom: process.env.APP_MAIL_FROM,
      mailTo: process.env.APP_MAIL_TO,
      mailSubject: process.env.APP_MAIL_SUBJECT,
      usa: process.env.APP_PHONE_USA,
      uk: process.env.APP_PHONE_UK,
      email: process.env.APP_EMAIL,
      address: process.env.APP_ADDRESS,
    },
    API_URL: process.env.API_URL,
    SENDGRID_API_KEY: process.env.APP_SENDGRID_API_KEY,
  },
})
