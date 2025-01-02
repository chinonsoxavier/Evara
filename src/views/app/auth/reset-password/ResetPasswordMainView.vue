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
          Recover Password
        </p>
      </StartComponent>
       <ColumnStartComponent class="w-full  max-w-[500px] flex-wrap gap-5">
        <EvInputLabel
          class="w-fll flex-1 basis1/2"
          label="Email Address"
          type="email"
          :icon="false"
          placeholder="youremail@example.com"
        />
      </ColumnStartComponent>
       <CenterComponent class="gap-4 w-full" >
        <TextButton text="Reset Password" class="w-full" theme="primary"   />
    </CenterComponent>
</div>      
 <CenterComponent class="mt-5 " >
        <p class="text-medium text-lightText font-medium" >Some how remembered? <span class="text-primary " >Login</span></p>
    </CenterComponent>
  </ColumnComponent>
</template>
