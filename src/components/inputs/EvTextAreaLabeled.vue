<script setup >
import { defineProps, defineEmits } from "vue";

defineProps({
    label: {
        type: String
    },
    modelValue: {
        type:String
    }
});

const emit = defineEmits(["update:modelValue"]);

const emitInput = (event) => {
    emit("update:modelValue", event.target.value);
};
</script>

<template>
      <ColumnStartComponent class="gap-2 w-full">
    <label
      for="input"
      class="text-sm font-semibold text-lightText"
      v-if="label"
      >{{ label }}</label
    >
    <div
      class="border w-full border-[#cbd5e1] group group-focus:border-primary focus:border-primary flex items-center justify-center relative"
    >
      <textarea @input="emitInput" :value="modelValue" v-bind="$attrs" class="w-full resize-y py-3 px-2" ></textarea>
    </div>

  </ColumnStartComponent>
</template>