<template>
  <div class="relative flex justify-end">
    <button
      class="bg-white rounded-lg p-3 flex gap-2 items-center"
      @focusin="showMenu"
      @focusout.stop="hideMenu"
    >
      <current />
      <CommonIcon name="chevron-down"></CommonIcon>
    </button>
    <ul
      v-show="isActive"
      class="absolute top-full rounded-lg bg-white overflow-hidden p-3 flex flex-col gap-3"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import CommonMenuItem from "./CommonMenuItem.vue";
import { VNode, h, provide, ref, onMounted } from "vue";
import { menuInjectionKey } from "./constants";
import CommonIcon from "../icon/CommonIcon.vue";

interface IProps {
  modelValue: number;
}

const count = ref(0);
const isActive = ref(false);

defineProps<IProps>();
const emit = defineEmits<{ (name: "update:modelValue", index: number): void }>();

const current = ref(() => h("div", ""));

provide(menuInjectionKey, {
  count: count,
  incrementCount() {
    count.value++;
  },
  setActive(i: number, slot: VNode) {
    emit("update:modelValue", i);
    current.value = () => h("div", slot);
  },
});

onMounted(() => {});

function showMenu() {
  isActive.value = true;
}

function hideMenu() {
  setTimeout(() => {
    isActive.value = false;
  });
}
</script>

<style lang="scss"></style>
