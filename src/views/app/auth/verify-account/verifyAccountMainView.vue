<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import LogoImage from '../../../../components/logo/LogoImage.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary"
  >
   <LogoImage />
    <div
      class="flex-col gap-5 flex items-center justify-center bg-white w-in shadow-lg p-7"
    >
 <StartComponent class="w-full" >
        <p
          class="font-Heeb text-lg text-primary font-semibold whitespace-nowrap"
        >
         Verify your account
        </p>
      </StartComponent>
      <CenterComponent class="flex-col" >
        <p class="mediumText" >Please wait! Your account is being verified</p>
        <p class="mediumTex text-medium font-medium text-red-400" >Your activation token is Expired</p>
        <p class="mediumText" >Your account is already verified!</p>
        <p class="mediumText" >Your activation token is not valid!</p>
      </CenterComponent>

       <!-- <ColumnStartComponent class="w-full  max-w-[500px] flex-wrap gap-5">
        <EvInputLabel
          class="w-fll flex-1 basis1/2"
          label="Activation link"
          type="text"
          :icon="false"
          placeholder="activation link"
        />
      </ColumnStartComponent> -->
       <CenterComponent class="gap-4 w-full" >
        <TextButton text="Resend Token" class="w-full" theme="primary"   />
    </CenterComponent>
</div>      
 <!-- <CenterComponent class="mt-5 " >
        <p class="text-medium text-lightText font-medium" >you didn`t get the mail? <span class="text-primary " >Resend</span></p>
    </CenterComponent> -->
  </ColumnComponent>
</template>
