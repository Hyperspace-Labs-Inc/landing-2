import { ref } from 'vue'

export type User = {
  id: number
  name: string
  surname: string
  email: string
  credits: {
    words: number
    images: number
  }
  avatar: string
  balance: number
  hasSubscription: boolean
  subscription: null | object
}

export const user = ref({} as User)

export const useUser = () => {
  const getUser = async () => {
    // const { API_URL } = useRuntimeConfig()

    try {
      const authorization = 'Bearer ' + localStorage.getItem('_token')

      const data = await $fetch('/api/user', {
        headers: { authorization },
      })

      user.value = data || {}
    } catch (e) {}
  }

  return {
    user,
    getUser,
  }
}
