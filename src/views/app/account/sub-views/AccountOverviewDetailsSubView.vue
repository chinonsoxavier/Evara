<script  lang="ts" setup>

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
          Overview Details
        </p>
      </StartComponent>
      <hr>
      <ColumnStartComponent class="p-3">
        <p class="text-lightText text-small font-semibold font-Heebo">
          EDIT ACCOUNT
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
      <hr class="mt-5" >
      <ColumnStartComponent class="p-3">
        <p class="text-lightText text-small font-semibold font-Heebo">
        CHANGE  PASSWORD
        </p>
      </ColumnStartComponent>
      <div class="flex w-full items-center flex-wrap justify-center px-3 gap-3">
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="Current Password"
            v-model="firstName"
            type="text"
            placeholder="Enter Your Current Password"
          />
        </div>
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="New Password"
            v-model="lastName"
            type="text"
            placeholder="Enter Your New Passord"
          />
        </div>
        <div class="flex-1 min-w-[350px]">
          <EvInputLabel
            class="flex-1"
            label="Comfirm New Password"
            v-model="phoneNumber"
            type="text"
            placeholder="Enter Your New Password"
          />
        </div>
        
      </div>
     
      
      <hr class="my-5" />
      <EndComponent class="px-3">
        <RouterLink to="/account/overview/index">
          <TextOutlineButton theme="red" text="CANCEL" />
        </RouterLink>
        <TextButton theme="primary" text="SAVE" />
      </EndComponent>
    </div>
  </section>
</template>
