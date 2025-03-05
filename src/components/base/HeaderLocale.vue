<template>
  <UDropdown :items="selectLanguage" mode="click">
    <UButton
      size="lg"
      variant="ghost"
      color="gray"
      icon="custom:icon_locale"
      class="shadow-none"
      :label="localesMap[locale] || localesMap.en"
      :class="{ '!text-black': isStickied }"
      :ui="{
        base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0',
        size: {
          lg: 'text-lg',
        },
        gap: {
          lg: 'gap-x-2',
        },
        color: {
          gray: {
            ghost:
              'lg:px-2 px-0 !text-black-900 !text-sm transition-all bg-transparent ring-0 hover:ring-0 focus-visible:ring-0',
          },
        },
        icon: {
          base: 'flex-shrink-0 text-black-800 ',
          loading: 'animate-spin',
          size: {
            lg: 'h-6 w-6',
          },
        },
      }"
    />
  </UDropdown>
</template>

<script setup lang="ts">
const { locale, defaultLocale, locales } = useI18n()

const localesMap = {
  en: 'English',
  ru: 'Русский',
}

const selectedLng = computed(
  () => `>${locales.value?.find?.(({ code }) => code === locale.value)?.label}`
)

const isStickied = useState('isStickied', () => false)

const selectLanguage = computed(() =>
  locales.value?.map(lng => {
    return [
      {
        to: `/${lng.code === defaultLocale ? '' : lng.code}`,
        label: localesMap[lng.code] || localesMap.en,
        class: 'uppercase',
        click: () => {
          // if (typeof location !== 'undefined') {
          //   setTimeout(() => location.reload?.(), 100)
          // }
        },
      },
    ]
  })
)
</script>
