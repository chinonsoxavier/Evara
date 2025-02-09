<script lang="ts" setup >

// const props = defi

 const emit = defineEmits(['click'])

</script>

<template>
    <div v-on:click="emit('click')" class="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer" >
        <slot />
    </div>
</template>
<script setup ></script>