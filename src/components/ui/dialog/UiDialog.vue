<template>
  <UiFadeTransition>
    <div
      v-show="modelValue"
      class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-red-600 z-40"
      @click="hideDialog"
    >
      <button @click="test">asdsadad</button>
      <slot></slot>
    </div>
  </UiFadeTransition>
</template>

<script setup lang="ts">
import UiFadeTransition from "@/components/ui/transition/UiFadeTransition.vue";

const emit = defineEmits<{ (name: "update:modelValue", value: boolean): void }>();
defineProps<{ modelValue: boolean }>();

function hideDialog() {
  console.log("hide dialog");
  emit("update:modelValue", false);
}

function test() {
  console.log("Test click");
}
</script>

<style></style>
