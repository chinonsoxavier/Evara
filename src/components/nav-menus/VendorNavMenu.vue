<script setup>
import { ref } from "vue";
import BetweenComponent from "../BetweenComponent.vue";
import EndComponent from "../EndComponent.vue";
import IconComponent from "../IconComponent.vue";
import MoonDuoIcon from "../icons/duo-tone/MoonDuoIcon.vue";
import SunDuoIcon from "../icons/duo-tone/SunDuoIcon.vue";
import NotificationDuoIcon from "../icons/duo-tone/NotificationDuoIcon.vue";
import ChatDuoIcon from "../icons/duo-tone/ChatDuoIcon.vue";

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
  <div class="w-full py-4 px-4 duration-500 shadow-md bg-white dark:bg-[#0a2744]">
    <BetweenComponent>
      <p class="lgText">
        <span class="text-large text-darkText dark:text-white font-semibold">Chinonso</span>
      </p>

      <EndComponent class="gap-2" >
        <IconComponent data-tooltip-target="tooltip-arrow" class="relative" @click="setThemeMode" >
          <MoonDuoIcon v-if="mode=='light'" class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
          <SunDuoIcon v-else class="w-7 h-7 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <IconComponent>
          <NotificationDuoIcon class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <IconComponent>
          <ChatDuoIcon class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
        <IconComponent>
          <SettingsDuoIcon class="w-6 h-6 duration-500 hover:fill-primary fill-darkText dark:fill-white" />
        </IconComponent>
      </EndComponent>
    </BetweenComponent>
  </div>
</template>
