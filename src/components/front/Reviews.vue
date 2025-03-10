<template>
  <div class="mt-[72px] bg-white py-[72px] lg:mt-[200px] lg:py-[144px]">
    <div class="mx-auto flex max-w-[1086px] items-center justify-between">
      <div class="h2 max-w-[698px] px-6">
        {{ $t('dont') }}
        <span class="text-gradient">{{ $t('users') }}</span>
        !
      </div>

      <div class="flex gap-5 max-lg:hidden">
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100 transition-all hover:bg-green"
          @click="scrollPrev"
        >
          <GIcon name="icon_left" />
        </button>
        <button
          style="outline: 0"
          class="flex h-14 w-14 items-center justify-center rounded-full bg-black-100 transition-all hover:bg-green"
          @click="scrollNext"
        >
          <GIcon name="icon_right" />
        </button>
      </div>
    </div>

    <div ref="emblaRef" class="mt-12 overflow-hidden px-2">
      <div class="flex">
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          v-bind="review"
          class="min-w-0 flex-[0_0_25%] max-lg:flex-[0_0_100%]"
        />
      </div>
    </div>

    <div class="mt-6 flex justify-center gap-5 lg:hidden">
      <button
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
        @click="scrollPrev"
      >
        <GIcon name="icon_left" />
      </button>

      <button
        style="outline: 0"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-black-100"
        @click="scrollNext"
      >
        <GIcon name="icon_right" />
      </button>
    </div>

    <Btn classes="mt-12 mx-auto max-lg:hidden" to="https://hyperspace.ai/onboarding-app" w-fit>
      {{ $t('solve_your') }}
    </Btn>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

import AutoScroll from 'embla-carousel-auto-scroll'

import ReviewItem from '~/components/reviews/ReviewItem.vue'

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, slidesToScroll: 'auto' }, [
  AutoScroll({ stopOnMouseEnter: true, stopOnInteraction: false, stopOnFocusIn: false }),
])

const { reviews } = useReviews()

// Остановить автоскролл и прокрутить влево
const scrollPrev = () => {
  emblaApi.value?.plugins?.()?.autoScroll?.stop()

  emblaApi.value?.scrollPrev()

  emblaApi.value?.plugins?.()?.autoScroll?.play()
}

// Остановить автоскролл и прокрутить вправо
const scrollNext = () => {
  emblaApi.value?.plugins?.()?.autoScroll?.stop()

  emblaApi.value?.scrollNext()

  emblaApi.value?.plugins?.()?.autoScroll?.play()
}
</script>

<style scoped>
.no-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
