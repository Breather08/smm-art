<template>
  <i
    class="ds-icon"
    :class="color"
    :style="{
      maskImage: `url(${iconSrc})`,
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
    }"
  ></i>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  name: string;
  color?: string;
  size?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  color: "#5555FF",
  size: 24,
});

const iconSrc = computed(() => `/icons/i-${props.name}.svg`);
</script>

<style lang="scss">
.ds-icon {
  display: flex;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 100%;
  mask-size: 100%;
}
</style>
