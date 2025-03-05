import { ref } from 'vue'

import reviewsJson from './reviews.json'

export type Review = {
  id: number
  name: string
  title: string
  text: string
  icon: string
  is_onboarding: boolean
}

const reviews = ref(reviewsJson as Review[])

export const useReviews = () => {
  const getReviews = async () => {
    const { data } = await useFetch('/api/reviews')

    reviews.value = data.value?.items || []
  }

  return {
    reviews,
    getReviews,
  }
}
