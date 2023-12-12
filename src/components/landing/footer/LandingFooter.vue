<template>
  <footer class="w-screen pt-16">
    <UiContainer class="flex flex-col md:flex-row justify-between items-start md:gap-4">
      <div class="w-28 h-28">
        <img class="w-full h-full" src="@/assets/logo/logo-smm-art-bg.png" />
      </div>
      <nav class="flex flex-col gap-2 text-lg text-left my-12 md:mt-0">
        <h6 class="font-bold">О нас</h6>
        <a href="">Тарифы</a>
        <a href="">Приложение</a>
        <a href="">Инструменты</a>
        <a href="">Контакты</a>
      </nav>
      <div class="font-bold text-lg flex flex-col text-left">
        <a href="" class="underline underline-offset-4 mb-10">Запись на демо</a>
        <span class="font-bold">Контакты</span>
        <div class="flex gap-6 -mt-3">
          <UiIcon name="contacts-temp" size="141" color="#606060" />
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-col items-start">
        <div class="flex flex-col items-start my-7 md:mt-0">
          <span class="text-2xl font-bold text-left">Скачайте прямо сейчас</span>
          <div class="flex gap-4 mt-7">
            <img src="@/assets/landing/img/app_store_link.png" />
            <img src="@/assets/landing/img/play_store_link.png" />
          </div>
        </div>
        <a href="" class="text-main-grey text-lg underline underline-offset-4">
          smm-art@support.kz
        </a>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup lang="ts">
import UiContainer from "@/components/ui/container/UiContainer.vue";
import UiIcon from "@/components/ui/icon/UiIcon.vue";
</script>
