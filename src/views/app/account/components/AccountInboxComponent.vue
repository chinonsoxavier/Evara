<script setup>
import TextOutlineButton from '../../../../components/buttons/TextOutlineButton.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import { ProductDetails } from '../../../../utilities/exports';

// import IconComponent from "@/components/IconComponent.vue";
// import StarFilledIcon from "@/components/icons/filled-icons/StarFilledIcon.vue";
// import StartComponent from "@/components/StartComponent.vue";
// import { ref } from "vue";
// const ratings = ref(0);
// const SetRatings = (rating) => {
//   if ((ratings.value !== undefined) | null) {
//     ratings.value = rating;
//   }
// };
</script>

<template>
  <div class="rounded-md p-3 border">
    <div class="w-full flex items-start justify-between">
      <p class="text-small font-normal font-Heebo text-lightText">
        04 September
      </p>
      <RouterLink to="/account/order/detail/89489489"  >
          <TextOutlineButton theme="primary" text="SEE DETAILS" />
        </RouterLink>
    </div>
    <!-- <div>
    <StartComponent class="gap-1">
      <p class="text-lg text-darkText font-normal font-Heebo">
        How was your Experience?
      </p>
      <span class="flex items-center justify-start gap-1">
        <IconComponent
          class="w-4 h-4"
          v-for="stars in Array.from({ length: 5 }, (_, index) => index + 1)"
          :key="stars"
          @click="SetRatings(stars)"
        >
          <StarFilledIcon
            v-if="stars <= ratings.value"
            class="w-4 h-4 fill-orange-500"
          />
          <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
        </IconComponent>
      </span>
    </StartComponent>
    <div>
      <p class="text-small font-medium text-lightText" >
        Thank you for shopping with us! We hope you were happy with your
        item(s). Our customers rely on reviews from insightful customers such as
        yourself to decide which of our products is best for them. We would love
        to hear your feedback on the seller and item, please click on the
        "Pending Reviews" section to share. Thank you for shopping on Jumia!
      </p>
    </div>
  </div> -->

    <div>
      <StartComponent>
        <p class="text-lg text-darkText font-normal font-Heebo">
          Package Delivered!
        </p>
      </StartComponent>
      <div>
        <p class="text-small font-medium text-lightText my-1">
          Package# JE-CAC-1942821182-0285 is delivered. You can rate your
          product to let other people know about it. Not happy? You can return
          it within 7 days from now! Thank you for shopping on Evara!
        </p>
      </div>
      <div class="rounded-md gap-2 flex items-start justify-start border p-3">
        <ImageComponent
          :src="ProductDetails"
          alt="image"
          class="max-w-[70px]"
        />
        <ColumnComponent class="gap-1" >
            <p class="text-base font-medium text-darkText">
                Big Powder Palette With Blush, Highlight & Bronzer
            </p>
            <div class="bg-lighterText w-min px-2 py-[2px]" >
                <p class="text-xs whitespace-nowrap font-medium font-Heebo" >+1 Item</p>
            </div>
        </ColumnComponent>
    </div>
    </div>
  </div>
</template>
