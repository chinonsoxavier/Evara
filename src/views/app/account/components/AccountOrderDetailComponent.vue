<script setup >
import { ProductDetails } from '@/utilities/exports';
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
</script>

<template>
    <div class="p-3 rounded-md border flex-1 w-full" >
    <BetweenComponent>
        <ColumnComponent class="" >
            <StartComponent class="gap-1" >

               <div class="py-[2px] px-1 bg-[#6dbd28] rounded-sm" >
                <p class="text-xs font-medium  text-white font-Heebo" >DELIVERED</p>
               </div> <div class="py-[2px] px-1 bg-[#ff550c] rounded " >
                <p class="text-xs font-medium  font-Heebo text-white" >NON-RETURNABLE</p>
               </div>
            </StartComponent>
            <StartComponent class="my-1" >
                <p class="text-sm font-semibold text-darkText" >On 01-09</p>
            </StartComponent>
            <StartComponent class="gap-4 mt-3" >
                <ImageComponent :src="ProductDetails" alt="image" class="max-w-[100px]" />
                <ColumnComponent class="justify-between h-full gap-2" >
                <p class="font-Heebo font-normal text-darkText" >Big Powder Palette With Blush, Highlight & Bronzer</p>
                <p class="smallText font-Heebo" >QTY: <span class="font-semibold ml-1" >1</span></p>
                <P class="text-base font-medium font-Heebo text-darkText" >₦ 4,199<span class="ml-3 font-nromal line-through" >₦ 10,000</span></P>
                </ColumnComponent>
            </StartComponent>
        </ColumnComponent>
        <EndComponent class="flex-1" >
            <ColumnComponent class="gap-1" >
                <TextButton text="BUY AGAIN" theme="primary" />
                <!-- <TextOutlineButton text="SEE STATUS HISTORY" theme="primary" /> -->
            </ColumnComponent>
        </EndComponent>
    </BetweenComponent>
    </div>
</template>