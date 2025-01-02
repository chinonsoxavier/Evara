<script setup >
import TextOutlineButton from '../../../../components/buttons/TextOutlineButton.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import EndComponent from '../../../../components/EndComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import { ProductImg } from '../../../../utilities/exports';

</script>

<template>
    <div class="flex items-start gap-2" >
         <ColumnComponent class="flex-1" >
            <div class="gap-2 flex justify-start items-start" >
                <ImageComponent class="max-w-[100px] flex-1 min-w-[70px]" :src="ProductImg" alt="product image" />
                <ColumnStartComponent class="just justify-start items-start gap-1" >
                <p class="text-base font-medium text-lightText whitespace-nowrap" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p class="text-sm font-normal text-[#75757a;]" >Order : 1942821182</p>
               <div class="py-[1px] pt-[1px] text-center px-1 bg-primary text-[11px] font-Heebo font-semibold text-white" ><p>DELIVERED</p> </div>
                <p class="text-medium font-medium text-darkText" >On 01-09</p>
                </ColumnStartComponent>
            </div>
        </ColumnComponent>
        <EndComponent class="w-min whitespace-nowrap" >
            <RouterLink to="/account/order/detail/878447898498984">
                <TextOutlineButton theme="primary" text="SEE DETAILS"/>
            </RouterLink>
            </EndComponent>
    </div>
</template>