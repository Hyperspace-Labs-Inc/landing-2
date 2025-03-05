<template>
  <div class="min-h-[100vh]">
    <TopPart />

    <ClientOnly>
      <HyperLoop />
    </ClientOnly>

    <WhatIsHyperSpace />

    <WhyChooseHyperSpace />

    <RealSavings  />

    <EnchanceYourEfficiency />

    <Reviews />

    <ChooseYourDirection />

    <ThreeSteps />

    <HyperSpaceInYourPocket />

    <FAQ />

    <SaveBig />

    <LetTheAi />
  </div>
</template>

<script setup lang="ts">
import TopPart from '~/components/front/TopPart.vue'

import HyperLoop from '~/components/front/HyperLoop.vue'

import WhatIsHyperSpace from '~/components/front/WhatIsHyperSpace.vue'

import WhyChooseHyperSpace from '~/components/front/WhyChooseHyperSpace.vue'

import RealSavings from '~/components/front/RealSavings.vue'

import EnchanceYourEfficiency from '~/components/front/EnchanceYourEfficiency.vue'
import Reviews from '~/components/front/Reviews.vue'
import ChooseYourDirection from '~/components/front/ChooseYourDirection.vue'
import ThreeSteps from '~/components/front/ThreeSteps.vue'
import HyperSpaceInYourPocket from '~/components/front/HyperSpaceInYourPocket.vue'
import FAQ from '~/components/front/FAQ.vue'
import SaveBig from '~/components/front/SaveBig.vue'
import LetTheAi from '~/components/front/LetTheAi.vue'
</script>
