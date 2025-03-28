<template>
  <div class="min-h-[100vh]">
    <TopPart />

    <WhatIsHyperSpace />

    <WhyChooseHyperSpace />

    <Reviews />

    <ChooseYourDirection />

    <ThreeSteps />

    <FAQ />

    <SaveBig />

    <LetTheAi />
  </div>
</template>

<script setup lang="ts">
import TopPart from '~/components/front/TopPart.vue'

import WhatIsHyperSpace from '~/components/front/WhatIsHyperSpace.vue'

const WhyChooseHyperSpace = defineAsyncComponent(
  () => import('~/components/front/WhyChooseHyperSpace.vue')
)

const Reviews = defineAsyncComponent(() => import('~/components/front/Reviews.vue'))

const ChooseYourDirection = defineAsyncComponent(
  () => import('~/components/front/ChooseYourDirection.vue')
)

const ThreeSteps = defineAsyncComponent(() => import('~/components/front/ThreeSteps.vue'))

const FAQ = defineAsyncComponent(() => import('~/components/front/FAQ.vue'))

const SaveBig = defineAsyncComponent(() => import('~/components/front/SaveBig.vue'))

const LetTheAi = defineAsyncComponent(() => import('~/components/front/LetTheAi.vue'))
</script>
