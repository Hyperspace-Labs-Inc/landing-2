<template>
  <div class="container mt-[96px]">
    <div class="flex max-lg:flex-col gap-8">
      <div class="flex flex-1 items-center justify-center">
        <div class="max-lg:text-center">
          <div class="h3" v-html="$t('real')" />

          <div class="p-m mt-4 lg:mt-6" v-html="$t('you_pay')" />

          <Btn classes="mt-10 max-lg:hidden" w-fit to="https://hyperspace.ai/onboarding">{{ $t('start') }}</Btn>
        </div>
      </div>

      <div class="flex-1">
        <div class="relative flex-grow overflow-hidden rounded-[40px]">
          <div
            class="pointer-events-none relative w-full select-none overflow-hidden rounded-[40px]"
          >
            <img
              src="/assets/images/savings/purple.svg"
              alt=""
              loading="lazy"
              class="image-sd w-full select-none rounded-[40px]"
            />

            <img
              ref="imageHDRef"
              src="/assets/images/savings/grey.svg"
              alt=""
              loading="lazy"
              class="image-hd z-10 w-full select-none rounded-[40px]"
            />
          </div>

          <div ref="sliderPitchRef" class="slider-pitch">
            <GIcon name="icon_pitch" class="slider-pitch--icon text-[54px]" />
          </div>

          <input ref="sliderRef" type="range" min="0" max="100" value="50" class="slider" />
        </div>

        <Btn classes="mt-10 mx-auto lg:hidden" w-fit to="https://hyperspace.ai/onboarding">{{ $t('start') }}</Btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sliderRef = useTemplateRef<HTMLDivElement>('sliderRef')

const imageHDRef = useTemplateRef<HTMLDivElement>('imageHDRef')

const sliderPitchRef = useTemplateRef<HTMLDivElement>('sliderPitchRef')

onMounted(() => {
  sliderRef.value?.addEventListener('input', function (ccc) {
    const value = sliderRef.value?.value

    imageHDRef.value.style.clipPath = `inset(0 ${100 - value}% 0 0)`

    sliderPitchRef.value.style.left = `${value}%`
  })
})
</script>

<style lang="scss" scoped>
.slider {
  @apply absolute bottom-0  left-1/2 top-0 z-20 m-0 h-full w-full -translate-x-1/2 appearance-none bg-transparent;

  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Отключаем стандартное оформление */
    appearance: none;
    width: 40px;
    /* Ширина бегунка */
    height: 40px;
    /* Высота бегунка */
    border-radius: 50%;
    /* Делаем бегунок круглым */
    cursor: pointer;
    /* Меняем курсор на pointer */
    position: relative;
    z-index: 50;
    opacity: 0;
    background: #fff
      url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_282_117)"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2929 11.9999L16 17.2928L17.4142 18.707L24.1213 11.9999L17.4142 5.29282L16 6.70703L21.2929 11.9999Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.70708 12L7.99997 6.70706L6.58576 5.29285L-0.121351 12L6.58576 18.7071L7.99997 17.2928L2.70708 12Z" fill="black"/></g><defs><clipPath id="clip0_282_117"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>')
      no-repeat center;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    /* Отключаем стандартное оформление */
    -moz-appearance: none;
    appearance: none;
  }
  &::-webkit-slider-runnable-track {
    background: transparent;
    border-radius: 5px;
  }
}

.slider-pitch {
  @apply absolute bottom-0 left-1/2 top-0 w-1  bg-gradient-to-b from-purple-600 to-purple;

  &::v-deep(.slider-pitch--icon) {
    @apply absolute top-1/2 z-10 block -translate-x-1/2 -translate-y-1/2  cursor-pointer;
  }
}

.image-hd {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.image-hd {
  clip-path: inset(0 50% 0 0);
}
</style>
