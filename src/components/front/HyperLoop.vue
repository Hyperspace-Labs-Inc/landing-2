<template>
  <div ref="targetRef" class="relative mx-auto w-full max-w-[1440px] pt-[63px]" id="hyper-loop">
    <Transition name="fade" mode="in-out">
      <img
        src="/assets/images/animations/hyperloop.webp"
        alt="Loading animation"
        class="pointer-events-none w-full select-none object-contain"
        :class="{ invisible: isLoaded }"
      />
    </Transition>

    <Transition name="fade" mode="out-in">
      <dotlottie-player
        v-show="isLoaded"
        key="hyperloop"
        ref="animationRef"
        subframe
        class="pointer-events-none absolute left-0 top-0 w-full select-none"
        src="/assets/animations/portal.lottie"
      />
    </Transition>
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
