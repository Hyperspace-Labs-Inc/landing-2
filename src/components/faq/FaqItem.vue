<template>
  <div>
    <div class="flex gap-4 pb-10">
      <GIcon name="faq_item" is-pass-w-h class="h-[34px] w-[22px] flex-shrink-0" />

      <div>
        <div class="h4 lg:h5">{{ question }}</div>
        <div class="p-s lg:p-m mt-2">{{ answer }}</div>
      </div>
    </div>
    <div class="h-[1px] bg-black-900" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ question: string; answer: string }>()
</script>
