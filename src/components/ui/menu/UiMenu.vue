<template>
  <div class="relative flex justify-end">
    <button
      class="bg-white rounded-lg p-3 flex gap-2 items-center shadow"
      @focusin="showMenu"
      @focusout.stop="hideMenu"
    >
      <current />
      <UiIcon
        name="chevron-down"
        class="transition-transform"
        :style="{
          transform: `rotate(${isActive ? '180deg' : '0'})`,
        }"
      ></UiIcon>
    </button>
    <ul
      v-show="isActive"
      class="absolute top-full shadow-md rounded-lg bg-white overflow-hidden p-3 flex flex-col gap-3"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { VNode, h, provide, ref, onMounted } from "vue";
import { menuInjectionKey } from "./constants";
import UiIcon from "../icon/UiIcon.vue";

interface IProps {
  modelValue: number;
}

const count = ref(0);
const isActive = ref(false);

const props = defineProps<IProps>();
const emit = defineEmits<{ (name: "update:modelValue", index: number): void }>();

const current = ref(() => h("div", ""));

provide(menuInjectionKey, {
  initial: props.modelValue,
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
  }, 100);
}
</script>

<style lang="scss"></style>
