<template>
  <main>
    <LandingIntro class="px-4 md:px-10 lg:px-30"></LandingIntro>
    <LandingClients class="px-4 md:px-10 lg:px-30"></LandingClients>
    <LandingOpportunities class="px-4 md:px-10 lg:px-30"></LandingOpportunities>
    <LandingFeature class="px-4 md:px-10 lg:px-30"></LandingFeature>
    <LandingPricing class="px-4 md:px-10 lg:px-30"></LandingPricing>
    <LandingReviews class="px-4 md:px-10 lg:px-30"></LandingReviews>
  </main>
</template>

<script setup lang="ts">
import LandingClients from "./components/landing/clients/LandingClients.vue";
import LandingFeature from "./components/landing/features/LandingFeatureSection.vue";
import LandingIntro from "./components/landing/intro/LandingIntroSection.vue";
import LandingOpportunities from "./components/landing/opportunities/LandingOpportunities.vue";
import LandingPricing from "./components/landing/pricing/LandingPricingSection.vue";
import LandingReviews from "./components/landing/reviews/LandingReviewsSection.vue";
</script>

<style lang="scss"></style>
