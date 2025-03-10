<template>
  <div class="container py-20 lg:py-[120px]">
    <div class="flex gap-8 max-lg:flex-col lg:gap-[88px]">
      <div class="flex-1">
        <div class="h2 max-lg:text-center">
          {{ $t('what_is') }}
          <br />
          <span class="text-gradient">{{ $t('hyperspace') }}?</span>
        </div>

        <div class="p-s mt-6 lg:mt-10">{{ $t('hyperspace_is') }}</div>

        <div class="p-s mt-6">{{ $t('with_hyperspace') }}</div>

        <div class="mt-8 flex items-center gap-4 max-lg:flex-col">
          <div class="p16m max-lg:text-center">{{ $t('trusted') }}:</div>

          <div class="flex">
            <img
              src="/assets/images/trusted/01.jpeg"
              alt=""
              class="relative block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/02.jpeg"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/03.jpeg"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/04.jpeg"
              alt=""
              class="relative -ml-4 block h-12 w-12 rounded-full border-[3px] border-white object-cover object-center"
            />
            <img
              src="/assets/images/trusted/05.jpeg"
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

        <Btn w-fit classes="mt-10 max-lg:mx-auto lg:mt-8" to="https://hyperspace.ai/onboarding-app">
          {{ $t('join_hyperspace') }}
        </Btn>
      </div>

      <div class="min-w-0 max-w-full flex-1 rounded-3xl bg-white pt-[36px] max-lg:mx-5">
        <CatalogPreview />

        <div
          class="r18m -mx-4 mb-8 mt-4 flex max-w-[424px] items-center justify-between rounded-[32px] bg-white py-[7px] pl-8 pr-2 text-black/45 shadow-[0_4px_44px_0_rgba(0,0,0,0.05)] lg:mx-auto lg:-mb-6 lg:w-full"
        >
          {{ $t('hi') }}

          <GIcon name="icon_gemini" class="text-[46px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogPreview from '~/components/catalog/CatalogPreview.vue'
</script>
