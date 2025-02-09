<script setup>
import TextButton from "../../../../components/buttons/TextButton.vue";
import CenterComponent from "../../../../components/CenterComponent.vue";
import ColumnComponent from "../../../../components/ColumnComponent.vue";
import EvInputLabel from "../../../../components/inputs/EvInputLabel.vue";
import StartComponent from "../../../../components/StartComponent.vue";
// import LogoImage from "../../../../components/logo/LogoImage.vue";
</script>

<template>
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary">
    <LogoImage />
    <div
      class="flex-col max-w-[540px] w-full gap-5 flex items-center justify-center bg-white w-in rounded-md p-7"
    >
      <ColumnComponent class="w-full text-center">
        <p
          class="font-Heeb text-2xl text- text-darkText font-bold whitespace-nowrap"
        >
          Password Reset
        </p>
        <p class="mt-3 text-lightText text-sm">
          We will help you Reset your Password
        </p>
      </ColumnComponent>
      <ColumnStartComponent class="w-full max-w-[500px] flex-wrap gap-5">
        <EvInputLabel
          class="w-fll flex-1 basis1/2"
          label="Email Address"
          type="email"
          :icon="false"
          placeholder="youremail@example.com"
        />
      </ColumnStartComponent>
      <CenterComponent class="gap-4 w-full">
        <TextButton text="Reset Password" class="w-full text-white relative" theme="primary" />
      </CenterComponent>
      <hr class="w-full h-[1px] bg-gray-300 border-none" />
      <p class="text-sm text-lightText" >Remembered your Password?</p>
      <!-- <TextButton
        text="Back to Sign in"
        theme="transparent"
        borders=""
        class="border w-full border-darkText text-[#1E5EFF]"
      /> -->
      <div class="w-full p-[10px] border border-gray-300 text-[#1e5eff] center text-sm font-medium duration-500 hover:bg-[rgba(0,0,0,0.2)]" >
        <router-link to="/auth/login">
          Back to Sign in
        </router-link>   
      </div>
    </div>
  </ColumnComponent>
</template>
