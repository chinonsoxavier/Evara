<script setup>
import { defineProps,defineEmits } from "vue";
 defineProps({
  theme: {
    type: String,
    // default: "primary",
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
  }
});

defineEmits([
  'emitTextButtonClick'
]);
</script>

<template>
  <button v-bind="$attrs" @click="$emit('emitTextButtonClick')"
    class="py-[7px] border text-center border-transparent flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold px-4 relative rounded"
    :class="[
      disabled && 'bg-[#313133]' ,
         `bg-primary fill-white  text-white duration-500 before:absolute before:w-full before:h-full before:rounded before:duration-500 before:z-0 before:hover:bg-[rgba(0,0,0,0.2)]`
    ]"
  >
  <img v-if="img" :src="img" class="m max-w-[18px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ]" alt="button image">
    <component :is="icon" class="w-[18px] fill-current h-[18px]"></component>
    <span class="relative z-10" >
      {{ text }}
    </span>
  </button>
</template>
