<template>
  <section class="bg-secondary-light pb-16 w-screen overflow-hidden">
    <UiContainer>
      <h2 class="mb-6 md:mb-11 lg:mb-24">О нас говорят</h2>
      <UiCarousel>
        <UiCarouselItem v-for="i in 5" :key="i" class="text-left">
          <div class="md:flex gap-9 lg:gap-24 relative items-start w-full">
            <div
              class="w-24 h-24 md:w-48 md:h-48 lg:w-80 lg:h-80 bg-secondary rounded-full mb-6 1 min-w-fit"
            ></div>
            <div class="md:flex flex-col-reverse md:w-2/3 lg:w-1/2 xl:w-2/3">
              <div>
                <h4 class="text-lg font-bold lg:text-2xl">Максат Атыбаев</h4>
                <sub class="text-base text-main-grey">СММ-специалист в Glovo</sub>
              </div>
              <p class="mt-6 md:mt-0 mb-12 lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
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
