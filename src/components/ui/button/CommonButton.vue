<template>
  <button
    v-bind="$attrs"
    :class="[
      `common-button--${variant}`,
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
  variant: Variant;
}

defineProps<Props>();
</script>

<style lang="scss">
.common-button {
  padding: 8px 32px;
  border: 0;
  background: none;
  height: 56px;

  &--rounded {
    border-radius: 56px;
  }

  &--primary {
    background-color: theme("colors.primary");
  }

  &--secondary {
  }

  &--plain {
    background-color: transparent;
  }
}
</style>
