<template>
  <div
    class="carousel-item inline-block"
    :style="{
      width: `${width}px`,
    }"
  >
    {{ width }}
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { carouselInjectionKey } from "./constants";

const { width, incrementCount } = inject(carouselInjectionKey, {
  width: ref(window.innerWidth),
  incrementCount() {},
});

onMounted(() => {
  incrementCount();
});
</script>
