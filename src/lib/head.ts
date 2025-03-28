import { NuxtAppConfig } from '@nuxt/schema'

const viewport = `width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=contain`

const ogDescription =
  process?.env?.VITE_APP_DESC ||
  `Discover, interact with, and use 1000+ AI models. Transform the way you experience AI with Hyperspace App`

const ogTitle = process?.env?.VITE_APP_NAME || 'Hyperspace AI App|All-in-one AI Tools App'

const ogUrl = 'https://hyperspace.ai/'

const openGraphMapOg = {
  'og:locale': 'en_US',
  'og:site_name': 'HyperSpace',
  'og:type': 'website',
  'og:title': ogTitle,
  'og:description': ogDescription,
  'og:url': ogUrl,
}

const openGraphMap = {
  description: ogDescription,
}

const getOpenGraph = (obj: Record<string, string | number>) =>
  Object.entries(obj).map(([key, value]) => ({ hid: key, name: key, content: value }), [])

const getOpenGraphOg = (obj: Record<string, string | number>) =>
  Object.entries(obj).map(([key, value]) => ({ hid: key, property: key, content: value }), [])

export const head: NuxtAppConfig['head'] = {
  title: ogTitle,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: viewport },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },

    // open graph
    ...getOpenGraph(openGraphMap),
    ...getOpenGraphOg(openGraphMapOg),
  ],
  link: [
    { hid: 'canonical', rel: 'canonical', href: 'https://hyperspace.ai/' },

    {
      href: '/data/assets/unbounded/latin.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    { href: '/data/assets/animations/models.lottie', rel: 'preload', as: 'fetch' },

    { href: '/data/favicon.png', rel: 'shortcut icon' },

    { href: '/data/favicon.ico', rel: 'icon' },

    {
      href: '/data/assets/unbounded/style.css',
      rel: 'stylesheet',
    },

    {
      href: '/data/assets/sfpro/sfpro.css',
      rel: 'stylesheet',
    },
    {
      href: '/data/assets/sfpro/sfprorounded.css',
      rel: 'stylesheet',
    },

    {
      href: '/data/assets/sfpro/SFProDisplay-Bold.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SFProDisplay-Semibold.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SFProDisplay-Medium.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SFProDisplay-Regular.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SF-Pro-Rounded-Medium.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SF-Pro-Rounded-Light.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SF-Pro-Rounded-Bold.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SF-Pro-Rounded-Semibold.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },

    {
      href: '/data/assets/sfpro/SF-Pro-Rounded-Regular.woff2',
      rel: 'preload',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
  ],
}
