<template>
  <div class="overflow-x-hidden">
    <NuxtLoadingIndicator />

    <Header />

    <div class="relative">
      <NuxtPage />
    </div>

    <Footer />

    <UNotifications />

    <ContactModal v-if="isShowForm" />
  </div>
</template>

<script setup lang="ts">
import ContactModal from '@/components/modals/ContactModal.vue'

import Header from '@/components/base/Header.vue'

import Footer from '@/components/base/Footer.vue'

const isShowForm = useState('isShowForm', () => false)
</script>
