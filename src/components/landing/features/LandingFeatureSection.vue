<template>
  <section>
    <h2 class="text-left">Создавайте<br />качественный контент</h2>
    <div>
      <div v-for="feature in features" :key="feature.title">
        <LandingFeature :feature="feature" />
      </div>
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
