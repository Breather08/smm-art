<template>
  <section class="text-left">
    <LandingPricingCurrency @change="onCurrencyChange"></LandingPricingCurrency>
    <div class="py-12" align-content="center">
      <div v-for="(pricing, period) in periodPricings" :key="period" cols="12" sm="4">
        <div
          rounded="xl"
          class="py-6 px-8"
          :class="{
            'mb-6': period !== 'week',
            'text-white bg-primary': pricing.isMostPopular,
          }"
        >
          <div color="info" width="max-content" class="text-uppercase px-4">Выгодно</div>
          <h4>{{ pricing.title }}</h4>
          <div class="my-4">
            <h4>
              {{ pricing.sum }}
              <span class="text-h5"> / {{ pricing.title.toLocaleLowerCase() }} </span>
            </h4>
          </div>
          <ul class="py-4">
            <li v-for="feature in pricing.features" :key="feature.description">
              {{ feature.isAvailable }}
              {{ feature.description }}
            </li>
          </ul>
          <CommonButton rounded class=""> Получить </CommonButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CommonButton from "@/components/ui/button/CommonButton.vue";
import LandingPricingCurrency from "./LandingPricingCurrency.vue";
import { Currency, Period, PeriodPricing } from "./constants";

const periodPricings: Record<Period, PeriodPricing> = {
  day: {
    title: "День",
    sum: 2000,
    features: [
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: false,
      },
    ],
  },
  month: {
    title: "Месяц",
    sum: 20000,
    isMostPopular: true,
    features: [
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: false,
      },
    ],
  },
  week: {
    title: "Неделя",
    sum: 10000,
    features: [
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: true,
      },
      {
        description: "Feature",
        isAvailable: false,
      },
    ],
  },
};

function onCurrencyChange(currency: Currency) {
  console.log(currency);
}
</script>

<style lang="scss" scoped>
section {
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
    }
  }
}
</style>
