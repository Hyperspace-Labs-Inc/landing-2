<template>
  <div class="container py-[72px] lg:mt-[120px] lg:py-[120px]">
    <div class="flex gap-6 max-lg:flex-col lg:gap-10 lg:px-[96px]">
      <div class="flex-1">
        <div class="h2">
          {{ $t('choose') }}
          <span class="text-gradient">{{ $t('your') }}?</span>
          <br />
          <span class="text-gradient">{{ $t('direction') }}?</span>
        </div>

        <div class="p-s mt-6">{{ $t('hyperspace_offers') }}</div>
      </div>

      <div class="flex min-w-0 flex-1 flex-col gap-2 lg:gap-4">
        <NuxtLink
          v-for="([domain], index) in domains"
          :key="index"
          :to="domain.to"
          class="domain-item"
          :class="{ hovered: hoveredIndex !== null && hoveredIndex !== index }"
          v-element-hover="
            isHover => {
              hoveredIndex = isHover ? index : null
            }
          "
        >
          <img
            :src="`/assets/images/choose/${domain.label?.toLowerCase?.()}.webp`"
            alt=""
            class="block h-[176px] w-full rounded-[40px] object-cover"
          />

          <GIcon name="icon_up" class="absolute right-6 top-6 text-[48px]" />
          <div class="absolute bottom-8 left-8 right-8 flex items-center justify-between">
            <div class="h5">{{ domain.title }}</div>

            <div class="flex items-center gap-4">
              <div v-if="domain.icons" class="flex items-center gap-4">
                <GIcon v-for="icon in domain.icons" :name="icon" class="text-[32px]" />
              </div>

              <div
                v-if="domain.text"
                class="font-unbounded text-xl leading-[140%] tracking-[0.4px]"
              >
                {{ domain.text }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vElementHover } from '@vueuse/components'

const domains = useState('domains', () => [])

const hoveredIndex = ref<number | null>(null)
</script>

<style scoped lang="scss">
.domain-item {
  @apply relative block min-h-[176px] rounded-[40px] bg-white text-white;

  img {
    @apply transition-all;
  }

  &.hovered {
    @apply text-black #{!important};

    img {
      @apply opacity-0;
    }
  }
}
</style>
