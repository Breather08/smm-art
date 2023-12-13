<template>
  <section class="bg-secondary-light md:bg-back-base pb-16 w-screen overflow-hidden pt-16">
    <UiContainer>
      <h2 class="mb-6 md:mb-11 lg:mb-24">О нас говорят</h2>
      <UiCarousel>
        <UiCarouselItem v-for="i in 5" :key="i" class="text-left">
          <div class="md:flex gap-9 lg:gap-24 relative items-start w-full">
            <div
              class="w-24 h-24 md:min-w-[200px] md:min-h-[200px] lg:min-w-[316px] lg:h-[316px] bg-secondary rounded-full mb-6"
            ></div>
            <div class="md:flex flex-col-reverse">
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
