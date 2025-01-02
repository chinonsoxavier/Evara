<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import EyeDuoIcon from '../../../../components/icons/duo-tone/EyeDuoIcon.vue';
import EvInput from '../../../../components/inputs/EvInput.vue';
import EvInputLabel from '../../../../components/inputs/EvInputLabel.vue';
import LogoImage from '../../../../components/logo/LogoImage.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary"
  >
    <LogoImage />
    <div
      class="flex-col my-5 gap-5 flex items-center justify-center bg-white w-in shadow-lg p-7"
    >
      <StartComponent>
        <p
          class="font-Heeb text-large text-primary font-semibold whitespace-nowrap"
        >
          Create Account
        </p>
      </StartComponent>
      <CenterComponent class="w-full max-w-[500px] flex-wrap gap-5">
        <EvInputLabel
          class="flex-1 basis-1/3"
          label="Your Name"
          type="text"
          :icon="false"
          placeholder="your name"
        />
        <EvInputLabel
          class="w-fll flex-1 basis-1/3"
          label="Email Address"
          type="email"
          :icon="false"
          placeholder="youremail@example.com"
        />
        <EvInputLabel
          class="w-ful flex-1 basis-1/3"
          label="Password"
          type="password"
          :icon="EyeDuoIcon"
          iconPosition="right"
          placeholder="password"
        />
        <EvInputLabel
          class="w-ful flex-1 basis-1/3"
          label="Comfirm Password"
          type="password"
          :icon="EyeDuoIcon"
          iconPosition="right"
          placeholder="comfirm password"
        />
      </CenterComponent>
      <StartComponent class="gap-2">
        <input type="checkbox" />
        <p class="text-sm font-medium text-lightText">
          I agree with <span class="text-primary">privacy policy & terms</span>
        </p>
      </StartComponent>
      <CenterComponent>
        <TextButton text="REGIGTER" theme="primary" class="w-full" />
      </CenterComponent>
      <hr class="w-full h-[1px] bg-gray-300 border-none" >
      <ColumnComponent class="items-center gap-4" >
    <p class="smallTex text-sm text-lightText font-semibold" >Or signup with</p>
    <CenterComponent class="gap-4" >
        <TextButton text="GOOGLE" theme="" :icon="GoogleMultiColoredIcon"  />
        <TextButton text="FACEBOOK" theme="" :icon="FaceBookMultiColoredIcon" />
    </CenterComponent>
    </ColumnComponent>
    </div>
    <CenterComponent>
        <p class="text-medium text-lightText font-medium" >Already have an account? <span class="text-primary " ><router-link to="/auth/login" >Login</router-link></span></p>
    </CenterComponent>
  </ColumnComponent>
</template>
