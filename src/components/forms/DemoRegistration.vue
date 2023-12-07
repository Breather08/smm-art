<template>
  <div class="relative text-left py-12 px-16">
    <h2 class="text-primary">Регистрация на демо</h2>
    <p class="text-lg mt-2 mb-6">
      Заполните форму ниже и наша служба поддержки свяжется с вами, проведет демонстрацию и ответит
      на все вопросы.
    </p>
    <div class="grid grid-cols-2 gap-y-6 gap-x-7">
      <UiInput
        v-for="(_, key) in formValues"
        :key="key"
        v-model="formValues[key].model"
        :label="formValues[key].label"
        :required="formValues[key].required"
        :type="formValues[key].type"
      />
    </div>
    <div class="flex justify-between mt-7 items-center gap-12">
      <UiCheckbox
        v-model="isTermsAccepted"
        label="Нажимая кнопку «Записаться», я даю свое согласие на обработку моих персональных данных*"
      />
      <UiButton rounded class="w-64"> Submit message </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import UiCheckbox from "../ui/checkbox/UiCheckbox.vue";
import UiInput from "../ui/input/UiInput.vue";
import type { InputData } from "./types";
import UiButton from "../ui/button/UiButton.vue";

const isTermsAccepted = ref(false);
const formValues = reactive<Record<string, InputData>>({
  firstName: {
    label: "Имя",
    model: "",
    required: true,
    type: "text",
  },
  lastName: {
    label: "Фамилия",
    model: "",
    required: true,
    type: "text",
  },
  phoneNumber: {
    label: "Телефон",
    model: "",
    required: true,
    type: "tel",
  },
  telegram: {
    label: "Телеграм",
    model: "",
    required: true,
    type: "text",
  },
  companyName: {
    label: "Название компании",
    model: "",
    type: "text",
  },
  jobTitle: {
    label: "Должность",
    model: "",
    type: "text",
  },
  email: {
    label: "Почта",
    model: "",
    type: "email",
  },
});
</script>
