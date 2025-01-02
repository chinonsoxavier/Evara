<script setup >
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import EndComponent from '../../../../components/EndComponent.vue';
import IconComponent from '../../../../components/IconComponent.vue';
import InfoDuoIcon from '../../../../components/icons/duo-tone/InfoDuoIcon.vue';
import PlusDuoIcon from '../../../../components/icons/duo-tone/PlusDuoIcon.vue';
import SubtractDuoIcon from '../../../../components/icons/duo-tone/SubtractDuoIcon.vue';
import TrashBinDuoIcon from '../../../../components/icons/duo-tone/TrashBinDuoIcon.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import { ProductImg } from '../../../../utilities/exports';


</script>

<template>
    <div class="border-b" >
    <div class="py-4 h-full flex-wrap gap-5 flex items-start justify-between" >
        <ColumnComponent class="" >
            <div class="gap-2 flex justify-start items-start" >
                <ImageComponent class="max-w-[100px]" :src="ProductImg" alt="product image" />
                <ColumnStartComponent class="text-left justify-start items-start gap-1" >
                <p class="text-base font-medium tablet:text-sm" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p class="text-sm tablet:text-xs" >Seller : <span class="font-medium" >Serami beauty Store</span></p>
                <p class="text-small tablet:text-[11px]" >In Stock</p>
                <p class="flex items-center justify-start gap-1" >
                    <span>
                        <InfoDuoIcon class="w-3 h-3 fill-red-600" />
                    </span>
                    <span class="text-small tablet:text-[11px] text-red-600" >9 items left</span>
                </p>
                <p class="text-small  tablet:text-[11px] font-medium text-orange-400" >Few Units left</p>
               
                </ColumnStartComponent>
            </div>
        </ColumnComponent>
            <div class="flex items-end flex-col gap-1" >
                <p class="text-xl tablet:text-lg font-semibold justify-between mb-[2px]" >$ 590.00</p>
                <p class="flex gap-3 items-center" >
                    <span class="line-through tablet:text-sm text-lightText font-medium" >$ 500.05</span>
                    <span class="bg-primary rounded  text-white p-1 font-semibold text-xs" >-40%</span>
                </p>
            </div>
    </div>
    <BetweenComponent>
 <button class="flex items-center text-sm hover:fill-white hover:text-white duration-500 fill-red-400 text-red-400 hover:bg-red-400   py-[6px] px-3 rounded gap-1 font-semibold " >
                    <IconComponent class="w-4 h-4" >
                        <TrashBinDuoIcon class="w-4 h-4"/>
                    </IconComponent>
                    REMOVE
                </button>
                 <EndComponent class="mt- text-sm gap-3" >
                <div class="w-6 flex items-center justify-center bg-primary rounded h-5 fill-white" >
                    <SubtractDuoIcon class="w-3 h-3" />
                </div>
                3
                <div class="w-6 h-5 flex items-center justify-center bg-primary rounded fill-white" >
                    <PlusDuoIcon class="w-3 h-3" />
                </div>
            </EndComponent>
    </BetweenComponent>
    </div>
</template>