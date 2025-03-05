<template>
  <Suspense>
    <nuxt-icon
      :name="name"
      class="app-icon"
      :class="iconClass"
      spin
      :filled="filled"
      aria-hidden="true"
      :style="style"
      @click="emit('click')"
    />

    <template #fallback>
      <span class="app-icon nuxt-icon" :class="iconClass">
        <!--  -->
      </span>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
type IconProps = {
  name: string
  filled?: boolean
  spin?: string
  class?: string
  mode?: string
  size?: string
  customize?: string
  ariaHidden?: string
  reset?: boolean
  isPassWH?: boolean
  style?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  filled: true,
  reset: true,
  isPassWH: false,
  spin: '',
  class: '',
  style: '',
})

const emit = defineEmits(['click'])

const spinClass = computed(() => {
  if (props.spin) {
    return 'preloader'
  }

  return props.name === 'preloader' ? 'preloader' : undefined
})

const iconClass = computed(() => {
  return [
    `app-icon--${props.name}`,
    spinClass.value,
    props.class,
    { 'app-icon--reset': props.reset, 'app-icon--pass-w-h': props.isPassWH },
  ]
})
</script>

<style lang="scss">
.nuxt-icon svg {
  // width: unset;
  // height: unset;
  // margin-bottom: unset;
  // vertical-align: unset;
}

.app-icon--pass-w-h {
  &.nuxt-icon {
    svg {
      width: inherit;
      height: inherit;
    }
  }
}

.app-icon--reset {
  &.nuxt-icon {
    line-height: 0 !important;

    svg {
      margin-bottom: unset;
      vertical-align: unset;
    }
  }
}
</style>
