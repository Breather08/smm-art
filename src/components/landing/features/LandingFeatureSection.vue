<template>
  <section>
    <h2 class="text-left">Создавайте<br />качественный контент</h2>
    <VRow>
      <VCol
        v-for="feature in features"
        :key="feature.title"
        cols="12"
        sm="6"
        md="3"
      >
        <LandingFeature :feature="feature" />
      </VCol>
    </VRow>
    <VBtn
      rounded
      height="56"
      color="primary"
      elevation="0"
      class="text-button font-weight-bold text-none"
    >
      Попробовать бесплатно
    </VBtn>
  </section>
</template>

<script setup lang="ts">
import LandingFeature from "./LandingFeature.vue";
import { features } from "./constants.js";
</script>

<style lang="scss"></style>
