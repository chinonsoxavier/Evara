<script lang="ts" setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  position: {
    type: String,
    default: "top",
  },
  text: {
    type: String,
    default: "tooltip",
  },
});

const setTooltipPositionClass = computed(() => {
  switch (props.position) {
    case "top":
      return "bottom-full px-5 left-0 right-0 mb-2 before:absolute before:bg-[#001E3C] before:-bottom-1 before:rotate-45";
    case "bottom":
      return "top-full left-0 right-0 mt-2 before:absolute before:bg-[#001E3C] before:-top-1 before:rotate-45";
    case "right":
      return "left-full ml-2 bottom-0 top-0 before:absolute before:bg-[#001E3C] before:-left-1 before:rotate-45";
    case "left":
      return "right-full mr-2 bottom-0 top-0 before:absolute before:bg-[#001E3C] before:-right-1 before:rotate-45";
    default:
      return "bottom-full left-0 right-0 mb-2 before:absolute before:bg-[#001E3C] before:-bottom-1 before:rotate-45";
  }
});

const showTooltip = ref(false);

const setShowTooltip = (value) => {
  showTooltip.value = value;
  console.log(showTooltip.value);
};
</script>

<template>
  <div
    @mouseenter="setShowTooltip(true)"
    @mouseleave="setShowTooltip(false)"
    class="cursor-pointer bg-[red] min-w-20  absolute flex flex-col items-center justify-center" 
  >
    <slot />
        <div
        v-if="showTooltip"
        class="absolute duration-500 py-[2px] flex items-center justify-center before:w-3 before:h-3 bg-[#001E3C] text-white font-Heebo text-sm"
        :class="setTooltipPositionClass"
        >
        <p class="relative z-20 px-2 w-full text-center bg-[red] " >
            {{ props.text }}
        </p>
    </div>
  </div>
</template>
