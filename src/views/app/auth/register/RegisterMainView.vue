<script lang="ts" setup>
import { ref } from 'vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import EyeDuoIcon from '../../../../components/icons/duo-tone/EyeDuoIcon.vue';
import FaceBookMultiColoredIcon from '../../../../components/icons/multi-colored/FaceBookMultiColoredIcon.vue';
import GoogleMultiColoredIcon from '../../../../components/icons/multi-colored/GoogleMultiColoredIcon.vue';
import EvInput from '../../../../components/inputs/EvInput.vue';
import EvInputLabel from '../../../../components/inputs/EvInputLabel.vue';
import LogoImage from '../../../../components/logo/LogoImage.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import GitHubFilledIcon from '../../../../components/icons/filled-icons/GitHubFilledIcon.vue';
const passwordVisible = ref(false);


const togglePassVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
  console.log(passwordVisible.value);
};

const formData = ref({
  email: "",
  password: ""
});


</script>

<template>
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary"
  >
    <LogoImage />
    <div
      class="flex-col my-5 gap-5 flex items-center justify-center w-full max-w-[540px] bg-white w-in  px-14 py-10"
    >
      <ColumnComponent class="text-center gap-1" >
        <p
          class="font-Heeb text-[28px] text-darkText  font-semibold whitespace-nowrap"
        >
          Create Account
        </p>
                <p class="text-medium text-lightText font-medium" >Have an account? <span class="text-primary " ><router-link to="/auth/login" >Sign In</router-link></span></p>

      </ColumnComponent>
        <ColumnStartComponent class="w-full  max-w-[500px]">
        <EvInputLabel
          class="w-full flex-1 "
          label="Email Address"
          type="email"
          :icon="false"
          placeholder="youremail@example.com"
          v-model="formData.email"
        />
          <ColumnStartComponent class="gap-2 w-full">
    <label
      for="register-input-email"
      class="text-sm font-semibold mt-5 text-lightText"
      
      >Your Password</label
    >
    <div
      class="border w-full border-[#cbd5e1] group group-focus:border-primary focus:border-primary flex items-center justify-center relative"
    >
    <div class="absolute right-2" v-on:click="togglePassVisibility()" >
     <EyeDuoIcon v-if="passwordVisible" class="w-5 h-5"/>
     <EyeSlashDuoIcon v-else class="w-5 h-5"/>
    </div>
      <!-- <SearchIcon v-if="icon" class="absolute right-2 w-5 h-5" /> -->
      <!-- {{ icon }} -->
      <input
      :type="passwordVisible ?'text':'password'"
        id="register-input-email"
        v-model="formData.password"
        class="placeholder:text-[#BDBBC9] group-focus duration-700 text-lightText placeholder:text-semibold font-normal w-full px-2 py-[7px] bg-transparent border-none outline-none"
      />
    </div>

  </ColumnStartComponent>
      </ColumnStartComponent>
      <CenterComponent>
        <p class="text-sm font-medium text-lightText text-center max-w-80">
          By creating account you agree to our <span class="text-primary">terms and policy.</span>
        </p>
      </CenterComponent>
      <!-- <StartComponent class="gap-2">
        <input type="checkbox" />
        <p class="text-sm font-medium text-lightText">
          I agree with <span class="text-primary">privacy policy & terms</span>
        </p>
      </StartComponent> -->
      <CenterComponent>
        <TextButton text="Create Account" theme="primary" class="w-full relative" />
      </CenterComponent>
      <hr class="w-full h-[1px] bg-gray-300 border-none" >
      <ColumnComponent class="items-center gap-4 w-full" >
    <p class="smallTex text-sm text-lightText font-semibold" >Or create an account using</p>
    <CenterComponent class="gap-4 flex-col w-full" >
        <TextButton text="Continue with Google" theme="transparent" borders="" class="border w-full border-gray-400 text-[#1E5EFF]"  :icon="GoogleMultiColoredIcon"  />
        <TextButton text="Continue with Github" theme="transparent" borders="" class="border w-full border-gray-400 text-[#1E5EFF]"  :icon="GitHubFilledIcon"  />
    </CenterComponent>
    </ColumnComponent>
    </div>
    <!-- <CenterComponent>
        <p class="text-medium text-lightText font-medium" >Already have an account? <span class="text-primary " ><router-link to="/auth/login" >Login</router-link></span></p>
    </CenterComponent> -->
  </ColumnComponent>
</template>
