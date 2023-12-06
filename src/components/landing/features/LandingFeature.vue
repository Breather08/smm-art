<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="p-4 text-center">
    <div class="mb-4 bg-secondary inline-block p-5 rounded-full">
      <UiIcon :name="feature.icon"></UiIcon>
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
import UiIcon from "@/components/ui/icon/UiIcon.vue";
import type { Feature } from "./types";

defineProps<{ feature: Feature }>();
</script>

<style lang="scss"></style>
