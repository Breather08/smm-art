<template>
  <article class="pa-4 text-center">
    <div class="pb-4">
      {{ feature.icon }}
    </div>
    <h5 class="pt-2 px-4">
      {{ feature.title }}
    </h5>
    <p class="px-4 py-2 text-body-1">
      {{ feature.description }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { Feature } from "./types";

defineProps<{ feature: Feature }>();
</script>

<style lang="scss"></style>
