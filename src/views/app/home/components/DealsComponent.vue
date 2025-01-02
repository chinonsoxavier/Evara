<script setup>
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import EvComponent from '../../../../components/EvComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import { deals1, deals2 } from '../../../../utilities/exports';

</script>

<template>
  <EvComponent class="py-10">
    <BetweenComponent class="gap-4 flex-wrap"   >
      <ColumnComponent :style="{backgroundImage:`url(${deals1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}"
        class="flex-col  p-6 flex-1 gap-3"
      >
        <ColumnComponent>
          <p class="text-xl tablet:text-lg text-primary font-semibold">Deal of the Day</p>
          <p class="font-semibold text-lightText text-sm">
            Limited Quantities
          </p>
        </ColumnComponent>
        <ColumnComponent>
          <p class="text-normal font-semibold text-lightText">
            Summer Collection New <br> Mordern Design
          </p>
        </ColumnComponent>
        <ColumnComponent>
          <p class="text-normal font-primary font-semibold">
            <span class="text-red-500 mr-2 tablet:text-base text-lg">$178.00</span>
            <span class="text-gray-500  line-through tablet:text-sm text-base">$256.00</span>
          </p>
        </ColumnComponent>
        <ColumnComponent class="gap-[14px] ">
          <p class="text-normal font-medium text-lightText">
            Hurry Up! Offer Ends In:
          </p>
          <StartComponent class="w-min mt-1 gap-3">
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Days</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Hours</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Mins</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Sec</p>
            </ColumnComponent>
          </StartComponent>
          <TextButton theme="white" class="w-min" />
        </ColumnComponent>
      </ColumnComponent>
      <ColumnComponent :style="{backgroundImage:`url(${deals2})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}"
        class="flex-col  p-6 flex-1 gap-3"
      >
        <ColumnComponent>
          <p class="text-xl tablet:text-base text-primary font-semibold">Women Clothing</p>
          <p class="font-semibold text-lightText text-sm">
            Shirt & Bag
          </p>
        </ColumnComponent>
        <ColumnComponent>
          <p class="text-normal font-semibold text-lightText">
            Try Something new on <br> vacation
          </p>
        </ColumnComponent>
        <ColumnComponent>
          <p class="text-normal font-primary font-semibold">
            <span class="text-red-500 mr-2 tablet:text-base text-lg">$139.00</span>
            <span class="text-gray-500 line-through tablet:text-sm text-base">$160.00</span>
          </p>
        </ColumnComponent>
        <ColumnComponent class="gap-[14px] ">
          <p class="text-normal font-medium text-lightText">
            Hurry Up! Offer Ends In:
          </p>
          <StartComponent class="w-min mt-1 gap-3">
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Days</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Hours</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Mins</p>
            </ColumnComponent>
            :
            <ColumnComponent class="gap-1" >
              <CenterComponent class="bg-primary p-1 h-8 w-8 text-white font-medium">
                <p class="text-lg tablet:text-base">02</p>
              </CenterComponent>
              <p class="text-small font-medium text-lightText">Sec</p>
            </ColumnComponent>
          </StartComponent>
          <TextButton theme="white" class="w-min" />
        </ColumnComponent>
      </ColumnComponent>
    </BetweenComponent>
  </EvComponent>
</template>
