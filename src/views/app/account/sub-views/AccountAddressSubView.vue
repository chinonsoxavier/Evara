<script setup>
import { ref } from "vue";
import StartComponent from "../../../../components/StartComponent.vue";
import IconComponent from "../../../../components/IconComponent.vue";
import CaretLeftIcon from "../../../../components/icons/line-icons/CaretLeftIcon.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import EvInputLabel from "../../../../components/inputs/EvInputLabel.vue";
import EndComponent from "../../../../components/EndComponent.vue";
import TextOutlineButton from "../../../../components/buttons/TextOutlineButton.vue";

const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const additionalInfo = ref("");
const deliveryAddress = ref("75 Adekeye sreet");
</script>

<template>
  <section class="flex-1">
    <div class="flex-1 bg-white border pb-3 rounded-md shadow-md">
       <StartComponent class="">
        <RouterLink to="/account/overview/index">
          <IconComponent>
            <CaretLeftIcon class="w-6 h-6" />
          </IconComponent>
        </RouterLink>
        <p class="text-lg text-darkText font-medium font-Heebo">
          ADDRESSESS
        </p>
      </StartComponent>
      <ColumnStartComponent class="p-3">
        <p class="text-lightText text-small font-semibold font-Heebo">
          EDIT ADDRESS
        </p>
      </ColumnStartComponent>
      <div class="flex w-full items-center flex-wrap justify-center px-3 gap-3">
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="FIRST NAME"
            v-model="firstName"
            type="text"
            placeholder="Enter Your First Name"
          />
        </div>
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="LAST NAME"
            v-model="lastName"
            type="text"
            placeholder="Enter Your Last Name"
          />
        </div>
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="PHONE NUMBER"
            v-model="phoneNumber"
            type="number"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="ADDITIONAL PHONE NUMBER"
            v-model="additionalInfo"
            type="number"
            placeholder="Enter Your Additional Phone Number"
          />
        </div>
      </div>
      <div class="p-3 flex flex-col gap-3">
        <EvInputLabel
          v-model="deliveryAddress"
          placeholder="Enter your Address"
          label="Delivery Address"
        />
        <EvInputLabel
          v-model="deliveryAddress"
          placeholder="Enter your Additional Information"
          label="Additional Information"
        />
      </div>
      <div class="flex items-center justify-center">
        <ColumnStartComponent class="flex-1 px-3 gap-2">
          <p class="text-sm text-lightText font-medium">REGION</p>
          <select class="bg-transparent border rounded-md px-3 py-2 w-full">
            <option value="lagos" class="text-lightText">Lagos</option>
            <option value="lagos" class="text-lightText">Lagos</option>
            <option value="lagos" class="text-lightText">Lagos</option>
            <option value="lagos" class="text-lightText">Lagos</option>
            <option value="lagos" class="text-lightText">Lagos</option>
          </select>
        </ColumnStartComponent>
        <ColumnStartComponent class="flex-1 px-3 gap-2">
          <p class="text-sm text-lightText font-medium">CITY</p>
          <select class="bg-transparent border rounded-md px-3 py-2 w-full">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </ColumnStartComponent>
      </div>
      <hr class="my-5" />
      <EndComponent class="px-3">
        <RouterLink to="/account/overview">
          <TextOutlineButton theme="lightPrimary" text="CANCEL" />
        </RouterLink>
        <TextButton theme="primary" text="SAVE" />
      </EndComponent>
    </div>
  </section>
</template>
