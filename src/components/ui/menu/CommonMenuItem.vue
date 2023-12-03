<template>
  <li class="bg-tertiary" @click="setActive(index, slots.default()[0])">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { useSlots, inject, onMounted, ref } from "vue";
import { menuInjectionKey } from "./constants";

interface IProps {}

const index = ref(0);

defineProps<IProps>();
const slots = useSlots();
const { setActive, incrementCount, count } = inject(menuInjectionKey);

onMounted(() => {
  console.log("on mounted");
  index.value = count.value;
  incrementCount();
});
</script>
