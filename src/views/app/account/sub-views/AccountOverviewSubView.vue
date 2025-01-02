<script setup>
// import ColumnStartComponent from '@/components/ColumnStartComponent.vue';
import { ref } from "vue";
import BetweenComponent from "../../../../components/BetweenComponent.vue";
import CenterComponent from "../../../../components/CenterComponent.vue";
import ImageComponent from "../../../../components/ImageComponent.vue";
import AccountDuoIcon from "../../../../components/icons/duo-tone/AccountDuoIcon.vue";
import IconComponent from "../../../../components/IconComponent.vue";
import HighLighterDuoIcon from "../../../../components/icons/duo-tone/HighLighterDuoIcon.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import TextButton from "../../../../components/buttons/TextButton.vue";
// import EvInputLabel from "@/components/inputs/EvInputLabel.vue";


const avatar = ref(null);

const setAvatar = (e) => {
  const file = e.target.files[0];
  if (file) { 
    // avatar.value = e.target.value;
    const reader = new FileReader();

    reader.onload = (event) => {
      avatar.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  console.log(avatar);
}
</script>

<template>
  <div class="bg-white shadow-md flex-1 border">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">
        Account Overview
      </p>
    </div>
    <hr />
    <CenterComponent class="p-3">
      <CenterComponent
        class="bg-lightPrimary w-full cursor-pointer py-10 rounded-md"
      >
      <div class="bg-white rounded-full relative w-40 h-40 flex items-center justify-center" >
        <label htmlFor="file-input" class="absolute rounded-full w-full h-full" >
          <input  id="file-input" type="file" accept=".jpeg,.png,.jpeg" class="bg-[red] z-20 sr-only" @change="setAvatar" >
        </label>
        <ImageComponent v-if="avatar" :src="avatar" alt='image' :rounded="true" class=" w-full h-full" />
        <AccountDuoIcon v-else class="w- w-28 h-28 fill-primary" />
      </div>
      </CenterComponent>
    </CenterComponent>
    <div class="flex bg-[r] items-start justify-start  flex-wrap gap-3 p-3">
      <div class="border rounded-md flex-1 basis-[300px]">
        <BetweenComponent class="px-3 py-3">
          <p class="font-Heebo normalText">ACCOUNT DETAILS</p>
          <RouterLink to="/account/overview/details/edit/8798383">
            <IconComponent class="hover:bg-lightPrimary duration-500">
              <HighLighterDuoIcon class="w-4 h-4" />
            </IconComponent>
          </RouterLink>
        </BetweenComponent>
        <hr />

        <div class="px-3 flex flex-col gap-2 items-start py-3 baseText">
          <p class="font-Heebo mediuText">Chinonso Xavier</p>
          <P class="font-Heebo text-sm font-light">chinonsoxaver26@gmail.com</P>
        </div>
        <hr>
         <div class="">
        <div class="px-3 flex flex-col gap-2 items-start py-3 baseText">
          <p class="font-Heebo mediuText">Your Default Phone Number:</p>
          <P class="font-Heebo text-sm font-light">09169845115</P>
        </div>
        <div class="px-3 flex flex-col gap-2 items-start py-3 baseText">
          <p class="font-Heebo mediuText">Your Additional Phone Number:</p>
          <P class="font-Heebo text-sm font-light">09169845115</P>
        </div>
      </div>
      <hr>
      <div class="">
   
        <ColumnStartComponent >
         
          
          <div class="px-3 flex flex-col gap-2 items-start py-3 baseText w-full">
            <p class="font-Heebo mediuText">Delete Account</p>
          <TextButton theme="primary" text="DELETE ACCOUNT" />
        </div>
        </ColumnStartComponent>
      </div>
      </div>
      <div class="border rounded-md flex-1 basis-[300px]">
        <BetweenComponent class="px-3 py-3">
          <p class="font-Heebo normalText">ADDRESS BOOK</p>
          <RouterLink to="/account/overview/address/8798383">
            <IconComponent class="hover:bg-lightPrimary duration-500">
              <HighLighterDuoIcon class="w-4 h-4" />
            </IconComponent>
          </RouterLink>
        </BetweenComponent>
        <hr />
        <div class="px-3 flex flex-col gap-2 items-start py-3 baseText">
          <p class="font-Heebo mediuText">Your default shipping address:</p>
          <P class="font-Heebo text-sm font-light">Chinonso Xavier</P>
          <P class="font-Heebo text-sm font-light"
            >78 adekeye street ojo road</P
          >
          <P class="font-Heebo text-sm font-light">Apapa (Ajegunle), Lagos</P>
          <P class="font-Heebo text-sm font-light">+234 9168945115</P>
        </div>
      </div>
     
    </div>
  </div>
</template>
