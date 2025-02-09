<script setup >
import { defineProps } from 'vue';
defineProps({
    rounded: {
        type:Boolean
    }
})
</script>

<template>
    <div class="w-full h-full" :class="[rounded?'rounded-full':'']" >
        <img class="w-full  h-full object-cover " :class="[rounded ?'rounded-full':'']" v-bind="$attrs"/>
    </div>
</template>