<script setup>
import { defineProps,defineEmits } from "vue";
 defineProps({
  theme: {
    type: String,
    // default: "primary",
   },
   border: {
    type:String
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
   img: {
    type:String
   },
   textColor: {
    type:String
  }
});

defineEmits([
  'emitTextButtonClick'
]);
</script>

<template>
  <button style="position: relative;" v-bind="$attrs" @click="$emit('emitTextButtonClick')"
    class="py-[7px] px-5 relative text-center flex items-center justify-center gap-2 whitespace-nowrap text-sm b rounded"
    :class="[
      disabled && 'bg-[#313133]' ,
         `bg-${theme} bg-[${theme}] fill-white duration-500 before:absolute before:w-full before:h-full before:rounded before:duration-500 before:z-0 before:hover:bg-[rgba(0,0,0,0.2)] before:inset-0`
    ]"
  >
  <img v-if="img" :src="img" class="m max-w-[18px]" alt="button image">
  <component :is="icon" class="w-[18px] fill-current h-[18px]"></component>
    <span class="relative z-10 " >
      {{ text }}
    </span>
  </button>
</template>
