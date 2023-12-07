<template>
  <div class="relative">
    <label>
      <div class="text-left mb-1 text-main-grey">
        {{ label }} <span v-show="required" class="text-red-600">*</span>
      </div>
      <input
        v-bind="$attrs"
        class="bg-secondary rounded-lg border-none outline-none w-full py-5 px-4"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
  required?: boolean;
}

withDefaults(defineProps<IProps>(), {
  label: "asddsa",
  required: false,
});
</script>
