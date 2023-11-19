<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Dropdown </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="currency in currencies"
        :key="currency"
        @click="selectCurrency(currency)"
      >
        <v-list-item-title>{{ currency }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { Currency, currencies } from "./constants";

const emit = defineEmits<{ (name: "change", currency: Currency): void }>();

function selectCurrency(currency: Currency) {
  emit("change", currency);
}
</script>
