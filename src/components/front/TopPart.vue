<template>
  <div class="container mt-[200px] flex max-lg:flex-col">
    <div class="flex w-full max-w-[672px] flex-col justify-center lg:pl-[49px]">
      <div class="header-h1">
        <span class="text-purple">
          {{ $t('all_the_ai') }}
        </span>
        {{ $t('right') }}
      </div>

      <div class="p-m mt-6">{{ $t('hyperspace_is_your') }}</div>

      <div class="mt-6 flex items-center gap-8 max-lg:justify-center lg:mt-12">
        <div class="flex gap-4">
          <NuxtLink :to="store" target="_blank">
            <img src="/assets/images/apple.webp" class="w-[120px] lg:w-[135px]" alt="" />
          </NuxtLink>
          <NuxtLink :to="google" target="_blank">
            <img src="/assets/images/google.webp" class="w-[135px] lg:w-[152px]" alt="" />
          </NuxtLink>
        </div>

        <img
          src="/assets/images/qr.webp"
          class="w-[56px] flex-shrink-0 object-contain max-lg:hidden"
          alt=""
        />
      </div>
    </div>

    <div class="relative flex w-full items-center justify-center">
      <div
        class="absolute bottom-0 left-0 top-0 w-[100vw] bg-[url(/assets/images/top_bg.webp)] bg-contain bg-left-bottom bg-no-repeat max-lg:hidden"
      />

      <img
        src="/assets/images/441.webp"
        class="relative z-10 w-[441px] object-contain max-lg:hidden"
        alt=""
      />

      <img
        src="/assets/images/top_bg_mobile.webp"
        class="relative z-10 -mt-20 w-full object-contain lg:hidden"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { store, google } = useRuntimeConfig()?.public || {}
</script>
