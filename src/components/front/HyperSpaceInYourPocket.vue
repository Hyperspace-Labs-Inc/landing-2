<template>
  <div class=":pb-[120px] container pb-[72px]">
    <div class="flex items-center gap-8 max-lg:flex-col-reverse max-lg:px-2 lg:px-[96px]">
      <div class="flex flex-1 flex-col gap-6 lg:gap-11">
        <div class="h2 max-lg:text-center">
          {{ $t('hyperspace_in_your') }}
          <span class="text-gradient">{{ $t('pocket') }}!</span>
        </div>

        <div class="flex gap-8 max-lg:order-1">
          <img
            src="/data/assets/images/qr.webp"
            class="w-[108px] flex-shrink-0 object-contain max-lg:hidden"
            alt=""
          />

          <div class="flex gap-3 lg:flex-col lg:gap-4">
            <NuxtLink :to="store" target="_blank">
              <img src="/data/assets/images/apple.webp" class="lg:w-[135px]" alt="" />
            </NuxtLink>
            <NuxtLink :to="google" target="_blank">
              <img src="/data/assets/images/google.webp" class="lg:w-[152px]" alt="" />
            </NuxtLink>
          </div>
        </div>

        <div class="p-m max-lg:order-0">{{ $t('continue') }}</div>

        <Btn color="ghost" classes="max-lg:order-2 lg:w-fit">{{ $t('learn_more') }}</Btn>
      </div>

      <div class="min-w-0 flex-1">
        <img src="/data/assets/images/pocket.webp" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { store, google } = useRuntimeConfig()?.public || {}
</script>
