<template>
  <UModal
    v-model="isShowForm"
    :ui="{
      wrapper: 'relative z-50',
      inner: 'fixed inset-0 overflow-y-auto',
      container: 'flex min-h-full items-center justify-center text-center',
      padding: 'p-4 sm:p-0',
      margin: 'sm:my-8',
      base: 'relative text-left rtl:text-right flex flex-col',
      overlay: {
        base: 'fixed inset-0 transition-opacity',
        background: 'bg-black/75 dark:bg-gray-800/75',
        transition: {
          enter: 'ease-out duration-300',
          enterFrom: 'opacity-0',
          enterTo: 'opacity-100',
          leave: 'ease-in duration-200',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
        },
      },
      background: 'bg-transparent dark:bg-transparent',
      ring: '',
      rounded: 'rounded-none',
      shadow: 'shadow-xl',
      width: 'w-full sm:max-w-lg',
      height: '',
      fullscreen: 'w-screen h-screen',
      transition: {
        enter: 'ease-out duration-300',
        enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        enterTo: 'opacity-100 translate-y-0 sm:scale-100',
        leave: 'ease-in duration-200',
        leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
        leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
      },
    }"
  >
    <div class="relative">
      <button @click="isShowForm = false" class="absolute right-4 top-4 z-30 text-black">X</button>

      <ContactForm />
    </div>
  </UModal>
</template>

<script setup lang="ts">
import ContactForm from '~/components/forms/ContactForm.vue'

const isShowForm = useState('isShowForm', () => false)

const btnTextIndex = useState('btnTextIndex', () => 0)

onBeforeUnmount(() => {
  btnTextIndex.value = 0
})
</script>
