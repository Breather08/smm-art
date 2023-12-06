<template>
  <section class="py-8">
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
        <CommonButton rounded class="mb-4"> Попробовать бесплатно </CommonButton>
        <CommonButton variant="secondary" rounded> Запись на демонстрацию </CommonButton>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center">
          <CommonIcon name="check" />
          <span class="ml-2">7 дней бесплатно</span>
        </div>
        <div class="flex items-center">
          <CommonIcon name="check" />
          <span class="ml-2">Можно без карты</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CommonButton from "@/components/ui/button/UiButton.vue.js";
import CommonIcon from "@/components/ui/icon/UiIcon.vue.js";
</script>

<style lang="scss"></style>
