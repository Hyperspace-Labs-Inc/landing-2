<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 bg-black-100 py-2 transition-[padding] lg:py-8"
    :class="{ 'lg:!py-[11px]': isStickied }"
  >
    <div class="container flex items-center gap-4 max-lg:justify-between">
      <NuxtLink :to="localeRoute('/')">
        <GIcon name="icon_logo" class="h-[31px] transition-all lg:h-[45px]" is-pass-w-h />
      </NuxtLink>

      <HeaderMenu
        class="max-lg:fixed max-lg:right-0 max-lg:top-9"
        :class="{ 'max-lg:translate-x-0': isShowMenu, 'max-lg:translate-x-[100vw]': !isShowMenu }"
      />

      <div class="flex gap-4 max-lg:hidden">
        <Btn color="ghost" to="https://hyperspace.ai/sign-in" size="small">{{ $t('login') }}</Btn>
        <Btn to="https://hyperspace.ai/onboarding-app" size="small">{{ $t('tryfree') }}</Btn>
      </div>

      <button style="outline: 0" class="lg:hidden" @click="isShowMobileMenu = !isShowMobileMenu">
        <GIcon :name="isShowMobileMenu ? 'icon_cross' : 'icon_burger'" class="text-[40px]" />
      </button>

      <div
        class="fixed right-0 top-14 flex h-[100vh] w-[100vw] flex-col gap-2 bg-black-100 py-4 transition-all lg:hidden"
        :class="{ ' translate-x-0': isShowMobileMenu, 'translate-x-full': !isShowMobileMenu }"
      >
        <NuxtLink
          v-for="([domain], index) in domains"
          :key="index"
          :to="domain.to"
          class="r18 flex h-[49px] items-center justify-between px-6 transition-all hover:bg-black/10"
        >
          {{ domain.label }}

          <GIcon name="icon_right" />
        </NuxtLink>

        <Divider class="mx-6 my-3 bg-black-1100" />

        <ClientOnly>
          <NuxtLink
            to="/store"
            class="r18 flex h-[49px] items-center justify-between px-6 transition-all hover:bg-black/10"
          >
            {{ $t('mobile_app') }}
            <GIcon name="icon_right" />
          </NuxtLink>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderMenu from '@/components/base/HeaderMenu.vue'

import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const localeRoute = useLocaleRoute()

const isStickied = useState('isStickied', () => false)

const isHeaderMounted = useState('isHeaderMounted', () => false)

const isShowMenu = ref(false)

const isShowMobileMenu = ref(false)

const domains = useState('domains', () => [])

watchEffect(() => {
  isStickied.value = y.value > 0
})

onMounted(() => {
  isHeaderMounted.value = true
})
</script>
