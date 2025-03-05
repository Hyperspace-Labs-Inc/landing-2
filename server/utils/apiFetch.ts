import type { UseFetchOptions } from 'nuxt/app'

import type { NitroFetchRequest } from 'nitropack'

const { API_URL } = useRuntimeConfig()

export async function apiFetch<T>(request: string | (() => string), opts?: UseFetchOptions<T>) {
  const { ...rest } = opts || {}

  const resolvedRequest: NitroFetchRequest = typeof request === 'function' ? request() : request

  return await $fetch<T>(resolvedRequest, {
    baseURL: API_URL,
    ...(rest || {}),
  })
}
