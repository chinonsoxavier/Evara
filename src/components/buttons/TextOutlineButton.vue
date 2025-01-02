<script setup>
import { defineProps } from "vue";
const props = defineProps({
  theme: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    default: "Shop Now",
  },
  icon: {
    type: Object,
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    v-bind="$attrs"
    class="py-[7px] border border-transparent flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold px-4 rounded"
    :class="[
      props.disabled && 'bg-[#313133]',
      `fill-${theme} hover:fill-${theme} font-Heebo text-${theme} duration-500 hover:bg-${theme}`,
    ]"
  >
    <component :is="icon" class="w-[18px] fill-current h-[18px]"></component>

    <span>
      {{ props.text }}
    </span>
  </button>
</template>
