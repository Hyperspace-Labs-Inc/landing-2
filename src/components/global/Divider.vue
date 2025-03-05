<template>
  <div
    class="self-stretch"
    :class="{
      'bg-black-950 relative w-[0.5px] flex-shrink-0': vertical,
      'h-[1px] bg-black-100': !vertical,
    }"
  />
</template>

<script setup lang="ts">
type Props = {
  vertical?: boolean
}

defineProps<Props>()
</script>
