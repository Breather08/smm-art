<template>
  <div class="flex flex-wrap gap-y-8">
    <article
      v-for="op in opportunities"
      :key="op.title"
      class="w-full h-full rounded-2xl relative overflow-hidden"
      :style="{
        height: '448px',
        maxWidth: '380px',
        backgroundColor: '#eeecf9',
      }"
    >
      <div
        class="w-full h-full bg-top bg-contain bg-no-repeat"
        :style="{
          backgroundImage: `url(${op.img})`,
        }"
      ></div>
      <div class="absolute bottom-0 text-left p-7" :style="{}">
        <h5>{{ op.title }}</h5>
        <p class="my-3">{{ op.shortDescription }}</p>
        <button class="text-primary flex align-center">
          <span class="mr-1 underline underline-offset-4"> Подробнее </span>
          <CommonIcon name="chevron-down"></CommonIcon>
        </button>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import CommonIcon from "@/components/ui/icon/CommonIcon.vue";
import { opportunities } from "./constants";
</script>
