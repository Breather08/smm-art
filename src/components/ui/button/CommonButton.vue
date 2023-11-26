<template>
  <button
    v-bind="$attrs"
    :class="[
      `common-button common-button--${variant} py-2 px-8`,
      {
        'common-button--rounded': rounded,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { Variant } from "./types";

interface Props {
  rounded: boolean;
  variant?: Variant;
}

withDefaults(defineProps<Props>(), { variant: "primary" });
</script>

<style lang="scss">
.common-button {
  padding: 8px 32px;
  border: 0;
  outline: none;
  background: none;
  min-height: 56px;
  font-weight: 600;

  &--rounded {
    border-radius: 50px;
  }

  &--primary {
    color: white;
    background-color: theme("colors.primary");
  }

  &--secondary {
    color: #171740;
    background-color: #fafafa;
  }

  &--plain {
    background-color: transparent;
  }
}
</style>
