<script setup>
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import { ProductDetails } from '../../../../utilities/exports';

</script>

<template>
  <div class="flex-1 shadow-md max-w-[470px] pb-5 h-full">
    <ColumnComponent class="gap-3 h-full" >
      <ImageComponent class="w-auto" :src="ProductDetails" alt="Product details" />
      <StartComponent class="gap-3" >
        <ImageComponent class="max-w-20" :src="ProductDetails" alt="Product details" />
        <ImageComponent class="max-w-20" :src="ProductDetails" alt="Product details" />
        <ImageComponent class="max-w-20" :src="ProductDetails" alt="Product details" />
      </StartComponent>
    </ColumnComponent>
  </div>
</template>
