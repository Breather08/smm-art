<template>
  <section>
    <CommonMenu v-model="currencyModel">
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_kz.png" />
          </div>
          <span class="flex items-center">KZT</span>
        </div>
      </CommonMenuItem>
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_us.png" />
          </div>
          <span class="flex items-center">USD</span>
        </div>
      </CommonMenuItem>
      <CommonMenuItem>
        <div class="flex gap-2">
          <div class="w-8 h-8 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/flags/currency_flag_ru.png" />
          </div>
          <span class="flex items-center">RUB</span>
        </div>
      </CommonMenuItem>
    </CommonMenu>
  </section>
</template>

<script setup lang="ts">
import CommonMenu from "@/components/ui/menu/CommonMenu.vue";
import CommonMenuItem from "@/components/ui/menu/CommonMenuItem.vue";
import { ref } from "vue";

const currencyModel = ref(0);
</script>
