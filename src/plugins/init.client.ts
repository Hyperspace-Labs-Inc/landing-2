export default defineNuxtPlugin({
  name: 'init',
  async setup(app) {
    const { getUser } = useUser()

    await getUser()
  },
})
