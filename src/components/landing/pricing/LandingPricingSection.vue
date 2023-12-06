<template>
  <section class="bg-secondary-light">
    <h2 class="mb-6">Попробуйте 7 дней бесплатно</h2>
    <p class="text-left text-main-grey">
      У Вас есть возможность опробовать функциональный инструмент для ведения соцсетей
    </p>
    <CommonMenu v-model="currencyModel">
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_kz.png" />
          </div>
          <span class="flex items-center">KZT</span>
        </div>
      </CommonMenuItem>
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_us.png" />
          </div>
          <span class="flex items-center">USD</span>
        </div>
      </CommonMenuItem>
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_ru.png" />
          </div>
          <span class="flex items-center">RUB</span>
        </div>
      </CommonMenuItem>
    </CommonMenu>
    <div class="py-12 flex flex-wrap gap-6">
      <LandingPricingCard v-for="pricing in periodPricings" :key="pricing.title" :data="pricing" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CommonMenu from "@/components/ui/menu/UiMenu.vue";
import CommonMenuItem from "@/components/ui/menu/UiMenuItem.vue";
// import CommonButton from "@/components/ui/button/CommonButton.vue"
import type { PeriodPricing } from "./types";
import LandingPricingCard from "./LandingPricingCard.vue";

const periodPricings: PeriodPricing[] = [
  {
    title: "День",
    sum: "2 000 тг",
    period: "day",
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
  {
    title: "Месяц",
    sum: "20 000 тг",
    period: "month",
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
  {
    title: "Неделя",
    sum: "10 000 тг",
    period: "week",
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
];
const currencyModel = ref(0);
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
