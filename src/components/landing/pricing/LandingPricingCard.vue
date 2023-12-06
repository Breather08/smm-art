<template>
  <article
    class="p-6 shadow rounded-lg text-left w-full"
    :class="{
      'bg-primary text-white': data.isMostPopular,
      'bg-white': !data.isMostPopular,
    }"
  >
    <div class="flex justify-between">
      <h3 class="text-3xl font-bold">{{ data.title }}</h3>
      <CommonBadge v-if="data.isMostPopular">ВЫГОДНО</CommonBadge>
    </div>
    <div class="flex flex-start my-8">
      <em class="text-4xl font-bold mr-1">{{ data.sum }} </em>
    </div>
    <div class="py-4 mb-4 flex flex-col gap-4">
      <div v-for="(pricing, i) in data.features" :key="i" class="flex items-center gap-2">
        <CommonIcon
          :color="data.isMostPopular ? 'white' : '#171740'"
          :name="pricing.isAvailable ? 'check' : 'close'"
        />
        <p>
          {{ pricing.description }}
        </p>
      </div>
    </div>
    <CommonButton full variant="secondary"> Получить </CommonButton>
  </article>
</template>

<script setup lang="ts">
import type { PeriodPricing } from "./types";
import CommonIcon from "@/components/ui/icon/UiIcon.vue";
import CommonButton from "@/components/ui/button/UiButton.vue";
import CommonBadge from "@/components/ui/badge/UiBadge.vue";

defineProps<{ data: PeriodPricing }>();
</script>
