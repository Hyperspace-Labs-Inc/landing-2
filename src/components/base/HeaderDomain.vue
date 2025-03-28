<template>
  <UDropdown
    v-model:open="isShowMenu"
    :items="domains"
    mode="click"
    :ui="{
      base: 'py-4',
      rounded: 'rounded-3xl',
      padding: 'p-0',
      divide: 'divide-y divide-black-100 dark:divide-black-100',
      item: {
        base: 'font-rounded group flex items-center gap-1.5 w-full',
        rounded: 'rounded-lg',
        padding: 'px-6 py-2',
        size: 'text-lg',
        active: 'bg-gray-100 dark:bg-gray-900 text-black dark:text-black',
        inactive: 'text-black dark:text-black',
        disabled: 'cursor-not-allowed opacity-50',
        icon: {
          base: 'flex-shrink-0 w-5 h-5',
          active: 'text-gray-500 dark:text-gray-400',
          inactive: 'text-gray-400 dark:text-gray-500',
        },
        avatar: {
          base: 'flex-shrink-0',
          size: '2xs',
        },
        label: 'truncate',
        shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
      },
    }"
  >
    <button class="flex items-center gap-2 text-lg font-medium" style="outline: 0">
      {{ domain }}
      <GIcon
        name="icon_down"
        class="text-xl transition-all"
        :class="{ 'rotate-180': isShowMenu }"
      />
    </button>
  </UDropdown>
</template>

<script setup lang="ts">
const { t } = useI18n()

const domain = ref(t('domains'))

const isShowMenu = ref(false)

const domains = useState('domains', () => [])

domains.value = [
  [
    {
      label: t('images'),
      to: { path: '/ai-image-generator', hash: '#catalog' },
      title: t('images'),
      icons: ['leo', 'mid'],
      text: '+8',
      external: true,
    },
  ],
  [
    {
      label: t('chatbots'),
      to: { path: '/chatbots-ai', hash: '#catalog' },
      title: t('chatbots'),
      icons: ['gemini', 'snow', 'meta'],
      text: '+1000',
      external: true,
    },
  ],
  [
    {
      label: t('text'),
      to: { path: '/ai-text-generator', hash: '#catalog' },
      title: t('text'),
      icons: ['file'],
      text: '200',

      external: true,
    },
  ],
  [
    {
      label: t('music'),
      to: { path: '/music-generation-ai', hash: '#catalog' },
      title: t('music'),
      icons: ['music'],
      text: '200',
      external: true,
    },
  ],
  [
    {
      label: t('voices'),
      to: { path: '/voice-generation-ai', hash: '#catalog' },
      title: t('voices'),
      icons: ['mic'],
      text: '48',
      external: true,
    },
  ],
]
</script>
