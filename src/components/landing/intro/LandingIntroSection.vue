<template>
  <section class="py-8 lg:py-20 w-screen overflow-hidden">
    <UiContainer>
      <div class="flex gap-6 flex-col md:flex-row">
        <div class="flex flex-col gap-y-6 lg:gap-y-8">
          <h1>
            Создавайте контент для соцсетей в
            <em class="text-primary whitespace-nowrap">smm-art</em>
          </h1>
          <p class="text-left text-2xl">
            Новая AI-платформа, которая генерирует тексты и изображения по Вашему запросу в один
            клик
          </p>
          <div class="flex justify-between flex-col xl:flex-row gap-4">
            <UiButton rounded> Попробовать бесплатно </UiButton>
            <UiButton variant="secondary" rounded> Запись на демонстрацию </UiButton>
          </div>
          <div class="flex justify-between lg:justify-start lg:gap-12">
            <div class="flex items-center">
              <UiIcon name="check" />
              <span class="ml-2">7 дней бесплатно</span>
            </div>
            <div class="flex items-center">
              <UiIcon name="check" />
              <span class="ml-2">Можно без карты</span>
            </div>
          </div>
        </div>
        <div class="relative grow w-full h-64 md:h-96">
          <div class="h-full bg-main-grey rounded-lg"></div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import UiButton from "@/components/ui/button/UiButton.vue";
import UiContainer from "@/components/ui/container/UiContainer.vue";
import UiIcon from "@/components/ui/icon/UiIcon.vue";
</script>

<style lang="scss"></style>
