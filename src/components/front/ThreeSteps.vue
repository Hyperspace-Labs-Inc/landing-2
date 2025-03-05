<template>
  <div class="container py-[72px] lg:py-[120px] lg:text-center">
    <div class="h2 max-lg:text-center">
      {{ $t('three') }}
      <span class="text-gradient">{{ $t('solve') }}&nbsp;</span>
      <br class="max-lg:hidden" />
      <span class="text-gradient">{{ $t('everything') }}</span>
    </div>

    <div class="mt-12 flex gap-14 max-lg:flex-col lg:mt-[96px] lg:gap-10">
      <div class="flex flex-1 flex-col gap-4 max-lg:flex-col-reverse lg:gap-6">
        <img src="/assets/images/steps/step1.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h3 lg:h5 max-lg:order-1">1. {{ $t('imagine') }}</div>
        <div class="p-s lg:p-m max-lg:order-0">{{ $t('whether') }}</div>
      </div>
      <div class="flex flex-1 flex-col gap-4 max-lg:flex-col-reverse lg:gap-6">
        <img src="/assets/images/steps/step2.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h3 lg:h5 max-lg:order-1">2. {{ $t('send') }}</div>
        <div class="p-s lg:p-m max-lg:order-0">{{ $t('select') }}</div>
      </div>
      <div class="flex flex-1 flex-col gap-4 max-lg:flex-col-reverse lg:gap-6">
        <img src="/assets/images/steps/step3.webp" alt="" class="mx-auto w-full max-w-[320px]" />
        <div class="h3 lg:h5 max-lg:order-1">3. {{ $t('enjoy') }}</div>
        <div class="p-s lg:p-m max-lg:order-0">{{ $t('interact') }}</div>
      </div>
    </div>

    <Btn classes="lg:mx-auto lg:min-w-[255px] mt-12 lg:w-fit" to="https://hyperspace.ai/onboarding">
      {{ $t('try_it_now') }}
    </Btn>
  </div>
</template>
<script setup lang="ts"></script>
