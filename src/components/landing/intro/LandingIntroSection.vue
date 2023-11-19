<template>
  <section>
    <VRow>
      <VCol>
        <h1>
          Создавайте контент для соцсетей в
          <em class="text-primary text-none font-style-none">smm-art</em>
        </h1>
        <!-- TODO: Scale -->
        <p class="text-body-1 text-left my-6 my-md-8">
          Новая AI-платформа, которая генерирует тексты и изображения по Вашему
          запросу в один клик
        </p>
        <VRow no-gutters>
          <VCol cols="12" lg="6" class="mb-4">
            <VBtn
              rounded
              height="56"
              color="primary"
              elevation="0"
              class="text-button font-weight-bold text-none"
            >
              Попробовать бесплатно
            </VBtn>
          </VCol>
          <VCol cols="12" lg="6">
            <VBtn
              rounded
              height="56"
              color="transparent"
              elevation="0"
              class="text-button font-weight-bold text-none"
            >
              Запись на демонстрацию
            </VBtn>
          </VCol>
        </VRow>
        <VRow no-gutters>
          <VCol cols="6">
            <VChip variant="text">
              7 дней бесплатно
              <template #prepend>
                <VIcon icon="mdi-check"></VIcon>
              </template>
            </VChip>
          </VCol>
          <VCol cols="6">
            <VChip variant="text">
              Можно без карты
              <template #prepend>
                <VIcon icon="mdi-check"></VIcon>
              </template>
            </VChip>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" sm="6">
        <VCard
          min-height="257"
          height="100%"
          color="#eee"
          elevation="0"
        ></VCard>
      </VCol>
    </VRow>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
