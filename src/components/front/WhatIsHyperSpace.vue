<template>
  <div class="container py-[64px] lg:py-[120px]">
    <div class="flex gap-8 max-lg:flex-col lg:gap-[88px]">
      <div class="w-full max-w-[584px]">
        <div class="h2 max-lg:text-center">
          {{ $t('what_is') }}
          <br />
          <span class="text-gradient">{{ $t('hyperspace_mobile') }}?</span>
        </div>

        <div class="p-s mt-6 lg:mt-10">{{ $t('hyperspace_app') }}</div>

        <div class="p-s mt-6">{{ $t('experience') }}</div>

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

      <div ref="targetRef" class="relative w-full">
        <Transition name="fade" mode="in-out">
          <img
            src="/assets/images/animations/models.webp"
            alt="Loading animation"
            class="pointer-events-none w-full select-none object-contain"
            :class="{ '!invisible': isLoaded }"
          />
        </Transition>

        <ClientOnly>
          <Transition name="fade" mode="in-out">
            <dotlottie-player
              v-show="isLoaded"
              subframe
              ref="animationRef"
              key="why"
              class="pointer-events-none absolute left-0 top-0 w-full select-none"
              src="/assets/animations/models.lottie"
            />
          </Transition>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementBounding } from '@vueuse/core'

const isLoaded = ref(false)

const targetRef = ref()

const animationRef = ref()

const { top, height } = useElementBounding(targetRef)

watch(
  () => animationRef.value,
  init => {
    if (!init) {
      return
    }

    animationRef.value?.addEventListener?.('rendered', () => {
      isLoaded.value = true
    })
  }
)

watch(top, topValue => {
  if (!animationRef.value) {
    return
  }

  const instance = animationRef.value?.getLottie()

  if (!instance) {
    console.warn('Lottie instance is undefined')
    return
  }

  const { totalFrames } = instance

  if (!totalFrames) {
    console.warn('totalFrames is undefined or 0')
    return
  }

  const viewportHeight = window.innerHeight

  const fullScrollDistance = height.value + viewportHeight

  const progress = Math.min(1, Math.max(0, (viewportHeight - topValue) / fullScrollDistance))

  const targetFrame = Math.round(progress * totalFrames)

  // console.warn('targetFrame:', targetFrame, 'totalFrames:', totalFrames)

  requestAnimationFrame(() => {
    animationRef.value.seek(targetFrame)
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>
