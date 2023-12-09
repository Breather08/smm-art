<template>
  <label
    class="checkbox block relative select-none pl-9 text-sm text-main-grey text-left cursor-pointer"
    style="min-height: 25px"
  >
    {{ label }}
    <input v-model="checkboxModel" type="checkbox" class="w-0 h-0" />
    <span
      class="absolute top-1/2 -translate-y-1/2 left-0 h-6 w-6 rounded border border-primary checkmark mr-3"
    >
      <UiIcon class="checkbox-icon -mt-px -ml-px" name="check" color="#55f" :size="23" />
    </span>
  </label>
</template>

<script setup lang="ts">
import UiIcon from "@/components/ui/icon/UiIcon.vue";
import { computed } from "vue";

interface IProps {
  label: string;
  modelValue: boolean;
}

const props = defineProps<IProps>();
const emit = defineEmits<{ (name: "update:modelValue", value: boolean): void }>();
const checkboxModel = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
</script>

<style lang="scss">
.checkbox-icon {
  display: none;
}

.checkbox input:checked ~ .checkmark > .checkbox-icon {
  display: block;
}
</style>
