<script  lang="ts" setup >
import { ProductImg } from '../utilities/exports';
import CenterComponent from './CenterComponent.vue';
import ColumnComponent from './ColumnComponent.vue';
import ImageComponent from './ImageComponent.vue';

</script>

<template>
          <CenterComponent class="py-5 gap-3 scale-95 hover:scale-100 duration-500 cursor-pointer">
            <ImageComponent class="max-w-[70px]" :src="ProductImg" alt="Product image" />
            <ColumnComponent>
              <p class="text-lightText Heebo font-semibold tracking-wider text-normal text-ellipsis whitespace-nowrap">
                Foloral Paint Shirt
              </p>
              <p class="Heebo">
                <span class="text-primary font-semibold text-normal mr-2"
                  >$234.45</span
                ><span class="text-lightText text-sm font-semibold line-through"
                  >$290.45</span
                >
              </p>
            </ColumnComponent>
          </CenterComponent>
</template>