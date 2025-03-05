<template>
  <div class="container mt-[112px] flex">
    <div class="w-full max-w-[623px] pb-[159px] pt-[182px]">
      <div class="header-h1">
        <span class="text-purple">
          {{ $t('all_the_ai') }}
        </span>
        {{ $t('right') }}
      </div>

      <div class="p-m mt-6">{{ $t('hyperspace_is_your') }}</div>

      <div class="mt-12 flex items-center gap-8">
        <div class="flex gap-3 max-lg:flex-col lg:gap-4">
          <NuxtLink :to="store" target="_blank">
            <img src="/assets/images/apple.webp" class="lg:w-[135px]" alt="" />
          </NuxtLink>
          <NuxtLink :to="google" target="_blank">
            <img src="/assets/images/google.webp" class="lg:w-[152px]" alt="" />
          </NuxtLink>
        </div>

        <img
          src="/assets/images/qr.webp"
          class="w-[56px] flex-shrink-0 object-contain max-lg:hidden"
          alt=""
        />
      </div>
    </div>

    <div class="w-full bg-[url(/assets/images/top_bg.webp)] bg-contain bg-top bg-no-repeat">
      &nbsp;
    </div>
  </div>
</template>

<script setup lang="ts">
const { store, google } = useRuntimeConfig()?.public || {}
</script>
