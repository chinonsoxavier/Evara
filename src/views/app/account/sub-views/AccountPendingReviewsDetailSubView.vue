<script  lang="ts" setup>

import { ref } from "vue";
import StartComponent from "../../../../components/StartComponent.vue";
import IconComponent from "../../../../components/IconComponent.vue";
import CaretLeftIcon from "../../../../components/icons/line-icons/CaretLeftIcon.vue";
import ColumnComponent from "../../../../components/ColumnComponent.vue";
import ImageComponent from "../../../../components/ImageComponent.vue";
import { ProductDetails } from "../../../../utilities/exports";
import StarFilledIcon from "../../../../components/icons/filled-icons/StarFilledIcon.vue";
import FlexComponent from "../../../../components/FlexComponent.vue";
import EvInputLabel from "../../../../components/inputs/EvInputLabel.vue";
import EvTextAreaLabeled from "../../../../components/inputs/EvTextAreaLabeled.vue";
import TextButton from "../../../../components/buttons/TextButton.vue";

const ratings = ref(0);

const SetRatings = (rating) => {
  if ((ratings.value !== undefined) | null) {
    ratings.value = rating;
  }
};
</script>

<template>
  <div class="border rounded-md shadow-md flex-1">
    <StartComponent class="p-3">
      <RouterLink to="/customer/pendingreviews">
        <IconComponent>
          <CaretLeftIcon class="w-6 h-6" />
        </IconComponent>
      </RouterLink>
      <p class="text-large text-darkText font-medium font-Heebo">
        Rate & Review
      </p>
    </StartComponent>
    <hr />
    <StartComponent class="p-3">
      <p class="text-darkText font-semibold text-medium font-Heebo">
        SELECT THE STARS TO RATE THE PRODUCT
      </p>
    </StartComponent>
    <hr />
    <ColumnComponent class="gap-3 p-3">
      <div class="flex items-start justify-start gap-3">
        <ImageComponent
          :src="ProductDetails"
          alt="image"
          class="max-w-[100px]"
        />
        <ColumnComponent>
          <p class="font-Heebo font-normal text-darkText">
            Simple Casual Comfortable Easy Wear
          </p>
          <StartComponent class="gap-1 my-2">
            <IconComponent
              class="w-8 h-8"
              v-for="stars in Array.from(
                { length: 5 },
                (_, index) => index + 1
              )"
              :key="stars"
              @click.stop="SetRatings(stars)"
            >
              <StarFilledIcon
                v-if="stars <= ratings.value"
                class="w-5 h-5 fill-orange-500"
              />
              <StarFilledIcon class="w-5 h-5 fill-gray-500" v-else />
            </IconComponent>
          </StartComponent>
        </ColumnComponent>
      </div>
      <StartComponent class="py-3">
        <p class="text-darkText font-semibold text-medium font-Heebo">
          LEAVE A REVIEW
        </p>
      </StartComponent>
      <FlexComponent class="gap-3">
        <EvInputLabel
          label="Review Title"
          class="flex-1"
          placeholder="e.g. I like it! / I don`t like it!"
        />
        <EvInputLabel
          label="Your Name"
          class="flex-1"
          placeholder="Enter your Name"
        />
      </FlexComponent>
      <FlexComponent>
        <EvTextAreaLabeled
          class="flex-"
          placeholder="Tell us more about your rating"
          label="Detailed Review"
        />
      </FlexComponent>
      <ColumnStartComponent class="my-3" >
        <TextButton text="SUBMIT REVIEW" theme="primary" class="w-full" />
      </ColumnStartComponent>
    </ColumnComponent>
  </div>
</template>
