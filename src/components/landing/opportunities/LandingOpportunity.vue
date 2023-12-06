<template>
  <article
    class="w-full h-full rounded-2xl relative overflow-hidden"
    :style="{
      paddingTop: '120%',
      backgroundColor: '#eeecf9',
    }"
  >
    <div class="absolute top-0 left-0 bottom-0 right-0">
      <div
        class="w-full h-full bg-top bg-contain bg-no-repeat"
        :style="{
          backgroundImage: `url(${opportunity.img})`,
        }"
      ></div>
      <div class="absolute bottom-0 text-left p-7" :style="{}">
        <h5>{{ opportunity.title }}</h5>
        <div class="lg:hidden">
          <p class="my-3">{{ opportunity.shortDescription }}</p>
          <button class="text-primary flex align-center">
            <span class="mr-1 underline underline-offset-4"> Подробнее </span>
            <UiIcon name="chevron-down"></UiIcon>
          </button>
        </div>
        <p class="hidden lg:block text-main-grey mt-5">
          {{ opportunity.fullDescription }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import UiIcon from "@/components/ui/icon/UiIcon.vue";
import type { Opportunity } from "./types";

defineProps<{ opportunity: Opportunity }>();
</script>
