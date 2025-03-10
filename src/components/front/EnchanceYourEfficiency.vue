<template>
  <div ref="target" class="container mt-[96px]">
    <div class="flex gap-8 max-lg:flex-col-reverse">
      <div class="relative flex-1">
        <Transition name="fade" mode="in-out">
          <img
            src="/assets/images/animations/graph.webp"
            alt="Loading animation"
            class="pointer-events-none w-full select-none object-contain"
            :class="{ '!invisible': isLoaded }"
          />
        </Transition>

        <ClientOnly>
          <Transition name="fade" mode="in-out">
            <dotlottie-player
              ref="animationRef"
              key="enhance"
              subframe
              class="pointer-events-none absolute left-0 top-0 w-full select-none"
              src="/assets/animations/graph.json"
            />
          </Transition>
        </ClientOnly>

        <Btn classes="mt-10 mx-auto lg:hidden" to="https://hyperspace.ai/onboarding-app" w-fit>
          {{ $t('boost') }}
        </Btn>
      </div>

      <div class="flex-1">
        <div class="max-lg:text-center lg:m-[96px]">
          <div class="h3" v-html="$t('enhance')" />

          <div class="p-m mt-4 lg:mt-10" v-html="$t('with_ai')" />

          <Btn classes="mt-10 max-lg:hidden" to="https://hyperspace.ai/onboarding-app" w-fit>
            {{ $t('boost') }}
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)

const animationRef = ref<HTMLElement | null>(null)

const targetIsVisible = useElementVisibility(target)

const isLoaded = ref(false)

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

watch(targetIsVisible, () => {
  animationRef.value?.play()
})

watch(isLoaded, () => {
  if (targetIsVisible.value) {
    animationRef.value?.play()
  }
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
