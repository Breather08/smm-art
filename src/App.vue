<template>
  <main class="px-4 md:px-10 lg:px-30">
    <LandingIntro></LandingIntro>
    <LandingClients></LandingClients>
    <LandingOpportunities></LandingOpportunities>
    <LandingFeature></LandingFeature>
  </main>
</template>

<script setup lang="ts">
import LandingClients from "./components/landing/clients/LandingClients.vue";
import LandingFeature from "./components/landing/features/LandingFeatureSection.vue";
import LandingIntro from "./components/landing/intro/LandingIntroSection.vue";
import LandingOpportunities from "./components/landing/opportunities/LandingOpportunities.vue";
</script>

<style lang="scss"></style>
