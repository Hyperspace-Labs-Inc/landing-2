<template>
  <div class="catalog-card">
    <img :src="cardImage" alt="" class="catalog-card--img" />

    <div class="flex-grow"></div>

    <div v-if="cardTitle" class="catalog-card--title">
      {{ cardTitle }}
    </div>

    <div class="catalog-card--desc" v-html="cardDescription" />

    <CatalogCardFooter v-bind="props" />
  </div>
</template>

<script setup lang="ts">
import type { ModelMokup } from '@/composables/useCatalog'

import CatalogCardFooter from '~/components/catalog/CatalogCardFooter.vue'

const props = defineProps<ModelMokup>()

const cardDescription = computed(() => props.text)

const cardTitle = computed(() => props.title)

const cardImage = computed(() => props.image)
</script>

<style lang="scss">
.catalog-card {
  @apply relative flex min-h-[234px] w-[220px] flex-shrink-0 flex-grow-0 cursor-pointer flex-col
  rounded-[20px] bg-black-100 px-4 py-2.5 transition hover:scale-[103%];

  &--img {
    @apply m-2 h-[84px] w-[84px] rounded-full object-cover;
  }

  &--title {
    @apply text-xl font-semibold leading-6 tracking-[0.18px] text-black-700;
  }

  &--desc {
    @apply mt-1 text-sm  text-black-700;
  }
}
</style>
