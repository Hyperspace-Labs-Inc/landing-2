<template>
  <div
    class="relative flex flex-grow items-center justify-center gap-10 max-lg:flex-col max-lg:items-start max-lg:rounded max-lg:shadow-xl"
  >
    <HeaderDomain />

    <ClientOnly>
      <NuxtLink to="/store" class="t18m">{{ $t('mobile_app') }}</NuxtLink>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import HeaderDomain from '~/components/base/HeaderDomain.vue'
</script>
