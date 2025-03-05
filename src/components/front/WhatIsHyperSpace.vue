<template>
  <div class="container py-20 lg:py-[120px]">
    <div class="flex gap-8 max-lg:flex-col lg:gap-[88px]">
      <div class="w-full max-w-[512px]">
        <div class="h2 max-lg:text-center">
          {{ $t('what_is') }}
          <br />
          <span class="text-gradient">{{ $t('hyperspace') }}?</span>
        </div>

        <div class="p-s mt-6 lg:mt-10">{{ $t('hyperspace_is') }}</div>

        <div class="p-s mt-6">{{ $t('with_hyperspace') }}</div>

        <div class="mt-8 flex items-center gap-4 max-lg:flex-col">
          <div class="p16m max-lg:text-center">{{ $t('trusted') }}:</div>

          <div class="flex">
            <img
              src="/assets/images/trusted/01.webp"
              alt=""
              class="relative block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/02.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/03.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/04.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/05.webp"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />

            <div
              class="u10b relative -ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple to-purple-600 text-white"
            >
              +120k
            </div>
          </div>
        </div>

        <Btn w-fit classes="mt-10 max-lg:mx-auto lg:mt-8" to="https://hyperspace.ai/onboarding">
          {{ $t('join_hyperspace') }}
        </Btn>
      </div>

      <div ref="emblaRef" class="overflow-hidden max-lg:-mx-4">
        <div class="flex">
          <img
            v-for="image in selectedImages"
            :key="image"
            :src="image"
            class="min-w-0 flex-[0_0_100%] object-cover object-left max-lg:h-[583px] max-[400px]:h-[500px]"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

import emblaCarouselVue from 'embla-carousel-vue'

import AutoPlay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const [emblaRef] = emblaCarouselVue({ loop: true, duration: 50 }, [
  Fade(),
  AutoPlay({ stopOnInteraction: false }),
])

const { width } = useWindowSize()

const images = [
  '/assets/images/catalog/images.webp',
  '/assets/images/catalog/chatbots.webp',
  '/assets/images/catalog/texts.webp',
  '/assets/images/catalog/music.webp',
  '/assets/images/catalog/voices.webp',
]

const imagesMobile = [
  '/assets/images/catalog/images_mobile.webp',
  '/assets/images/catalog/chatbots_mobile.webp',
  '/assets/images/catalog/texts_mobile.webp',
  '/assets/images/catalog/music_mobile.webp',
  '/assets/images/catalog/voices_mobile.webp',
]

// По умолчанию берём десктопную версию
const selectedImages = ref(images)

// Обновляем `selectedImages` только на клиенте
onMounted(() => {
  selectedImages.value = width.value < 768 ? imagesMobile : images
})
</script>
