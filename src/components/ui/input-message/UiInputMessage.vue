<template>
  <div class="relative">
    <svg
      class="absolute -top-1 -left-3"
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 23.5L0 0L30.5 8.5L17 23.5Z" fill="#FF1C6D" />
    </svg>
    <div class="text-white text-xs inline-block py-2 rounded-lg px-4 bg-accent-red">
      <slot></slot>
    </div>
  </div>
</template>
