<template>
  <UiContainer class="relative bg-primary w-screen xl:rounded-3xl xl:shadow-2xl">
    <section
      class="text-back-base text-left w-full overflow-hidden relative block z-30"
      :style="{
        minHeight: `${containerHeight}px`,
      }"
    >
      <div class="py-12 w-full md:w-1/2 z-50">
        <div class="w-full">
          <h2 class="mb-2 text-back-base break-words md:break-normal lg:text-5xl leading-tight">
            Автоматизируйте продвижение в соцсетях
          </h2>
          <sub class="text-base md:text-lg lg:text-xl">Получите 7 дней бесплатного доступа</sub>
          <div class="text-left md:text-center flex flex-col w-fit">
            <UiButton class="mt-10 mb-5" variant="secondary" rounded>
              Попробовать бесплатно
            </UiButton>
            <a href="" class="underline underline-offset-4 text-left md:text-center"
              >Записаться на демо урок</a
            >
          </div>
        </div>
      </div>
    </section>
    <div class="absolute w-full h-full top-0 right-0 block z-10">
      <div
        class="w-full h-full bg-bottom md:bg-right bg-contain bg-no-repeat"
        :style="{
          backgroundImage: `url(${bannerImg})`,
        }"
      ></div>
    </div>
  </UiContainer>
</template>

<script setup lang="ts">
import UiButton from "@/components/ui/button/UiButton.vue";
import UiContainer from "@/components/ui/container/UiContainer.vue";
import BannerMobile from "@/assets/landing/banner/landing_banner_mobile.png";
import BannerTablet from "@/assets/landing/banner/landing_banner_tablet.png";
import BannerDesktop from "@/assets/landing/banner/landing_banner_desktop.png";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig.theme.screens;
const containerHeight =
  window.innerWidth <= parseInt(screens["sm"])
    ? 750
    : window.innerWidth <= parseInt(screens["md"])
      ? 900
      : 434;

const bannerImg =
  window.innerWidth <= parseInt(screens["md"])
    ? BannerMobile
    : window.innerWidth <= parseInt(screens["lg"])
      ? BannerTablet
      : BannerDesktop;
</script>
