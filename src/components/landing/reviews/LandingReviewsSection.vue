<template>
  <section class="bg-secondary-light pb-16 w-screen overflow-hidden">
    <UiContainer>
      <h2 class="mb-6">О нас говорят</h2>
      <UiCarousel>
        <UiCarouselItem v-for="i in 5" :key="i" class="text-left">
          <div class="w-24 h-24 bg-secondary rounded-full mb-6"></div>
          <h4 class="text-lg font-bold">Максат Атыбаев</h4>
          <sub class="text-base text-main-grey">СММ-специалист в Glovo</sub>
          <p class="mt-6 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </UiCarouselItem>
      </UiCarousel>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import UiCarousel from "@/components/ui/carousel/UiCarousel.vue";
import UiCarouselItem from "@/components/ui/carousel/UiCarouselItem.vue";
import UiContainer from "@/components/ui/container/UiContainer.vue";
</script>
