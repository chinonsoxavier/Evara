<script lang="ts" setup>
import { ref } from "vue";
import BetweenComponent from "../BetweenComponent.vue";
import EndComponent from "../EndComponent.vue";
import IconComponent from "../IconComponent.vue";
import MoonDuoIcon from "../icons/duo-tone/MoonDuoIcon.vue";
import SunDuoIcon from "../icons/duo-tone/SunDuoIcon.vue";
import NotificationDuoIcon from "../icons/duo-tone/NotificationDuoIcon.vue";
import ChatDuoIcon from "../icons/duo-tone/ChatDuoIcon.vue";
import LogoImage from "../logo/LogoImage.vue";
import CaretDownIcon from "../icons/line-icons/CaretDownIcon.vue";


const mode = ref(null);
// onMounted(() => {
//   if (localStorage.getItem("color-theme") === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.documentElement.classList.add("dark");
//       mode.value = 'dark';
//   } else {
//       document.documentElement.classList.remove("dark");
//       mode.value = 'light';
//   }
//     // alert(mode.value);
// });

const setThemeMode = () => {
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem('color-theme') === 'light') {   
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", 'dark');
            mode.value = 'dark';
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", 'light');
            mode.value = 'light';
        }
    } else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("color-theme", 'light');
            mode.value = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("color-theme", 'dark');
            mode.value = 'dark';
        }
    }
}

</script>

<template>
  <div class="w-full py-5 px-10 duration-500 shadow-md bg-white dark:bg-[#070B1D]">
    <BetweenComponent class="" >
          <LogoImage class="fill-white max-w-36 w-full bg-[lue]" />

      <EndComponent class="b-[red] gap-5" >
        <IconComponent data-tooltip-target="tooltip-arrow" class="relative w-min h-min" @click="setThemeMode" >
          <MoonDuoIcon v-if="mode=='light'" class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
          <SunDuoIcon v-else class="w-7 h-7 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <IconComponent class="w-min h-min" >
          <NotificationDuoIcon class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <IconComponent class="w-min h-min" >
          <ChatDuoIcon class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <div class="flex gap-2" >
          <IconComponent class="text-2xl font-bold h-8 w-8 bg-primary text-white" >
            C
          </IconComponent>
          <div class="flex items-center gap-2" >
            <p class="text-white text-sm font-bold" >Chinonso Xavier</p>
            <CaretDownIcon class="w-4 h-4 fill-white"/>
          </div>
        </div>
      </EndComponent>
    </BetweenComponent>
  </div>
</template>
