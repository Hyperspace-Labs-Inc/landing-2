<template>
  <div class="container mt-[136px] lg:mt-[120px]">
    <div class="h2 text-center">
      <div class="text-gradient">{{ $t('why') }}</div>

      <div class="text-black">{{ $t('hyperspace') }}?</div>
    </div>

    <div class="mt-14 flex gap-8 max-lg:flex-col-reverse max-lg:gap-6 lg:mt-[72px]">
      <Btn classes="lg:hidden mx-auto" w-fit to="https://hyperspace.ai/onboarding">
        {{ $t('try_our') }}
      </Btn>

      <div ref="targetRef" class="relative flex-1">
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

      <div class="flex-1">
        <div class="max-lg:text-center lg:p-[96px]">
          <div class="h3" v-html="$t('all_tools')" />

          <div class="p-m mt-4 lg:mt-6" v-html="$t('we_offer')" />

          <Btn classes="mt-10 max-lg:hidden" w-fit to="https://hyperspace.ai/onboarding">
            {{ $t('try_our') }}
          </Btn>
        </div>
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
