<template>
  <div class="container mt-[173px]">
    <div class="header-h1 text-center">
      {{ $t('accomplish') }}
      <span class="text-gradient">
        {{ $t('any') }}
      </span>
      <br />
      <span class="text-gradient">
        {{ $t('task') }}
      </span>
      {{ $t('task_with_ai') }}
    </div>

    <div class="p-m mx-auto my-6 max-w-[696px] text-center">{{ $t('hyperspace_an') }}</div>

    <div class="flex justify-center gap-2 lg:gap-4">
      <Btn size="big" w-fit color="gradient-r" to="https://hyperspace.ai/onboarding">{{ $t('tryfree') }}</Btn>
      <Btn size="big" w-fit color="ghost" to="#hyper-loop">{{ $t('learn_more') }}</Btn>
    </div>

    <div class="mt-14 flex justify-center gap-3 lg:gap-12">
      <GIcon name="chatgpt" class="text-[32px]" />
      <GIcon name="gemini" class="text-[32px]" />
      <GIcon name="endless" class="text-[32px]" />
      <GIcon name="snow" class="text-[32px]" />
      <GIcon name="midjourney" class="text-[32px]" />

      <div class="p16e text-center">
        1000+
        <br />
        <span class="p14s">{{ $t('more_models') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
