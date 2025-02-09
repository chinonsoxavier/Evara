<script  lang="ts" setup >
import EvComponent from './EvComponent.vue';
import CaretRightIcon from './icons/line-icons/CaretRightIcon.vue';
import StartComponent from './StartComponent.vue';
</script>

<template>
    <EvComponent class="bg-lightPrimary " >
        <StartComponent class="gap-1 py-5" >
            <p class="smallText" >Home</p>
            <CaretRightIcon class="w-3 h-3" />
            <p class="smallText" >Shop</p>
        </StartComponent>
    </EvComponent>
</template>