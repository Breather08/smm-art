<template>
  <div class="bg-secondary-light">
    <h2>О нас говорят</h2>
    <CommonCarousel>
      <CommonCarouselItem v-for="i in 5" :key="i">
        <div class="h-96">
          {{ i }}
          asdasdasdsadsad as dasdasdsadasd asd asdasdasd
        </div>
      </CommonCarouselItem>
    </CommonCarousel>
  </div>
</template>

<script setup lang="ts">
import CommonCarousel from "@/components/ui/carousel/CommonCarousel.vue";
import CommonCarouselItem from "@/components/ui/carousel/CommonCarouselItem.vue";
</script>
