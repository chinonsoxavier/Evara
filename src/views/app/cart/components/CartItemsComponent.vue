<script setup >
import StartComponent from '../../../../components/StartComponent.vue';
import CartItemDetailComponent from './CartItemDetailComponent.vue';

</script>

<template>
    <div class="flex-1 p-5 border min-w-[450px] tablet:min-w-0 shadow-lg bg-white rounded-md" >
        <StartComponent class="" >
            <p class="text-xl font-Heebo text-lightText font-semibold" >Cart(6)</p>    
        </StartComponent>
        <hr class="my-3" >
        <!-- <div ></div> -->
         <CartItemDetailComponent v-bind:key="item" :item="item" v-for="item in Array.from({length:8})" />
    </div>
</template>