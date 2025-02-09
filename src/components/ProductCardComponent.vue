<script  lang="ts" setup>
import CenterComponent from "./CenterComponent.vue";
import ImageComponent from "./ImageComponent.vue";
import { defineProps } from "vue";
import BetweenComponent from "./BetweenComponent.vue";
import FlexComponent from "./FlexComponent.vue";
import IconComponent from "./IconComponent.vue";
import StarFilledIcon from "./icons/filled-icons/StarFilledIcon.vue";
import ShoppingBagIcon from "./icons/duo-tone/ShoppingBagIcon.vue";
import HeartIcon from "./icons/duo-tone/HeartIcon.vue";
import { ProductImg } from "../utilities/exports";
const props = defineProps({
  category: {
    type: [String, Boolean],
  },
  name: {
    type: [String, Boolean],
  },
  price: {
    type: [String, Boolean],
  },
  rating: {
    type: [String, Boolean],
  },
  oldPrice: {
    type: [String, Boolean],
  },
  newPrice: {
    type: [String, Boolean],
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <div
    class="border max-w-[200px]is-1/5 flex-1 group rounded-lg pb-3 p-[6px] cursor-pointer duration-500 scale-100 hover:scale-95"
  >
    <CenterComponent class="bg-lightPrimary rounded-lg min-w-10 relative">
      <ImageComponent class="min-w-0" :src="ProductImg" alt="product image" />
      <CenterComponent class="gap-3 absolute">
        <IconComponent class="bg-lightPrimary duration-500 scale-0 shadow-lg group-hover:scale-100  h-8 w-8">
          <HeartIcon class="w-5 h-5" />
        </IconComponent>
        <IconComponent class="bg-lightPrimary duration-500 scale-0 shadow-lg group-hover:scale-100 delay-100 h-8 w-8">
          <HeartIcon class="w-5 h-5" />
        </IconComponent>
        <IconComponent class="bg-lightPrimary duration-500 scale-0 shadow-lg group-hover:scale-100 delay-200 h-8 w-8">
          <HeartIcon class="w-5 h-5" />
        </IconComponent>
      </CenterComponent>
    </CenterComponent>
    <CenterComponent class="pt-3">
      <!-- <p class="text-normal">{{  }}</p> -->
      <p
        v-if="props.label"
        class="text-sm font-medium text-left text-lightText"
      >
        {{ props.label }}
      </p>
      <BetweenComponent v-if="props.category">
        <div class="flex-col flex items-start gap-2 justify-start px-2 py-4">
          <p
            v-if="props.category"
            class="text-sm font-medium text-left text-lightText"
          >
            {{ props.category }}
          </p>
          <p class="text-normal font-medium text-left text- font-Heebo">
            {{ props.name }}
          </p>
          <FlexComponent class="gap-1">
            <IconComponent
              class="w-4 h-4"
              v-for="(stars,index) in Array.from(
                { length: 5 },
                (_, index) => index + 1
              )"
              :key="stars"
            >
              <!-- {{ index }} -->
              <StarFilledIcon
                v-if="stars <= 4"
                class="w-4 h-4 fill-orange-500"
              />
              <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
            </IconComponent>
          </FlexComponent>
          <FlexComponent class="gap-2 items-center">
            <p class="text-normal text-left text-primary font-bold">
              ${{ props.newPrice }}
            </p>
            <p
              class="text-medium line-through font-medium text-left text-lightText"
            >
              ${{ props.oldPrice }}
            </p>
          </FlexComponent>
        </div>
        <IconComponent class="bg-lightPrimary relative">
          <ShoppingBagIcon class="w-5 h-5" />
        </IconComponent>
      </BetweenComponent>
    </CenterComponent>
  </div>
</template>
