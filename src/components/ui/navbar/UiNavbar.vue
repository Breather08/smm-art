<template>
  <header class="w-screen pt-7">
    <UiContainer class="flex justify-between items-start xl:items-center gap-4">
      <div class="w-28 h-16">
        <img class="w-full h-full" src="@/assets/logo/logo-smm-art.png" />
      </div>
      <nav class="grow hidden md:flex justify-between items-center gap-6 h-min">
        <div class="flex gap-4 justify-end xl:justify-center grow">
          <a v-for="link in links" :key="link.text" :href="link.url" class="h-min">{{
            link.text
          }}</a>
        </div>
      </nav>
      <div class="flex items-center hidden xl:block">
        <a class="font-medium" href="">Демо</a>
        <UiButton class="ml-10" rounded>Попробовать бесплатно</UiButton>
      </div>
      <button class="md:hidden" @click="showNav">
        <UiIcon name="burger" color="#171740" />
      </button>
    </UiContainer>
  </header>
  <UiNavigationDrawer></UiNavigationDrawer>
</template>

<script setup lang="ts">
import UiIcon from "../icon/UiIcon.vue";
import UiContainer from "@/components/ui/container/UiContainer.vue";
import UiNavigationDrawer from "../navigation-drawer/UiNavigationDrawer.vue";
import type { Link } from "./types";
import UiButton from "../button/UiButton.vue";

interface IProps {
  links: Link[];
}

defineProps<IProps>();

function showNav() {
  console.log("show drawer");
}
</script>
