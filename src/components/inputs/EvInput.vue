<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  icon: { Object },
  iconPosition: { String },
  label: {
    type: String,
  },
});

//Define emits
const emit = defineEmits(["update:modelValue"]);

const emitInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  
    <div
      class="border w-full border-gray-300 group group-focus:border-primary focus:border-primary flex items-center justify-center relative"
    >
      <component
        class="w-5 h-5 absolute"
        :class="[iconPosition == 'right' ? 'right-2' : 'left-2']"
        :is="icon"
      ></component>
      <input
        id="input"
        @input="emitInput"
        :value="modelValue"
        v-bind="$attrs"
        :class="[icon && iconPosition=='left'? 'pl-8':'pr-8']"
        class="placeholder:text-[#BDBBC9] group-focus duration-700 placeholder:text-medium font-normal w-full px-2 py-[7px] bg-transparent border-none outline-none"
      />
    </div>
</template>
