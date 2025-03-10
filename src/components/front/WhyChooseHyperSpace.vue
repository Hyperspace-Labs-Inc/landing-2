<template>
  <div class="container mt-[72px] lg:mt-[120px]">
    <div class="h2 mx-auto max-w-[770px] text-center">
      <span class="text-gradient">{{ $t('why_choose') }}</span>
      {{ $t('mobile_app') }}?
    </div>

    <div class="mt-[72px] flex gap-2 max-lg:-mx-4 max-lg:flex-col lg:gap-4">
      <div class="flex-1 rounded-[40px] bg-white pb-20 pt-10">
        <div>
          <img
            src="/assets/images/why/01.webp"
            alt=""
            class="w-full max-w-[410px] object-contain"
          />
        </div>

        <div class="h5 mt-6 px-10 text-center">{{ $t('user_friendly') }}</div>

        <div class="p-m mt-2 px-10 text-center">{{ $t('intuitive') }}</div>
      </div>
      <div class="flex-1 rounded-[40px] bg-white pb-20 pt-10">
        <div>
          <img
            src="/assets/images/why/02.webp"
            alt=""
            class="w-full max-w-[410px] object-contain"
          />
        </div>

        <div class="h5 mt-6 px-10 text-center">{{ $t('offline_access') }}</div>

        <div class="p-m mt-2 px-10 text-center">{{ $t('access_your') }}</div>
      </div>

      <div class="flex-1 rounded-[40px] bg-white pb-20 pt-10">
        <div>
          <img
            src="/assets/images/why/03.webp"
            alt=""
            class="w-full max-w-[410px] object-contain"
          />
        </div>

        <div class="h5 mt-6 px-10 text-center">{{ $t('seamless_syncing') }}</div>

        <div class="p-m mt-2 px-10 text-center">{{ $t('your_data') }}</div>
      </div>
    </div>

    <Btn
      classes="mx-auto mt-10  lg:mt-[72px] mb-[72px] lg:mb-[240px]"
      w-fit
      to="https://hyperspace.ai/onboarding-app"
    >
      {{ $t('try_mobile') }}
    </Btn>
  </div>
</template>
<script setup lang="ts"></script>
