<template>
  <Transition name="slide">
    <nav v-show="modelValue" class="fixed w-screen h-screen bg-white top-0 z-50">
      <UiIcon name="close" :size="32" color="black" @click="hideDrawer" />
      <slot></slot>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import UiIcon from "../icon/UiIcon.vue";

interface IProps {
  modelValue: boolean;
}

defineProps<IProps>();
const emit = defineEmits<{ (name: "update:modelValue", value: boolean): void }>();

function hideDrawer() {
  emit("update:modelValue", false);
}
</script>

<style>
.slide-enter-from,
.slide-leave-to {
  transform: translate(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translate(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease-out;
}
</style>
