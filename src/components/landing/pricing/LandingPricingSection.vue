<template>
  <section class="text-left">
    <LandingPricingCurrency @change="onCurrencyChange"></LandingPricingCurrency>
    <v-row class="py-12 px-4" align-content="center">
      <v-col
        v-for="(pricing, period) in periodPricings"
        :key="period"
        cols="12"
        sm="4"
      >
        <v-card
          rounded="xl"
          class="py-6 px-8"
          :class="{
            'mb-6': period !== 'week',
            'text-white bg-primary': pricing.isMostPopular,
          }"
        >
          <v-card color="info" width="max-content" class="text-uppercase px-4">
            Выгодно
          </v-card>
          <h4>{{ pricing.title }}</h4>
          <div class="my-4">
            <h4>
              {{ pricing.sum }}
              <span class="text-h5">
                / {{ pricing.title.toLocaleLowerCase() }}
              </span>
            </h4>
          </div>
          <ul class="py-4">
            <li v-for="feature in pricing.features">
              {{ feature.isAvailable }}
              {{ feature.description }}
            </li>
          </ul>
          <v-btn
            rounded="lg"
            height="56"
            color="secondary-darken-1"
            elevation="0"
            width="100%"
            class="text-button font-weight-bold text-none"
          >
            Получить
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
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
