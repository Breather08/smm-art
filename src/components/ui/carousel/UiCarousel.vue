<template>
  <div class="relative w-full">
    <div
      ref="carouselRef"
      class="relative overflow-hidden"
      :style="{
        maxWidth: `${screenWidth}px`,
      }"
    >
      <div
        class="relative w-full"
        :style="{
          transition: 'margin-left 250ms',
          width: `${screenWidth * count}px`,
          marginLeft: position + 'px',
        }"
      >
        <slot></slot>
      </div>
    </div>
    <div class="flex gap-7 justify-center">
      <button class="bg-secondary rounded-full relative w-12 h-12" @click="prevPage">
        <UiIcon
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          name="chevron-left"
          color="#5555FF"
        />
      </button>
      <button class="bg-secondary rounded-full relative w-12 h-12" @click="nextPage">
        <UiIcon
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          name="chevron-right"
          color="#5555FF"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import UiIcon from "../icon/UiIcon.vue";
import { carouselInjectionKey } from "./constants";

const carouselRef = ref<HTMLElement | null>(null);
const screenWidth = ref(window.innerWidth);
const position = ref(0);
const count = ref(0);
let currenI = 0;

provide(carouselInjectionKey, {
  width: screenWidth,
  incrementCount() {
    count.value++;
  },
});

onMounted(() => {
  if (!carouselRef.value) return;
  screenWidth.value = carouselRef.value.getBoundingClientRect().width;
});

function nextPage() {
  if (currenI === count.value - 1) return;
  currenI++;
  position.value -= screenWidth.value;
}

function prevPage() {
  if (currenI === 0) return;
  currenI--;
  position.value += screenWidth.value;
}
</script>
