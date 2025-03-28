<template>
  <div class="container py-[72px] lg:py-[120px]">
    <div class="">
      <div class="h2 text-center">
        {{ $t('save_big') }}
        <span class="text-gradient">{{ $t('all_in_one') }}</span>
        {{ $t('access') }}!
      </div>

      <div class="u17b mt-6 flex items-center justify-center gap-4 lg:hidden">
        <UToggle
          v-model="selected"
          size="xl"
          :ui="{
            base: 'items-center !flex',
            size: {
              xl: 'h-7 w-12',
            },
            active: 'bg-purple-700',
            container: {
              active: {
                xl: 'translate-x-[22px]',
              },
              inactive: 'translate-x-1 rtl:-translate-x-1',
              size: {
                xl: 'h-[22px] w-[22px]',
              },
            },
          }"
        />

        {{ $t('hyperspace') }}
      </div>

      <div
        class="transition-all"
        :class="{ 'save-big--bg-mobile': selected, 'save-big--bg-unselectmobile': !selected }"
      >
        <img
          v-if="selected"
          loading="lazy"
          src="/data/assets/images/hs.webp"
          alt=""
          class="w-[81px] object-contain"
        />

        <div class="mt-6 flex flex-col gap-4">
          <div v-if="!selected" class="text-purple">
            <div class="font-rounded text-xl font-light tracking-[0.4px]">{{ $t('Buying') }}</div>
            <div class="font-unbounded text-[19px] font-bold leading-[140%] tracking-[0.38px]">
              {{ $t('separate_ai') }}
            </div>
          </div>
          <div class="mt-2 flex justify-between">
            <div class="p-m">
              <template v-if="selected">{{ $t('cost_title') }}</template>
              <template v-else>{{ $t('cost') }}</template>
            </div>
            <div class="h4">
              <template v-if="selected">$19.99</template>
              <template v-else>$20 {{ $t('each') }}</template>
            </div>
          </div>

          <Divider class="bg-black-1100" :class="{ '!bg-black-1300': !selected }" />

          <div class="flex justify-between">
            <div class="p-m">{{ $t('models_included') }}</div>
            <div class="h4">
              <template v-if="selected">1 000 +</template>
              <template v-else>1</template>
            </div>
          </div>

          <Divider class="bg-black-1100" :class="{ '!bg-black-1300': !selected }" />

          <div class="u14b mb-4 flex flex-col items-end text-right">
            <template v-if="selected">
              <div class="h3 text-gradient">$19.99</div>
              {{ $t('for_all') }}
            </template>
            <template v-else>
              <div class="h3 text-purple">$200+</div>
              {{ $t('for') }} 10 {{ $t('models') }}
            </template>
          </div>
        </div>
        <img
          src="/data/assets/images/arrow_down_mobile.svg"
          alt=""
          class="absolute left-3/4 top-full mt-[-2px]"
        />
      </div>

      <div class="lg:px-[96px] web-big-body mt-[73px] w-full max-lg:hidden">
        <div class="grid grid-cols-[auto_336px_24px_336px]">
          <div></div>
          <div class="p-m block rounded-t-[32px] bg-black-950 px-9 pt-9 lg:max-w-[336px]">
            buying
            <br />
            <strong class="u19b">{{ $t('separate') }}</strong>
          </div>
          <div class="w-6 flex-shrink-0">&nbsp;</div>
          <div
            class="h5 relative flex h-full items-center justify-center rounded-t-[32px] border-l-[5px] border-r-[5px] border-t-[5px] border-purple border-b-black-1000/20 bg-white p-11 text-center lg:max-w-[336px]"
          >
            <img
              loading="lazy"
              src="/data/assets/images/hs.webp"
              alt=""
              class="absolute left-1/2 top-0 z-10 mt-[-23px] w-[114px] -translate-x-1/2 object-contain"
            />
          </div>
          <div class="u18b flex items-center border-b border-black-1000/20 py-3">
            {{ $t('cost') }}
          </div>
          <div class="border-b border-black-1000/20 bg-black-950 p-9 lg:max-w-[336px]">
            $20 {{ $t('each') }}
          </div>
          <div class="w-6 flex-shrink-0 border-b border-b-black-1000/20">&nbsp;</div>
          <div
            class="h5 relative flex h-full items-center justify-center border-b border-l-[5px] border-r-[5px] border-purple border-b-black-1000/20 bg-white px-4 pb-8 pt-10 text-center lg:max-w-[336px]"
          >
            $19.99
          </div>
          <div class="u18b flex items-center border-b border-black-1000/20 py-3">
            Models included
          </div>
          <div class="p-m border-b border-black-1000/20 bg-black-950 p-9 lg:max-w-[336px]">1</div>
          <div class="w-6 flex-shrink-0 border-b border-b-black-1000/20">&nbsp;</div>
          <div
            class="h5 flex items-center justify-center border-b border-l-[5px] border-r-[5px] border-purple border-b-black-1000/20 bg-white p-9 lg:max-w-[336px]"
          >
            1 000+
          </div>
          <div class="u18b flex items-center py-3">Total Monthly Cost</div>
          <div class="p-m rounded-b-[32px] bg-black-950 p-9 lg:max-w-[336px]">
            $200+ for 10 models
          </div>
          <div class="w-6 flex-shrink-0">&nbsp;</div>
          <div class="save-big--bg r20b lg:max-w-[336px]">
            <strong class="h4 text-purple">$19.99</strong>

            for all

            <img src="/data/assets/images/arrow_down.svg" alt="" class="absolute top-full" />
          </div>
        </div>
      </div>

      <div class="h5 mt-16 text-center lg:mt-[83px]">
        <span class="text-gradient">{{ $t('save_over') }}</span>
        {{ $t('month') }}
      </div>

      <Btn classes="lg:w-fit lg:mx-auto mt-6" external to="/onboarding-app">
        {{ $t('start_free') }}
      </Btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref(true)
</script>

<style lang="scss" scoped>
.save-big {
  &--bg {
    @apply relative flex flex-col items-center justify-center
    rounded-b-[32px] border-b-[5px] border-l-[5px] border-r-[5px]
    border-purple bg-white px-20 py-3
    before:absolute before:-bottom-4 before:left-4
    before:z-[-1] before:h-[400px] before:w-full
    before:bg-[url(/data/assets/images/big.webp)] before:bg-[length:100%_100%]
    before:bg-bottom before:bg-no-repeat before:content-[''];

    &-mobile {
      @apply relative mt-8 rounded-[32px] bg-white p-6 ring-[3px]  ring-inset ring-purple
      before:absolute before:-bottom-4 before:left-0 before:z-[-1]
      before:h-[200px] before:w-full before:bg-[url(/data/assets/images/big.webp)]
      before:bg-[100%_auto] before:bg-bottom
      before:bg-no-repeat before:content-[''] lg:hidden;
    }

    &-unselectmobile {
      @apply relative mt-8 rounded-[32px] bg-black-950 p-6 ring-[3px] ring-inset ring-black-950  lg:hidden;
    }
  }
}
</style>
