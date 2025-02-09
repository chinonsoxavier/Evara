<script lang="ts" setup >
import CenterComponent from './CenterComponent.vue';
</script>

<template>
    <CenterComponent class="w-full" >
        <div class="max_width w-full h-full" >
            <slot/>
        </div>
    </CenterComponent>
</template>