<script setup >
import TextButton from '../../../../components/buttons/TextButton.vue';
import TextOutlineButton from '../../../../components/buttons/TextOutlineButton.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import { ProductDetails } from '../../../../utilities/exports';

</script>

<template>
    <div class="p-3 rounded border" >
        <div class="bg-[rd] flex items-center justify-between" >
            <StartComponent class="gap-3 " >
              <RouterLink to="/product-details/7588555" class="max-w-[100px] w-full" >
                <ImageComponent class="" :src="ProductDetails" alt="image" />
                </RouterLink>
                <ColumnStartComponent>
                    <RouterLink to="/product-details/7588555">
                        <p class="baseText" >Simple Casual Comfortable Easy Wear Fancy Shoes</p>
                        </RouterLink>
            <ColumnStartComponent>
            <p class="text-sm text-lightText font-normal" >Size :<span class="font-medium" >EU 44</span></p>
            <p class="text-sm font-medium text-darkText" >$ 89,900</p>
            <StartComponent class="gap-3" >
                <p class="line-through smText" >$ 674,00</p>
                <div class="li smText bg-lightPrimary py-[2px] px-1 text-center" >
                    -27%
                </div>
            </StartComponent>

            </ColumnStartComponent>
                </ColumnStartComponent>
            </StartComponent>
            <div class=" h-[100%] flex flex-col  flex-1 gap-5" >
            <TextButton text="BUY NOW" theme="primary"/>
            <TextOutlineButton text="REMOVE" :icon="TrashBinDuoIcon" iconPosition="left" theme="primary"/>
            </div>
        </div>
    </div>
</template>