<template>
  <form class="relative text-left py-12 px-16" @submit.prevent="onSubmit">
    <h2 class="text-primary">Регистрация на демо</h2>
    <p class="text-lg mt-2 mb-6">
      Заполните форму ниже и наша служба поддержки свяжется с вами, проведет демонстрацию и ответит
      на все вопросы.
    </p>
    <div class="grid grid-cols-2 gap-y-6 gap-x-7">
      <div v-for="(_, key) in formValues" :key="key" class="relative">
        <UiInput
          v-model="formValues[key].model"
          :label="formValues[key].label"
          :required="formValues[key].required"
          :type="formValues[key].type"
        />
        <div class="absolute -bottom-8 left-8 z-10">
          <UiInputMessage v-if="formValues[key].message">
            {{ formValues[key].message }}
          </UiInputMessage>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-7 items-center gap-12">
      <UiCheckbox
        v-model="isTermsAccepted"
        label="Нажимая кнопку «Записаться», я даю свое согласие на обработку моих персональных данных*"
      />
      <UiButton rounded class="w-64" type="submit"> Submit message </UiButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import UiCheckbox from "../ui/checkbox/UiCheckbox.vue";
import UiInput from "../ui/input/UiInput.vue";
import type { InputData } from "./types";
import UiButton from "../ui/button/UiButton.vue";
import UiInputMessage from "../ui/input-message/UiInputMessage.vue";

const isTermsAccepted = ref(false);
const formValues = reactive<Record<string, InputData>>({
  firstName: {
    label: "Имя",
    model: "",
    required: true,
    type: "text",
    message: "",
  },
  lastName: {
    label: "Фамилия",
    model: "",
    required: true,
    type: "text",
    message: "",
  },
  phoneNumber: {
    label: "Телефон",
    model: "",
    required: true,
    type: "tel",
    message: "",
  },
  telegram: {
    label: "Телеграм",
    model: "",
    required: true,
    type: "text",
    message: "",
  },
  companyName: {
    label: "Название компании",
    model: "",
    type: "text",
    message: "",
  },
  jobTitle: {
    label: "Должность",
    model: "",
    type: "text",
    message: "",
  },
  email: {
    label: "Почта",
    model: "",
    type: "email",
    message: "",
  },
});

function onSubmit(e) {
  console.log(e);
}
</script>
