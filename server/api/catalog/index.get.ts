export default defineEventHandler(event => {
  const { type } = getQuery(event)

  return apiFetch(`ai/catalog${type ? '/' + type : '/chat'}`, {
    params: { limit: 32 },
  })
})
