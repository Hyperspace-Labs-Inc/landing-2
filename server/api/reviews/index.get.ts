export default defineEventHandler(event => {
  return apiFetch(`onboarding`, {
    params: { limit: 32 },
  })
})
