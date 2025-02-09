<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
// import SearchIcon from "../icons/line-icons/SearchIcon.vue";
import ColumnStartComponent from "../ColumnStartComponent.vue";
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
const emit = defineEmits(["update:modelValue","iconClick"]);

const emitInput = (event) => {
  emit("update:modelValue", event.target.value);
};


const emitIconClick = () => {
  emit("iconClick");
}


</script>
<template>
  <ColumnStartComponent class="gap-">
    <label
      for="input"
      class="text-sm font-semibold text-lightText"
      v-if="label"
      >{{ label }}</label
    >
    <div
      class="border w-full border-[#cbd5e1] group group-focus:border-primary focus:border-primary flex items-center justify-center relative"
    >
    <div v-on:click="emitIconClick" >
      <component 
      class="w-5 h-5 absolute"
      :class="[iconPosition == 'right' ? 'right-2' : 'left-2']"
      :is="icon"
      ></component>
    </div>
      <!-- <SearchIcon v-if="icon" class="absolute right-2 w-5 h-5" /> -->
      <!-- {{ icon }} -->
      <input
        id="input"
        @input="emitInput"
        :value="modelValue"
        v-bind="$attrs"
        :class="[icon && 'pl-4 pr-8']"
        class="placeholder:text-[#BDBBC9] group-focus duration-700 text-lightText placeholder:text-semibold font-normal w-full px-2 py-[7px] bg-transparent border-none outline-none"
      />
    </div>

  </ColumnStartComponent>
  
</template>
