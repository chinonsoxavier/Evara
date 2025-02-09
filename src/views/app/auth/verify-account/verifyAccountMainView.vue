<script setup>
import TextButton from "../../../../components/buttons/TextButton.vue";
import CenterComponent from "../../../../components/CenterComponent.vue";
import ColumnComponent from "../../../../components/ColumnComponent.vue";
import LogoImage from "../../../../components/logo/LogoImage.vue";
import StartComponent from "../../../../components/StartComponent.vue";
</script>

<template>
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary"
  >
    <LogoImage />
    <div
      class="flex-col gap-5 flex items-center justify-center bg-white max-w-[540px] w-full rounded-md p-7"
    >
    <CenterComponent>
      <svg class="w-20 h-20" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 40L51 0L102 40V92C102 96.4183 98.4183 100 94 100H8C3.58172 100 0 96.4183 0 92V40Z" fill="#131523"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 9.79086 11.7909 8 14 8H80L92 20V78H10V12Z" fill="#1E2753"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8H80V20H92V88H10V8Z" fill="#1E2753"/>
<rect x="31" y="49" width="40" height="4" rx="2" fill="white"/>
<rect x="41" y="57" width="20" height="4" rx="2" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.1126 21.5596L62.8872 24.4409L47.9735 38.8022L40.5857 31.4144L43.4141 28.586L48.0259 33.1972L60.1126 21.5596Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 40L48.5314 78.0639C49.9808 79.2007 52.0192 79.2007 53.4686 78.0639L102 40V96C102 98.2091 100.209 100 98 100H4C1.79086 100 0 98.2091 0 96V40Z" fill="#D7DBEC"/>
</svg>
    </CenterComponent>
      <CenterComponent class="w-full">
        <p class="font-Heeb text-3xl text-darkText font-bold whitespace-nowrap">
          Almost There
        </p>
      </CenterComponent>
      <CenterComponent class="flex-col hidden">
        <p class="mediumText">Please wait! Your account is being verified</p>
        <p class="mediumTex text-medium font-medium text-red-400">
          Your activation token is Expired
        </p>
        <p class="mediumText">Your account is already verified!</p>
        <p class="mediumText">Your activation token is not valid!</p>
      </CenterComponent>
      <CenterComponent class="text-sm text-[#5A607F] font-medium" >
        <p>Check your email inbox and confirm your account</p>
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
      <!-- <CenterComponent class="gap-4 w-full" >
        <TextButton text="Resend Token" class="w-full" theme="primary"   />
    </CenterComponent> -->
      <hr class="w-full h-[1px] bg-gray-300 border-none" />
      <p class="text-sm font-medium text-lightText">Didn`t recieve any mail?</p>
      <div
        class="w-full p-[10px] border border-gray-300 text-[#1e5eff] center text-sm font-medium duration-500 hover:bg-[rgba(0,0,0,0.2)]"
      >
      Resend Comfirmation 
      </div>
    </div>
    <!-- <CenterComponent class="mt-5 " >
        <p class="text-medium text-lightText font-medium" >you didn`t get the mail? <span class="text-primary " >Resend</span></p>
    </CenterComponent> -->
  </ColumnComponent>
</template>
