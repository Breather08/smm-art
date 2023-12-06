<template>
  <section class="py-8 w-screen overflow-hidden">
    <UiContainer>
      <div class="flex flex-col gap-y-6">
        <h1>
          Создавайте контент для соцсетей в
          <em class="text-primary whitespace-nowrap">smm-art</em>
        </h1>
        <!-- TODO: Scale -->
        <p class="text-left">
          Новая AI-платформа, которая генерирует тексты и изображения по Вашему запросу в один клик
        </p>
        <div>
          <UiButton rounded class="mb-4"> Попробовать бесплатно </UiButton>
          <UiButton variant="secondary" rounded> Запись на демонстрацию </UiButton>
        </div>
        <div class="flex justify-between">
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
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import UiButton from "@/components/ui/button/UiButton.vue";
import UiContainer from "@/components/ui/container/UiContainer.vue";
import UiIcon from "@/components/ui/icon/UiIcon.vue";
</script>

<style lang="scss"></style>
