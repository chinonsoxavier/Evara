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

const data = ["nigeria","usa","uk"]
</script>
<template>
  
    <div
      class="border w-full border-gray-300 group group-focus:border-primary focus:border-primary flex items-center justify-center relative"
    >
    
     <select name="" id="" class="w-full h-full bg-transparent p-2" >
        <option v-for="(data,index) in data" :key="index" :value="data">{{ data }}</option>
     </select>
    </div>
</template>
