<template>
  <div
    class="rounded-md font-normal md:font-bold text-main inline px-4 py-2"
    :class="{
      'bg-accent': variant === 'primary',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Variant } from "./types";

interface IProps {
  variant?: Variant;
}

withDefaults(defineProps<IProps>(), {
  variant: "primary",
});
</script>
