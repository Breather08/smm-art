<template>
  <section class="flex flex-col gap-y-6 w-screen overflow-hidden">
    <UiContainer>
      <h2 class="mb-6 lg:mb-8">Мы помогаем бизнесу расти и оптимизировать бюджеты</h2>
      <div class="md:grid grid-cols-2 gap-8 lg:gap-24 auto-rows-min">
        <div class="flex flex-col gap-5 lg:gap-20 pb-5 lg:pb-0">
          <p class="text-left">
            По единой подписке вы получаете комплексный инструмент на базе ИИ, адаптирующийся к
            любой нише и выполняющий работу SMM-менеджера, дизайнера и копирайтера.
          </p>
          <LandingOpportunity v-for="op in filteredBy('left')" :key="op.key" :opportunity="op" />
        </div>
        <div class="flex flex-col gap-5 lg:gap-20">
          <LandingOpportunity v-for="op in filteredBy('right')" :key="op.key" :opportunity="op" />
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import UiContainer from "@/components/ui/container/UiContainer.vue";
import LandingOpportunity from "./LandingOpportunity.vue";
import { opportunities, leftSideKeys, rightSideKeys } from "./constants";

function filteredBy(side: "left" | "right") {
  return opportunities.filter((op) =>
    side === "left" ? leftSideKeys.includes(op.key) : rightSideKeys.includes(op.key)
  );
}
</script>
