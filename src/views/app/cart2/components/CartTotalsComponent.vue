<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ShoppingCartDuoIcon from '../../../../components/icons/duo-tone/ShoppingCartDuoIcon.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <ColumnComponent class="border border-gray-300 p-3 h-min flex-1">
    <p
      class="text-large font-Heebo font-semibold tracking-wider text-lightText"
    >
      Cart Totals
    </p>
    <CenterComponent class="border flex-col border-gray-300 border-collapse mt-3" >
        <CenterComponent class="border-b border-b-gray-300 border-collapse" >
            <StartComponent class="flex-1 mediumText border-r border-collapse border-r-gray-300 p-2" >
                <p>Cart Subtotal</p>
            </StartComponent>  <StartComponent class="flex-1" >
                <p class="text-primary font-semibold px-2" >$2344.00</p>
            </StartComponent>
        </CenterComponent>   <CenterComponent class="border-b border-b-gray-300 border-collapse" >
            <StartComponent class="flex-1 mediumText border-r border-collapse border-r-gray-300 p-2" >
                <p>Cart Subtotal</p>
            </StartComponent>  <StartComponent class="flex-1" >
                <p class="text-primary font-semibold px-2" >$2344.00</p>
            </StartComponent>
        </CenterComponent>   <CenterComponent class="border-b border-b-gray-300 border-collapse" >
            <StartComponent class="flex-1 mediumText border-r border-collapse border-r-gray-300 p-2" >
                <p>Cart Subtotal</p>
            </StartComponent>  <StartComponent class="flex-1" >
                <p class="text-primary font-semibold px-2" >$2344.00</p>
            </StartComponent>
        </CenterComponent>
    </CenterComponent>
    <StartComponent class="w-min py-6" >
        <TextButton text="Proceed to checkout" theme="primary" :icon="ShoppingCartDuoIcon" />
    </StartComponent>
  </ColumnComponent>
</template>
