<script setup>
import { defineProps,defineEmits } from "vue";
 defineProps({
  active: {
    type: Boolean,
  },
  text: {
    type: String,
    default: "Shop Now",
  },
  icon: {
    type: Object,
  },
  disabled: {
    type:Boolean
  },
   modelValue: {
    type: String,
    default: "",
  },
});

defineEmits([
  'emitTextButtonClick'
]);

// console.log(defi);
</script>

<template>
  <button v-bind="$attrs" @click="$emit('emitTextButtonClick')"
    class="py-[7px] border text-center border-transparent flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold px-4 relative rounded"
    :class="[
      disabled && 'bg-[#313133]' ,
      active ?'bg-primary text-white':'bg-button-primary text-darkText',
         `duration-500 before:absolute before:w-full before:h-full before:rounded before:duration-500 before:z-0 before:hover:bg-[rgba(255,255,255,0.2)]`
        // : 'bg-transparent text-primary border-primary border duration-500 hover:text-white hover:border-white hover:bg-primary ',
    ]"
  >
    <component :is="icon" class="w-[18px] fill-current h-[18px]"></component>
    <span class="relative z-10" >
      {{ text }}
    </span>
  </button>
</template>
