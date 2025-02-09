<script  lang="ts" setup >
import TextButton from '../../../../components/buttons/TextButton.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import EndComponent from '../../../../components/EndComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';
import { ProductDetails } from '../../../../utilities/exports';

</script>

<template>
  <div class="border rounded-md shadow-md flex-1">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">
        Pending Reviews (2)
      </p>
    </div>
    <hr />
    <div class="p-3 flex gap-3 items-center justify-center w-full flex-col">
      <div
        class="border flex justify-between rounded-md p-3 items-start w-full flex-1"
      >
        <ColumnComponent class="">
          <StartComponent class="gap-4 mt-3">
            <ImageComponent
              :src="ProductDetails"
              alt="image"
              class="max-w-[100px]"
            />
            <ColumnComponent class="justify-between h-full gap-1">
              <p class="font-Heebo font-normal text-darkText">
                Big Powder Palette With Blush, Highlight & Bronzer
              </p>
              <p class="text-base font-semibold text-darkText font-Heebo mt-3">
                Order n; 1773984794
              </p>
              <P class="text-sm font-medium font-Heebo text-primary"
                >Delivered on 30-09-23</P
              >
            </ColumnComponent>
          </StartComponent>
        </ColumnComponent>
        <EndComponent class="flex-1">
          <ColumnComponent class="gap-1">
            <RouterLink to="/customer/pendingreviews/detail/678908765678">
              <TextButton text="RATE THIS PRODUCT" theme="primary" />
            </RouterLink>
            <!-- <TextOutlineButton text="SEE STATUS HISTORY" theme="primary" /> -->
          </ColumnComponent>
        </EndComponent>
      </div>
      <div
        class="border flex justify-between rounded-md p-3 items-start w-full flex-1"
      >
        <ColumnComponent class="">
          <StartComponent class="gap-4 mt-3">
            <ImageComponent
              :src="ProductDetails"
              alt="image"
              class="max-w-[100px]"
            />
            <ColumnComponent class="justify-between h-full gap-1">
              <p class="font-Heebo font-normal text-darkText">
                Big Powder Palette With Blush, Highlight & Bronzer
              </p>
              <p class="text-base font-semibold text-darkText font-Heebo mt-3">
                Order n; 1773984794
              </p>
              <P class="text-sm font-medium font-Heebo text-primary"
                >Delivered on 30-09-23</P
              >
            </ColumnComponent>
          </StartComponent>
        </ColumnComponent>
        <EndComponent class="flex-1">
          <ColumnComponent class="gap-1">
            <TextButton text="RATE THIS PRODUCT" theme="primary" />
            <!-- <TextOutlineButton text="SEE STATUS HISTORY" theme="primary" /> -->
          </ColumnComponent>
        </EndComponent>
      </div>
    </div>
  </div>
</template>
