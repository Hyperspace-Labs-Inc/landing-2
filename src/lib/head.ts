import { NuxtAppConfig } from '@nuxt/schema'

const viewport = `width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=contain`

const ogDescription =
  process?.env?.VITE_APP_DESC || `Забронируйте лыжи или сноуборд прямо сейчас и получите скидку 20%`

const ogTitle = process?.env?.VITE_APP_NAME || 'HyperSpace'

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
  title: 'HyperSpace',
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

    // { href: '/assets/images/bg.webp', rel: 'preload', as: 'image' },

    { href: '/favicon.png', rel: 'shortcut icon' },
    { href: '/favicon.ico', rel: 'icon' },

    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },

    {
      href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap',
      rel: 'stylesheet',
      crossorigin: 'anonymous',
    },

    {
      href: '/assets/sfpro/sfpro.css',
      rel: 'stylesheet',
    },
    {
      href: '/assets/sfpro/sfprorounded.css',
      rel: 'stylesheet',
    },
  ],
}
