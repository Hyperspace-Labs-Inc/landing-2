<template>
  <div class="mt-[112px] bg-black py-[72px] text-white lg:mt-[136px] lg:py-[145px]">
    <div class="container px-6 lg:px-[112px]">
      <div>
        <NuxtLink :to="localeRoute('/')">
          <GIcon name="icon_logo" class="h-[48px] text-white" is-pass-w-h />
        </NuxtLink>
      </div>

      <div class="mt-14 flex max-lg:flex-col max-lg:gap-14">
        <div class="flex flex-1 flex-col gap-2">
          <NuxtLink
            v-for="([domain], index) in domains"
            :key="index"
            :to="domain.to"
            class="u20b transition-all hover:opacity-70"
          >
            {{ domain.label }}
          </NuxtLink>
        </div>

        <div class="flex flex-1 flex-col gap-2">
          <NuxtLink
            v-for="(menuItem, index) in menu"
            :key="index"
            :to="menuItem.to"
            class="u20b transition-all hover:opacity-70"
          >
            {{ menuItem.title }}
          </NuxtLink>
        </div>

        <div class="flex flex-1 flex-col gap-9 lg:items-end">
          <NuxtLink :to="`mailto:${email}`" class="u20b transition-all hover:opacity-70">
            {{ email }}
          </NuxtLink>

          <div class="flex gap-8">
            <NuxtLink
              v-if="facebook"
              target="_blank"
              :to="facebook"
              class="transition-all hover:opacity-70"
            >
              <GIcon name="icon_facebook" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink
              v-if="tiktok"
              target="_blank"
              :to="tiktok"
              class="transition-all hover:opacity-70"
            >
              <GIcon name="icon_tiktok" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink
              v-if="instagram"
              target="_blank"
              :to="instagram"
              class="transition-all hover:opacity-70"
            >
              <GIcon name="icon_instagram" class="text-[32px]" />
            </NuxtLink>

            <NuxtLink
              v-if="blog"
              target="_blank"
              :to="blog"
              class="transition-all hover:opacity-70"
            >
              <GIcon name="icon_blog" class="h-6 w-12" is-pass-w-h />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-14 flex justify-between max-lg:flex-col-reverse max-lg:gap-10 lg:mt-10">
        <div class="p-s">{{ copyright }}</div>
        <div class="flex gap-6">
          <NuxtLink to="https://hyperspace.ai/terms" class="p-s transition-all hover:opacity-70">
            {{ $t('terms') }}
          </NuxtLink>
          <NuxtLink to="https://hyperspace.ai/policy" class="p-s transition-all hover:opacity-70">
            {{ $t('privacy') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const localeRoute = useLocaleRoute()

const { copyright, instagram, facebook, blog, email, tiktok } = useRuntimeConfig()?.public || {}

const domains = useState('domains', () => [])

const menu = useState('menu', () => [
  { title: t('ai_tools'), to: 'https://hyperspace.ai/ai-tools' },
  { title: t('blog'), to: 'https://hyperspace.ai/blog' },
  { title: t('faqtitle'), to: '#faq' },
  // { title: t('contact'), to: '/contact' },
])
</script>
