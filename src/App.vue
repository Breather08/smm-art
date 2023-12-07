<template>
  <UiNavbar :links="links"></UiNavbar>
  <div>
    <DemoRegistration></DemoRegistration>
  </div>
  <main>
    <LandingIntro></LandingIntro>
    <LandingClients></LandingClients>
    <LandingOpportunities></LandingOpportunities>
    <LandingFeature></LandingFeature>
    <LandingPricing></LandingPricing>
    <LandingReviews></LandingReviews>
  </main>
</template>

<script setup lang="ts">
import DemoRegistration from "./components/forms/DemoRegistration.vue";
import LandingClients from "./components/landing/clients/LandingClients.vue";
import LandingFeature from "./components/landing/features/LandingFeatureSection.vue";
import LandingIntro from "./components/landing/intro/LandingIntroSection.vue";
import LandingOpportunities from "./components/landing/opportunities/LandingOpportunities.vue";
import LandingPricing from "./components/landing/pricing/LandingPricingSection.vue";
import LandingReviews from "./components/landing/reviews/LandingReviewsSection.vue";
import UiInput from "./components/ui/input/UiInput.vue";
import UiNavbar from "./components/ui/navbar/UiNavbar.vue";
import type { Link } from "@/components/ui/navbar/types";

const links: Link[] = [
  {
    text: "О нас",
    url: "",
  },
  {
    text: "Тарифы",
    url: "",
  },
  {
    text: "Приложение",
    url: "",
  },
  {
    text: "Инструменты",
    url: "",
  },
  {
    text: "Контакты",
    url: "",
  },
];
</script>

<style lang="scss"></style>
