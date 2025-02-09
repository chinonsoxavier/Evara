<script setup lang="ts" >
import { ref, defineProps } from "vue";
import EvComponent from "./EvComponent.vue";
import BetweenComponent from "./BetweenComponent.vue";
import FlexComponent from "./FlexComponent.vue";
import IconComponent from "./IconComponent.vue";
import CaretLeftIcon from "./icons/line-icons/CaretLeftIcon.vue";
import CaretRightIcon from "./icons/line-icons/CaretRightIcon.vue";
import ProductCardComponent from "./ProductCardComponent.vue";
const productCardContainer = ref(null);
const productCardWrapper =ref(null);
const productCardWidth = ref(0);
const productPerSlide = ref(6);
const gapPerSlide = ref(12);
const currentSlide = ref(0);
const translateX = ref(0);
// const handleSlide = () => {
  //   productCardContainer.value.style.transform = `translateX(${4 * productPerSlide.value}px)`
  // }

const next = () => {
  if (
    translateX.value >
    -productCardWidth.value *
      (Array.from({ length: 20 }).length - productPerSlide.value)
  ) {
    currentSlide.value += 1;
    console.log(productCardWidth.value);
    console.log(translateX.value);
    console.log(currentSlide.value);
    translateX.value -= productCardWidth.value;
  }
};
const prev = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1;
    console.log(productCardWidth.value);
    translateX.value += productCardWidth.value;

  }
  console.log(currentSlide.value);
};

function updateProductPerSlide() {
  // if (currentSlide.value <= 0) {
  if (window.innerWidth < 700) {
    productPerSlide.value = 2;
  } else if (window.innerWidth < 800) {
    productPerSlide.value = 3;
  } else if (window.innerWidth < 900) {
    productPerSlide.value = 4;
  } else if (window.innerWidth < 1000) {
    productPerSlide.value = 5;
  } else {
    productPerSlide.value = 6;
  }
  console.log(productPerSlide.value);
  productCardWidth.value = productCardWrapper.value?.offsetWidth / productPerSlide.value;
  // }else {
  translateX.value = currentSlide.value * -productCardWidth.value;
  console.log(currentSlide.value);
  // }
}

updateProductPerSlide();
window.addEventListener("resize", updateProductPerSlide);
window.addEventListener("DOMContentLoaded", updateProductPerSlide);

// onMounted(() => {
//   window.addEventListener("resize", () => {
//     if (window.innerWidth <= 1000) {
//       productPerSlide.value = 5;
//     } else if (window.innerWidth <= 900) {
//       productPerSlide.value = 4;
//     } else if (window.innerWidth <= 800) {
//       productPerSlide.value = 3;
//     } else if (window.innerWidth <= 700) {
//       productPerSlide.value = 2;
//     }
//     productCardWidth.value =
//       productCardWrapper.value.offsetWidth / productPerSlide.value;
//   });
//   window.addEventListener("DOMContentLoaded",  () => {
//     if (window.innerWidth <= 1000) {
//       productPerSlide.value = 5;
//     } else if (window.innerWidth <= 900) {
//       productPerSlide.value = 4;
//     } else if (window.innerWidth <= 800) {
//       productPerSlide.value = 3;
//     } else if (window.innerWidth <= 700) {
//       productPerSlide.value = 2;
//     }
//     alert(productCardWidth.value);
//     productCardWidth.value =
//       productCardWrapper.value.offsetWidth / productPerSlide.value;
//   });
// });

// onUnmounted(() => {
//   window.removeEventListener("resize", () => {
//     alert("jhjvhhjvh");
//     productCardWidth.value =
//       productCardWrapper.value.offsetWidth / productPerSlide.value;
//   });

//   window.removeEventListener("load", () => {
//     alert("jhjvhhjvh");

//     productCardWidth.value =
//       productCardWrapper.value.offsetWidth / productPerSlide.value;
//   });
// });

defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
  <EvComponent  class="test py-10">
    <BetweenComponent class="w-full">
      <span class="largeText font-bold"
        ><span class="mr-[6px] font-Heebo tracking-wide">{{
          label.split(" ")[0]
        }}</span
        ><span
          class="text-primary font-semibold tracking-wide font-m font-Heebo"
          >{{ label.split(" ")[1] }}</span
        ></span
      >
      <FlexComponent class="gap-2 pr-3">
        <div v-on:click="prev()">
          <IconComponent
            :class="[currentSlide == 0 ? 'bg-gray-500' : 'bg-primary']"
            class="w-7 h-7 fill-white"
          >
            <CaretLeftIcon class="w-5 h-5 fill-white" />
          </IconComponent>
        </div>
        <div v-on:click="next()">
          <IconComponent
            :class="[
              currentSlide >= 20 - productPerSlide
                    ? 'bg-gray-500'
                    : 'bg-primary',
            ]"
            class="w-7 h-7 fill-white"
          >
            <CaretRightIcon class="h-5 w-5 fill-white" />
          </IconComponent>
        </div>
      </FlexComponent>
    </BetweenComponent>
    <div
      ref="productCardWrapper"
      class="mt-4 flex items-center justify-start overflow-x-clip"
    >
      <div
        ref="productCardContainer"
        :style="{ transform: `translateX(${translateX}px)` }"
        class="flex items-center duration-1000 justify-start gap-3"
      >
        <div
          class="pb-1"
          :style="{ width: productCardWidth - gapPerSlide + 'px' }"
          v-for="(product, index) in Array.from({ length: 20 })"
          :key="index"
        >
          <ProductCardComponent :product="product" label="Hats" />
        </div>
      </div>
    </div>
  </EvComponent>
  </div>
</template>
