<template>
  <div class="contact-form">
    <div class="absolute left-0 top-[-4px] z-0 h-full w-1/2 rounded-tl-xl border-t-4 border-blue" />

    <div class="relative z-10">
      <UInput
        v-model="country"
        style="outline: 0"
        :placeholder="$t('country')"
        :ui="{
          form: errors[0] ? '!shadow-[inset_0_-1px_0_0_#ED2079]' : undefined,
        }"
      />

      <UInput
        v-model="city"
        style="outline: 0"
        :placeholder="$t('city')"
        class="mt-6"
        :ui="{
          form: errors[1] ? '!shadow-[inset_0_-1px_0_0_#ED2079]' : undefined,
        }"
      />

      <UInput
        v-model="contact"
        style="outline: 0"
        :placeholder="$t('phone')"
        class="mt-6"
        :ui="{
          form: errors[1] ? '!shadow-[inset_0_-1px_0_0_#ED2079]' : undefined,
        }"
      />

      <Btn
        icon-prepend="icon_arrow_right"
        icon-prepend-class="text-white/40 text-2xl"
        :disabled="isLoading"
        :loading="isLoading"
        classes="ml-auto mt-10"
        @click="sendHandler"
      >
        {{ $t('next') }}
      </Btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { t } = useI18n()

const country = ref('')

const city = ref('')

const contact = ref('')

const desc = ref('')

const init = ref(false)

const errors = computed(() => {
  if (!init.value) {
    return []
  }

  const err = []

  const fields = [country.value, contact.value, city.value]

  fields.forEach((item, index) => {
    if (item.length < 3) {
      err[index] = true
    }
  })

  return err
})

const isLoading = ref(false)

const { errorToast, successToast } = useToasts()

const isShowForm = useState('isShowForm', () => false)

const clearForm = () => {
  city.value = ''

  contact.value = ''

  country.value = ''
}

const sendHandler = async () => {
  init.value = true

  if (errors.value.length) {
    errorToast(t('error'))

    return
  }

  isLoading.value = true

  try {
    const body = {
      personalizations: [
        {
          to: [
            {
              email: config.public.mailTo,
            },
          ],
        },
      ],
      from: {
        email: config.public.mailFrom,
        name: 'GetSki',
      },
      subject: config.public.mailSubject,
      content: [
        {
          type: 'text/html',
          value: `
<div>Страна: ${country.value}</div>
<div>Город: ${city.value}</div>
<div>Телефон: ${contact.value}</div>`,
        },
      ],
    }

    const { error } = await useFetch('/api/mail/send', {
      method: 'POST',
      body,
    })

    if (error.value) {
      throw error.value
    }

    clearForm()

    successToast(t('success'))
  } catch (err) {
    errorToast(err)
  } finally {
    isLoading.value = false

    init.value = false

    isShowForm.value = false
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  @apply relative mx-auto max-w-[780px] rounded-xl border-t-4 border-black-400 bg-white p-4 shadow-[0_5px_20px_0_rgba(0,0,0,0.05)] 
  lg:p-10;
}
</style>
