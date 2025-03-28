<template>
  <component
    :is="componentType"
    :class="computedClasses"
    :to="to"
    :target="target"
    :external="external"
    style="outline: 0"
    @click="clickHandler"
  >
    <GIcon
      v-if="icon"
      :name="icon"
      class="relative z-10 flex-shrink-0"
      :class="[iconClass, { 'opacity-0': loading }]"
    />

    <span v-if="!isIconOnly" :class="['relative z-10 block', slotClass, { 'opacity-0': loading }]">
      <slot />
    </span>

    <GIcon
      v-if="loading"
      name="loader"
      class="absolute left-1/2 top-1/2 z-10 flex-shrink-0 -translate-x-1/2 -translate-y-1/2 border-0 text-xl text-white no-underline shadow-none"
    />

    <GIcon
      v-if="iconPrepend"
      :name="iconPrepend"
      class="relative z-10 flex-shrink-0"
      :class="[iconPrependClass, { 'opacity-0': loading }]"
    />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

type Props = {
  icon?: string
  iconPrepend?: string
  iconPrependClass?: string | object | []
  iconClass?: string
  size?: 'small' | 'default' | 'big' | 'medium' | 'link'
  slotClass?: string
  color?:
    | 'gradient'
    | 'gradient-r'
    | 'ghost'
    | 'transparent'
    | 'white'
    | 'default'
    | 'green'
    | 'green-simple'
    | 'grey'
    | 'link'
  classes?: string | object | []
  to?: string
  target?: string
  wFit?: boolean
  disabled?: boolean
  external?: boolean
  loading?: boolean
  isIconOnly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  color: 'default',
  slotClass: 'flex-grow',
})

const sizesMap = {
  link: 'h-auto w-auto p-0 m-0',
  big: 'h-14',
  default: '',
  small: 'h-12',
  medium: 'rounded-full px-3 h-11 text-sm font-semibold tracking-[-0.24px]',
}

const colorsMap = {
  grey: 'bg-black-800 text-black-700',
  default: 'bg-black text-white hover:bg-[linear-gradient(77deg,#6910E0_22.37%,#B47CFF_100%)] ',
  ghost:
    'bg-transparent ring-2 ring-inset ring-black text-black hover:ring-purple hover:text-purple',
  transparent: ' ',
  gradient: 'bg-gradient-to-b hover:bg-gradient-to-t from-purple-600 to-purple text-white',
  'gradient-r':
    'bg-[linear-gradient(70deg,#6910E0_15%,#B47CFF_83%,#DFF671_121%)] hover:bg-[linear-gradient(81deg,#6910E0_-3.57%,#B47CFF_60.94%,#DFF671_97.22%)] text-white',
}

const emit = defineEmits(['click'])

const componentType = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'))

const computedClasses = computed(() => {
  const classes = [
    'hover:opacity-80 active:scale-105 transition-all whitespace-nowrap relative no-underline cursor-pointer appearance-none flex items-center gap-2 rounded-2xl text-center text-[17px] h-14 px-10 font-semibold',
  ]

  classes.push(props.disabled ? 'opacity-80 pointer-events-none' : '')

  classes.push(props.wFit ? 'w-fit' : 'w-full')

  classes.push(colorsMap[props.color] || colorsMap.default)

  classes.push(sizesMap[props.size] || sizesMap.default)

  if (props.classes) {
    classes.push(props.classes)
  }

  return twMerge(classes)
})

const clickHandler = event => {
  if (props.to?.startsWith('#')) {
    event.preventDefault()

    const el = document.querySelector(props.to)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    return
  }

  emit('click', event)
}
</script>
