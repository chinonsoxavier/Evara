<script  lang="ts" setup>
import { ref } from "vue";
import CheckFilledIcon from "../../../../components/icons/filled-icons/CheckFilledIcon.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import EvInputLabel from "../../../../components/inputs/EvInputLabel.vue";
import StartComponent from "../../../../components/StartComponent.vue";
import EndComponent from "../../../../components/EndComponent.vue";
import TextOutlineButton from "../../../../components/buttons/TextOutlineButton.vue";
import TextButton from "../../../../components/buttons/TextButton.vue";

const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const additionalInfo = ref("");
const deliveryAddress = ref("75 Adekeye sreet");
</script>

<template>
    <section class="flex-1" >
  <div class="flex-1 bg-white pb-3 rounded-md shadow-md">
    <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
      <span class="flex items-center gap-1">
        <span class="fill-[#a3a3a6]">
          <CheckFilledIcon class="w-5 h-5" />
        </span>
        <span class="font-Heebo text-medium font-medium text-lightText">
          1. CUSTOMER ADDRESS</span
        >
      </span>
    </div>
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
        <p class="text-sm text-lightText font-medium" >REGION</p>
        <select class="bg-transparent border rounded-md px-3 py-2 w-full">
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
        </select>
      </ColumnStartComponent>
      <ColumnStartComponent class="flex-1 px-3 gap-2">
        <p class="text-sm text-lightText font-medium" >CITY</p>
        <select class="bg-transparent border rounded-md px-3 py-2 w-full">
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
          <option value="lagos">Lagos</option>
        </select>
      </ColumnStartComponent>
    </div>
    <StartComponent class="px-3 py-5 gap-2" >
    <input type="checkbox" name="" id="">
    <span class="mediumText" >Set as Default Address</span>
    </StartComponent>
    <hr class="my-5" >
     <EndComponent class="px-3" >
      <RouterLink to="/checkout/addresses">
        <TextOutlineButton theme="" text="CANCEL"  />
      </RouterLink>
        <TextButton theme="primary" text="SAVE"/>
     </EndComponent>
  </div>
   <div class="bg-white rounded-md shadow-md my-3" >
         <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-[#a3a3a6]">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium font-medium text-[#a3a3a6]">
            2. CUSTOMER ADDRESS</span
          >
        </span>
      </div>
    </div> 
    <div class="bg-white shadow-md rounded-md" >
         <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-[#a3a3a6]">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium font-medium text-[#a3a3a6]">
            3. PAYMENT METHOD</span
          >
        </span>
      </div>
    </div>
    </section>
</template>
