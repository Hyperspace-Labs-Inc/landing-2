<template>
  <div class="">
    <div
      class="u26m flex items-center justify-between pl-[19px] pr-[43px] text-black-700 lg:pl-[38px]"
    >
      {{ categoriesMap[selectedType].title }}

      <GIcon name="star" class="text-[32px] text-green-600" />
    </div>
    <div class="p12r mt-[10px] max-w-[366px] pl-[19px] lg:pl-[38px]">
      {{ categoriesMap[selectedType].desc }}
    </div>

    <div
      class="no-scroll ml-[19px] mt-4 flex min-w-0 gap-1 overflow-x-auto overflow-y-hidden lg:ml-[38px] lg:mt-[22px]"
    >
      <Btn
        v-for="type in selectedCategories"
        size="medium"
        color="grey"
        :class="{ '!bg-green': selectedCategory === type.id }"
        @click="selectedCategory = type.id"
      >
        <span class="flex flex-shrink-0 items-center gap-2">
          <span :class="{ 'text-gradient': selectedCategory === type.id }">{{ type.title }}</span>
        </span>
      </Btn>
    </div>

    <div
      ref="scrollContainerRef"
      class="no-scroll flex min-w-0 gap-4 overflow-x-auto overflow-y-hidden rounded-b-[20px] pl-[19px] pt-4 lg:pl-[38px] lg:pt-6"
      @scroll="onScrollHandler"
    >
      <CatalogCard v-for="(model, index) in catalogByType" :key="index" v-bind="model" />
    </div>

    <div v-if="pageCount > 1" class="mt-[30px] flex gap-2 pl-[19px] lg:pl-[38px]">
      <button
        v-for="(i, index) in pageCount"
        :key="index"
        style="outline: 0"
        class="bg-black-1200 flex h-2.5 w-2.5 items-center justify-center rounded-full transition-all"
        :class="{ 'w-[38px] !bg-black': page === index }"
        @click="goToPage(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { catalogByType, selectedCategory, selectedType, categoriesMap, selectedCategories } =
  useCatalog()

const scrollContainerRef = ref<HTMLElement | null>(null)

const page = ref(0)

const pageCount = ref(1)

const isUserScrolling = ref(false) // Флаг, чтобы различать ручной и программный скролл

const updatePageCount = () => {
  if (!scrollContainerRef.value) return

  const { clientWidth, scrollWidth } = scrollContainerRef.value
  pageCount.value = Math.ceil(scrollWidth / clientWidth)
}

const goToPage = (pageIndex: number) => {
  if (!scrollContainerRef.value) return

  isUserScrolling.value = true // Отключаем обновление page от скролла

  scrollContainerRef.value.scrollTo({
    left: scrollContainerRef.value.clientWidth * pageIndex,
    behavior: 'smooth',
  })

  setTimeout(() => {
    page.value = pageIndex
    isUserScrolling.value = false // Включаем обратно после завершения скролла
  }, 500) // Задержка, чтобы дать анимации скролла завершиться
}

const onScrollHandler = () => {
  if (!scrollContainerRef.value || isUserScrolling.value) return

  const { scrollLeft, clientWidth } = scrollContainerRef.value
  page.value = Math.round(scrollLeft / clientWidth)
}

onMounted(() => {
  updatePageCount()
  window.addEventListener('resize', updatePageCount)

  if (scrollContainerRef.value) {
    scrollContainerRef.value.addEventListener('scroll', onScrollHandler)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePageCount)

  if (scrollContainerRef.value) {
    scrollContainerRef.value.removeEventListener('scroll', onScrollHandler)
  }
})

watch(() => catalogByType, updatePageCount, { deep: true })
</script>
