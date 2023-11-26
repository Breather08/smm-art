<template>
  <section class="py-8">
    <h2 class="text-left">Создавайте<br />качественный контент</h2>
    <div>
      <LandingFeature v-for="feature in features" :key="feature.title" :feature="feature" />
    </div>
    <CommonButton rounded> Попробовать бесплатно </CommonButton>
  </section>
</template>

<script setup lang="ts">
import CommonButton from "@/components/ui/button/CommonButton.vue";
import LandingFeature from "./LandingFeature.vue";
import { features } from "./constants";
</script>

<style lang="scss"></style>
