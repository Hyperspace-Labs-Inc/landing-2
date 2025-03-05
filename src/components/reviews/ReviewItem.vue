<template>
  <NuxtLink
    class="mx-2 flex w-[90vw] flex-shrink-0 flex-col gap-6 rounded-[32px] bg-black-100 p-8 lg:w-[400px]"
    to="https://hyperspace.ai/onboarding"
  >
    <span class="flex gap-4">
      <img
        v-if="icon"
        :src="icon"
        alt=""
        class="h-14 w-14 flex-shrink-0 rounded-full object-cover"
      />
      <span class="block">
        <span class="u18b block">{{ name }}</span>
        <span class="r18s block text-purple">{{ title }}</span>
      </span>
    </span>

    <span class="p-m block">{{ text }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Review } from '@/composables/useReviews'

const props = defineProps<Review>()
</script>
