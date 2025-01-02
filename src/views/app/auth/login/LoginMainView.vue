<script setup>
import { ref } from 'vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import EyeDuoIcon from '../../../../components/icons/duo-tone/EyeDuoIcon.vue';
import EvInputLabel from '../../../../components/inputs/EvInputLabel.vue';
import LogoImage from '../../../../components/logo/LogoImage.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import EyeSlashDuoIcon from '../../../../components/icons/duo-tone/EyeSlashDuoIcon.vue';
const passwordVisible = ref(false);
import { useAuthStore } from '../../../../utilities/store/authStore';
import { facebookImg, githubImg, googleImg } from '../../../../utilities/exports';
const authStore = useAuthStore();

import { useRouter } from 'vue-router';
const router = useRouter();
const togglePassVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
  console.log(passwordVisible.value);
};

const formData = ref({
  email: "",
  password: ""
});


const login = async () => {
  router.push({ name: "home" });
  await authStore.login({ email: formData.value.email, password: formData.value.password });
};

const googleLogin = () => {
  window.open("http://localhost:4000/api/v1/auth/google", "_self");
};


</script>

<template>
  <!-- <form > -->
  <ColumnComponent
    class="w-screen items-center justify-center h-screen bg-lightPrimary"
  >
    <LogoImage />
    <div
      class="flex-col gap-5 mobile:my-3 my-5 flex items-center justify-center bg-white shadow-lg p-7"
    >
      <StartComponent>
        <p
          class="font-Heeb text-large text-primary font-semibold whitespace-nowrap"
        >
          Login
        </p>
      </StartComponent>
      <ColumnStartComponent class="w-full  max-w-[500px] flex-wrap gap-5">
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
      for="login-input-email"
      class="text-sm font-semibold text-lightText"
      v-if="label"
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
        id="login-input-email"
        v-model="formData.password"
        class="placeholder:text-[#BDBBC9] group-focus duration-700 text-lightText placeholder:text-semibold font-normal w-full px-2 py-[7px] bg-transparent border-none outline-none"
      />
    </div>

  </ColumnStartComponent>
      </ColumnStartComponent>
      <StartComponent class="gap-2">
        <p class="text-sm font-medium text-primary cursor-pointer">Forgot Password?
        </p>
      </StartComponent>
      <CenterComponent>
        <div v-on:click="login" class="w-full" >
        <TextButton  text="LOGIN" theme="primary" class="w-full" />
        </div>
      </CenterComponent>
      <hr class="w-full h-[1px] bg-gray-300 border-none" >
      <ColumnComponent class="items-center gap-4" >
    <p class="text-sm text-lightText font-semibold" >Or continue with</p>
    <CenterComponent class="gap-4" >
      <div v-on:click="googleLogin" >
        <TextButton text="GOOGLE" theme="#df4930" class="bg-[#df4930]" :img="googleImg"  />
      </div>
        <TextButton text="FACEBOOK" theme="" class="bg-[#507cc0]" :img="facebookImg" />
        <TextButton text="GITHUB" theme="" class="bg-[black]" :img="githubImg" />
    </CenterComponent>
    </ColumnComponent>
    </div>
    <CenterComponent class="" >
        <p class="text-medium text-lightText font-medium" >Don`t have an account? <span class="text-primary " ><router-link to="/auth/register" >Register</router-link></span></p>
    </CenterComponent>
  </ColumnComponent>
  <!-- </form> -->
</template>
