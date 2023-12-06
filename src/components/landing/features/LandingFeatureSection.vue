<template>
  <section class="py-8 mt-8 bg-secondary-light">
    <h2 class="text-center pb-2">Создавайте качественный контент</h2>
    <div class="py-8 flex flex-col gap-6">
      <LandingFeature v-for="feature in features" :key="feature.title" :feature="feature" />
    </div>
    <CommonButton rounded> Попробовать бесплатно </CommonButton>
  </section>
</template>

<script setup lang="ts">
import CommonButton from "@/components/ui/button/UiButton.vue";
import LandingFeature from "./LandingFeature.vue";
import { features } from "./constants";
</script>

<style lang="scss"></style>
