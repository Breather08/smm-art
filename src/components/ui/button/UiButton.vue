<template>
  <button
    v-bind="$attrs"
    :class="[
      `py-2 px-8 h-14 text-main font-bold text-lg`,
      {
        'bg-primary text-white': variant === 'primary',
        'bg-back-base': variant === 'secondary',
        'bg-transparent': variant === 'plain',
        'rounded-full': rounded,
        'rounded-lg': !rounded,
        'w-full': full,
        'rounded-50': icon,
      },
    ]"
    @click="$emit('click')"
  >
    <UiIcon v-if="icon" :name="icon" />
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import UiIcon from "../icon/UiIcon.vue";
import type { Variant } from "./types";

interface Props {
  rounded?: boolean;
  variant?: Variant;
  full?: boolean;
  icon?: string;
}

defineEmits<{ (name: "click"): void }>();
withDefaults(defineProps<Props>(), { variant: "primary", rounded: false, full: false, icon: "" });
</script>
