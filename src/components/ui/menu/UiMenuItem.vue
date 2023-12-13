<template>
  <li class="bg-tertiary" @click="setActive(index, slots.default()[0])">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { useSlots, inject, onMounted, ref } from "vue";
import { menuInjectionKey } from "./constants";

const index = ref(0);

const slots = useSlots();
const { setActive, incrementCount, count, initial } = inject(menuInjectionKey);

onMounted(() => {
  index.value = count.value;
  incrementCount();
  if (initial === index.value) {
    setActive(index.value, slots.default()[0]);
  }
});
</script>
