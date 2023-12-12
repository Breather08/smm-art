<template>
  <Transition name="fade">
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 0;
}
</style>
