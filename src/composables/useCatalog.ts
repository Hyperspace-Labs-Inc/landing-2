import { ref } from 'vue'

export type ModelMokup = {
  id: number
  title: string
  image: string
  text: string
  type: string
  count: number
}

export type Model = {
  id: number
  price?: number
  slug?: string
  newSlug?: string
  type?: string
  title?: string
  description?: string
  usage?: string
  system?: string
  cover?: null | string
  logo?: string
  config?: {
    name: string
    role: string
    helpsWith: string
    mood: string
    messages: {
      role: string
      content: string
    }[]

    supports_stream: boolean
    supports_describe_image: boolean
  }
  media?: {
    id: number
    type: string
    thumbnail: string
    url: string
    path: string
    width: null | number
    height: null | number
  }[]
  settings?: {
    name: string
    role: string
    message: string
  }
  categories?: {
    id: number
    name: string
    title: null
    description: string
    slug: string
    newSlug: string
    metaTitle: null | string
    metaDescription: null | string
    shortName: null | string
    isFilter: boolean
    isPrimary: boolean
    promptExamples: null | string
    icon: null | string
    order: number
  }[]
  counts?: {
    usage: number
    views: number
  }
  rating?: {
    avg: number
  }
}

const categoriesMap = {
  chat: {
    title: 'Chatbots',
    desc: 'Access a wide range of conversational AI, from versatile models to specialized assistants for learning or planning.',
  },
  image: {
    title: 'Images',
    desc: 'Most popular cutting edge Image generation models to create image of any possible style.',
  },
  text: {
    title: 'Text',
    desc: 'From virtual assistants to AI companions, find the perfect bot to meet your needs and enhance your experience.',
  },
  music: {
    title: 'Music',
    desc: 'Discover tracks, albums, and playlists to match every mood and moment.',
  },
  voice: {
    title: 'Voices',
    desc: 'From friendly tones to professional styles, find the voice that brings your vision to life.',
  },
}

const categoriesMockup = {
  image: [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Base Models',
    },
    {
      id: 3,
      title: 'Photoreal',
    },
    {
      id: 4,
      title: 'Abstract',
    },
    {
      id: 5,
      title: 'Art filters',
    },
    {
      id: 6,
      title: 'Characters',
    },
    {
      id: 7,
      title: '3D',
    },
    {
      id: 8,
      title: 'Tatoo',
    },
    {
      id: 9,
      title: 'Game',
    },
  ],
  chat: [
    {
      id: 11,
      title: 'All',
    },
    {
      id: 12,
      title: 'Base Models',
    },
    {
      id: 13,
      title: 'Photoreal',
    },
    {
      id: 14,
      title: 'Abstract',
    },
    {
      id: 15,
      title: 'Art filters',
    },
    {
      id: 16,
      title: 'Characters',
    },
    {
      id: 17,
      title: '3D',
    },
    {
      id: 18,
      title: 'Tatoo',
    },
    {
      id: 19,
      title: 'Game',
    },
  ],
  text: [
    {
      id: 21,
      title: 'All',
    },
    {
      id: 22,
      title: 'SEO',
    },
    {
      id: 23,
      title: 'Marketing',
    },
    {
      id: 24,
      title: 'Youtube',
    },
    {
      id: 25,
      title: 'Education',
    },
    {
      id: 26,
      title: 'Blog',
    },
    {
      id: 27,
      title: 'Social Media',
    },
    {
      id: 28,
      title: 'Writing',
    },
    {
      id: 29,
      title: 'E-Commrce',
    },
  ],
  music: [
    {
      id: 31,
      title: 'All',
    },
    {
      id: 32,
      title: 'Genre',
    },
    {
      id: 33,
      title: 'Style',
    },
  ],
  voice: [
    {
      id: 41,
      title: 'All',
    },
    {
      id: 42,
      title: 'Popular',
    },
    {
      id: 43,
      title: 'Male',
    },
    {
      id: 44,
      title: 'Female',
    },
  ],
}

const catalogMockup = {
  image: [
    {
      id: 1,
      type: 'image',
      title: 'Flux Schnell',
      image: '/assets/images/catalog/images/1.webp',
      text: 'Ultimate solution for speed and efficiency.',
      count: 25450,
    },
    {
      id: 2,
      type: 'image',
      title: 'Dall-E 3',
      image: '/assets/images/catalog/images/2.webp',
      text: 'Cutting-edge AI that creates detailed and imagi...',
      count: 18833,
    },
    {
      id: 3,
      type: 'image',
      title: 'Midjourney',
      image: '/assets/images/catalog/images/3.webp',
      text: 'Midjourney Mix Base Model AI is an advanced image...',
      count: 12552,
    },
    {
      id: 4,
      type: 'image',
      title: 'Stable Diffusion',
      image: '/assets/images/catalog/images/4.webp',
      text: 'Efficient AI model for generating detailed image...',
      count: 12552,
    },
  ],
  chat: [
    {
      id: 5,
      type: 'chat',
      title: 'HyperBot',
      image: '/assets/images/catalog/chat/1.webp',
      text: 'Anything you need to know about HyperSpace is here.',
      count: 25450,
    },
    {
      id: 6,
      type: 'chat',
      title: 'GPT-4o',
      image: '/assets/images/catalog/chat/2.webp',
      text: 'Advanced conversational AI chatbot that understands...',
      count: 18833,
    },
    {
      id: 7,
      type: 'chat',
      title: 'Gemini Advanced',
      image: '/assets/images/catalog/chat/3.webp',
      text: 'Adaptable and intelligent chatbot inspired by the ve...',
      count: 12552,
    },
    {
      id: 8,
      type: 'chat',
      title: 'Claude',
      image: '/assets/images/catalog/chat/4.webp',
      text: 'One of the most advanced AI chatbot models. It is id...',
      count: 12552,
    },
  ],
  text: [
    {
      id: 9,
      type: 'text',
      title: 'Grammar Checker',
      image: '/assets/images/catalog/text/1.webp',
      text: 'An advanced tool for checking and correcting...',
      count: 25450,
    },
    {
      id: 10,
      type: 'text',
      title: 'Video Ideas',
      image: '/assets/images/catalog/text/1.webp',
      text: 'Never run out of ideas for your YouTube channel wit...',
      count: 18833,
    },
    {
      id: 11,
      type: 'text',
      title: 'Photo post caption',
      image: '/assets/images/catalog/text/1.webp',
      text: 'Bring your visual content to life with captivating capti...',
      count: 12552,
    },
    {
      id: 12,
      type: 'text',
      title: 'Meta tags',
      image: '/assets/images/catalog/text/1.webp',
      text: 'Meta tags',
      count: 12552,
    },
  ],
  music: [
    {
      id: 13,
      type: 'music',
      title: 'Suno AI',
      image: '/assets/images/catalog/music/1.webp',
      text: 'Suno AI Music Generation',
      count: 25450,
    },
    {
      id: 14,
      type: 'music',
      title: 'Easy Listening',
      image: '/assets/images/catalog/music/2.webp',
      text: 'Easy Listening Music ',
      count: 18833,
    },
    {
      id: 15,
      type: 'music',
      title: 'K-pop',
      image: '/assets/images/catalog/music/3.webp',
      text: 'K-pop Music',
      count: 12552,
    },
    {
      id: 16,
      type: 'music',
      title: 'Rock',
      image: '/assets/images/catalog/music/4.webp',
      text: 'Rock Music Generation',
      count: 12552,
    },
  ],
  voice: [
    {
      id: 17,
      type: 'voice',
      title: 'Jessica',
      image: '/assets/images/catalog/voice/1.webp',
      text: 'Ultimate solution for speed and efficiency.',
      count: 25450,
    },
    {
      id: 18,
      type: 'voice',
      title: 'Dall-E 3',
      image: '/assets/images/catalog/voice/2.webp',
      text: 'Cutting-edge AI that creates detailed and imagi...',
      count: 18833,
    },
    {
      id: 19,
      type: 'voice',
      title: 'Midjourney',
      image: '/assets/images/catalog/voice/3.webp',
      text: 'Midjourney Mix Base Model AI is an advanced image...',
      count: 12552,
    },
    {
      id: 20,
      type: 'voice',
      title: 'Stable Diffusion',
      image: '/assets/images/catalog/voice/4.webp',
      text: 'Efficient AI model for generating detailed image...',
      count: 12552,
    },
  ],
}

const catalog = ref(catalogMockup as Record<string, ModelMokup[]>)

const selectedType = ref('chat')

const selectedCategory = ref()

const selectedCategories = computed(() => categoriesMockup[selectedType.value])

const catalogByType = computed(() => {
  const items = catalog.value?.[selectedType.value] || []

  if (!selectedCategory.value) {
    return items
  }

  return items.filter(
    item => item?.categories?.some(category => category.id === selectedCategory.value) || true
  )
})

export const useCatalog = () => {
  const getCatalog = async () => {
    const { data } = await useFetch('/api/catalog', {
      params: { type: selectedType.value },
    })

    catalog.value[selectedType.value] = data.value?.items || []
  }

  return {
    catalog,
    catalogByType,
    selectedType,
    getCatalog,
    categoriesMap,
    selectedCategory,
    selectedCategories,
  }
}
