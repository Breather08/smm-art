<template>
  <article
    class="w-full h-fit rounded-2xl relative overflow-hidden"
    :style="{
      paddingTop: '120%',
      backgroundColor: '#eeecf9',
    }"
  >
    <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center">
      <div class="h-full w-10/12 xs:w-full">
        <div
          class="h-full w-full bg-top bg-contain bg-no-repeat"
          :style="{
            opacity: isInfoExtended ? '0.3' : '1',
            backgroundImage: `url(${opportunity.img})`,
          }"
        ></div>
      </div>
      <div class="absolute bottom-0 text-left p-7 w-full">
        <h5
          :class="{
            'hidden sm:block': isInfoExtended,
          }"
        >
          {{ opportunity.title }}
        </h5>
        <div class="block sm:hidden md:block lg:hidden">
          <p v-if="!isInfoExtended" class="my-3">
            {{ opportunity.shortDescription }}
          </p>
          <p v-else class="mb-4 sm:text-lg">
            {{ opportunity.fullDescription }}
          </p>
          <button class="text-primary flex align-center" @click="toggleInfoExtend">
            <span class="mr-1 underline underline-offset-4"> Подробнее </span>
            <UiIcon
              :class="[
                'transition-transform',
                {
                  'rotate-180': isInfoExtended,
                },
              ]"
              name="chevron-down"
            ></UiIcon>
          </button>
        </div>
        <p class="text-xl hidden sm:block md:hidden lg:block text-main-grey mt-5">
          {{ opportunity.fullDescription }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import UiIcon from "@/components/ui/icon/UiIcon.vue";
import type { Opportunity } from "./types";
import { ref } from "vue";

defineProps<{ opportunity: Opportunity }>();

const isInfoExtended = ref(false);

function toggleInfoExtend() {
  isInfoExtended.value = !isInfoExtended.value;
}
</script>
