<template>
  <div class="mx-auto max-w-[1296px] px-4">
    <div
      class="flex min-h-[502px] rounded-[64px] bg-black bg-[url(/data/assets/images/letthe_mobile_bg.webp)] bg-cover bg-bottom bg-no-repeat max-lg:flex-col-reverse lg:bg-[url(/data/assets/images/letthe_bg.webp)]"
    >
      <div class="flex text-white max-lg:px-8 lg:flex-1 lg:items-center lg:justify-center">
        <div class="flex flex-col gap-10 max-lg:mb-[72px] max-lg:mt-10 max-lg:w-full">
          <div class="flex items-center gap-4">
            <GIcon name="star" class="text-[26px] text-green-600" />
            <GIcon name="star" class="text-[26px] text-green-600" />
            <GIcon name="star" class="text-[26px] text-green-600" />
          </div>

          <div>
            <div class="h3">
              {{ $t('let_the_ai') }}
              <span class="text-green-600">{{ $t('work') }}</span>
            </div>
            <div class="h3">
              <span class="text-green-600">{{ $t('models') }}</span>
              {{ $t('for_you') }}
            </div>
            <div class="h3">
              {{ $t('device') }}
            </div>
          </div>

          <Btn
            size="big"
            icon-prepend="icon_arrow_right_up"
            color="gradient-r"
            icon-prepend-class="text-xs"
            classes="uppercase gap-4 lg:w-fit"
            external
            to="/onboarding-app"
          >
            {{ $t('tryfree') }}
          </Btn>
        </div>
      </div>
      <div
        class="min-h-[276px] bg-cover bg-no-repeat max-lg:rounded-t-[64px] lg:flex-1 lg:rounded-r-[64px] lg:bg-[url(/data/assets/images/alltools.webp)]"
      >
        <img
          loading="lazy"
          src="/data/assets/images/1000.webp"
          class="w-full rounded-t-[64px] object-contain lg:hidden"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
