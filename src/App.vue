<script setup lang="ts">
import { onMounted } from 'vue';
import EvModalView from './components/modals/EvModalView.vue';


onMounted(() => {
  if (localStorage.getItem("color-theme") === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark")
  }
});

</script>
<template>
  <section class="relative" >
    <EvModalView/>
    <RouterView />
  </section>
</template>
