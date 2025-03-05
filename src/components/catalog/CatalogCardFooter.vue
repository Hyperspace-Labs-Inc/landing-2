<template>
  <div class="flex items-center justify-between gap-3">
    <div v-if="cardViews" class="flex items-center gap-1 text-xs tracking-[-0.24px] text-black/50">
      <GIcon name="icon_count" class="text-xl text-black/50" />
      {{ cardViews }}
    </div>

    <button @click="toggleFavorite" style="outline: 0">
      <GIcon :name="isInFavorite ? 'icon_fav_fill' : 'icon_fav'" class="text-[32px]" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ModelMokup } from '@/composables/useCatalog'

import { computed } from 'vue'

import { useStorage } from '@vueuse/core'

const props = defineProps<ModelMokup>()

const cardViews = computed(() => props.count?.toLocaleString?.('ru-RU'))

const favorites = useStorage('onboardingFavorites', [])

const isInFavorite = computed(() => favorites.value?.includes?.(props.id))

const toggleFavorite = async () => {
  try {
    toggleElementInArray(favorites, props.id)

    isInFavorite.value = !isInFavorite.value
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<style scoped></style>
