<template>
  <VApp>
    <LandingIntro></LandingIntro>
    <LandingPricing></LandingPricing>
    <LandingFeature></LandingFeature>
  </VApp>
</template>

<script setup lang="ts">
import LandingPricing from "./components/landing/pricing/LandingPricingSection.vue";
import LandingFeature from "./components/landing/features/LandingFeatureSection.vue";
import LandingIntro from "./components/landing/intro/LandingIntrosection.vue";
</script>

<style lang="scss"></style>
