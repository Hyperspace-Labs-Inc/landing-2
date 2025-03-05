<script setup lang="ts">
import { sub, format } from 'date-fns'

import ru  from 'date-fns/locale/ru/index.js'

const { locale } = useI18n()

const emit = defineEmits(['update:model-value'])

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })

const options = computed(() => {
  if (locale.value === 'ru') {
    return { awareOfUnicodeTokens: true, locale: ru }
  }
})

watch(selected, () => {
  emit(
    'update:model-value',
    `${format(selected.value?.start, 'd MMMM yyy', options.value)} - ${format(selected.value?.end, 'd MMMM yyy', options.value)}`
  )
})
</script>

<template>
  <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
    <UButton
      icon="i-heroicons-calendar-days-20-solid"
      trailing
      class="w-full"
      :ui="{
        inline: 'inline-flex items-center justify-between',
      }"
    >
      {{ format(selected.start, 'd MMMM yyy', options) }} -
      {{ format(selected.end, 'd MMMM yyy', options) }}
    </UButton>

    <template #panel="{ close }">
      <div class="flex items-center divide-gray-200 sm:divide-x dark:divide-gray-800">
        <DatePicker v-model="selected" @close="close" />
      </div>
    </template>
  </UPopover>
</template>
