<template>
  <div class="container mt-[115px] flex max-lg:flex-col">
    <div class="w-full max-w-[623px] lg:pb-[159px] lg:pt-[179px]">
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

    <div class="w-full bg-contain bg-top bg-no-repeat lg:bg-[url(/assets/images/top_bg.webp)]">
      <img
        src="/assets/images/top_bg_mobile.webp"
        class="-mt-20 w-full object-contain lg:hidden"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { store, google } = useRuntimeConfig()?.public || {}
</script>
