<template>
  <section class="py-8 lg:pt-20 mt-8 bg-secondary-light w-screen overflow-hidden">
    <UiContainer>
      <h2 class="text-center pb-2">Создавайте качественный контент</h2>
      <div class="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LandingFeature v-for="feature in features" :key="feature.title" :feature="feature" />
      </div>
      <UiButton rounded> Попробовать бесплатно </UiButton>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import UiButton from "@/components/ui/button/UiButton.vue";
import LandingFeature from "./LandingFeature.vue";
import { features } from "./constants";
import UiContainer from "@/components/ui/container/UiContainer.vue";
</script>

<style lang="scss"></style>
