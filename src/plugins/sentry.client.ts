// import * as Sentry from '@sentry/nuxt'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.public?.SENTRY_DSN) {
    return
  }
  // nuxtApp.hook('app:error', (error) => {
  //   Sentry.captureException(error);
  // });
  // nuxtApp.hook('app:chunkError', (error) => {
  //   Sentry.captureException(error);
  // });
  // nuxtApp.hook('vue:error', (..._args) => {
  //   Sentry.captureException('asdasd');
  // })

  Sentry.init({
    dsn: runtimeConfig.public.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: runtimeConfig.public?.APP_ENVIRONMENT,
  })

  return {
    provide: {
      sentry: Sentry,
    },
  }
})
