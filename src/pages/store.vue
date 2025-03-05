<template>
  <div></div>
</template>

<script setup>
const { store, google } = useRuntimeConfig()?.public || {}

const isAndroid = computed(() => /android/i.test(navigator?.userAgent))

onMounted(() => {
  if (isAndroid.value) {
    document.location.href = google
  } else {
    document.location.href = store
  }
})
</script>
