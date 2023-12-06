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
      <UiBadge v-if="data.isMostPopular">ВЫГОДНО</UiBadge>
    </div>
    <div class="flex flex-start my-8">
      <em class="text-4xl font-bold mr-1">{{ data.sum }} </em>
    </div>
    <div class="py-4 mb-4 flex flex-col gap-4">
      <div v-for="(pricing, i) in data.features" :key="i" class="flex items-center gap-2">
        <UiIcon
          :color="data.isMostPopular ? 'white' : '#171740'"
          :name="pricing.isAvailable ? 'check' : 'close'"
        />
        <p>
          {{ pricing.description }}
        </p>
      </div>
    </div>
    <UiButton full variant="secondary"> Получить </UiButton>
  </article>
</template>

<script setup lang="ts">
import type { PeriodPricing } from "./types";
import UiIcon from "@/components/ui/icon/UiIcon.vue";
import UiButton from "@/components/ui/button/UiButton.vue";
import UiBadge from "@/components/ui/badge/UiBadge.vue";

defineProps<{ data: PeriodPricing }>();
</script>
