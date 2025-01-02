<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import IconComponent from '../../../../components/IconComponent.vue';
import PlusDuoIcon from '../../../../components/icons/duo-tone/PlusDuoIcon.vue';
import ShoppingBagIcon from '../../../../components/icons/duo-tone/ShoppingBagIcon.vue';
import ShuffleDuoIcon from '../../../../components/icons/duo-tone/ShuffleDuoIcon.vue';
import SubtractDuoIcon from '../../../../components/icons/duo-tone/SubtractDuoIcon.vue';
import TrashBinDuoIcon from '../../../../components/icons/duo-tone/TrashBinDuoIcon.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import { ProductImg } from '../../../../utilities/exports';

</script>

<template>
  <div>
    <table class="w-full">
      <colgroup></colgroup>
      <tr class="smTet font-normal w-full border-b border-t">
        <th class="py-2 font-medium">Image</th>
        <th class="w-[28%] font-medium">Name</th>
        <th class="font-medium" >Price</th>
        <th class="font-medium" >Quantity</th>
        <th class="font-medium" >Subtotal</th>
      </tr>
      <tr class="border-b">
        <td class="p-4 gap-3">
          <CenterComponent>
            <ImageComponent
              :src="ProductImg"
              alt="product image"
              class="max-w-20"
            />
          </CenterComponent>
        </td>
        <td class="p-4">
          <ColumnComponent class="gap-2">
            <p class="text-base text-center font-semibold text-primary">
              Lorem, ipsum doipisicing.
            </p>
            <p
              class="smallTet text-lightText text-ns text-center font-medium text-sm"
            >
              Lorem ipsum dolor icing elit. Id vel eius corrupti.
            </p>
          </ColumnComponent>
        </td>
        <td class="text-center"><p class="smText text-center">$233.33</p></td>
        <td class="text-center">
          <CenterComponent class="gap-3">
            <div class="bg-primary py-1 px-2 fill-white rounded cursor-pointer" ><PlusDuoIcon class="w-4 h-4" /></div>
            <p class="smallText">1</p>
                         <div class="bg-primary py-1 px-2 fill-white rounded cursor-pointer" ><SubtractDuoIcon class="w-4 h-4" /></div>

          </CenterComponent>
        </td>
        <td class="">
          <CenterComponent>
            <IconComponent>
              <TrashBinDuoIcon class="w-5 h-5" />
            </IconComponent>
          </CenterComponent>
        </td>
      </tr>
      <tr class="border-b">
        <td class="p-4 gap-3">
          <CenterComponent>
            <ImageComponent
              :src="ProductImg"
              alt="product image"
              class="max-w-20"
            />
          </CenterComponent>
        </td>
        <td class="p-4">
          <ColumnComponent class="gap-2">
            <p class="text-base text-center font-semibold text-primary">
              Lorem, ipsum doipisicing.
            </p>
            <p
              class="smallTet text-lightText text-ns text-center font-medium text-sm"
            >
              Lorem ipsum dolor icing elit. Id vel eius corrupti.
            </p>
          </ColumnComponent>
        </td>
        <td class="text-center"><p class="smText text-center">$233.33</p></td>
        <td>
        <CenterComponent class="gap-3">
          <TextButton text="" :icon="SubtractDuoIcon" theme="primary" />
          <p class="smallText">1</p>
          <TextButton
            class="text-5xl"
            :icon="PlusDuoIcon"
            text=""
            theme="primary"
          />
        </CenterComponent>
        </td>
        <td class="">
          <CenterComponent>
            <IconComponent>
              <TrashBinDuoIcon class="w-5 h-5" />
            </IconComponent>
          </CenterComponent>
        </td>
      </tr>
      <tr class="border-b">
        <td class="p-4 gap-3">
          <CenterComponent>
            <ImageComponent
              :src="ProductImg"
              alt="product image"
              class="max-w-20"
            />
          </CenterComponent>
        </td>
        <td class="p-4">
          <ColumnComponent class="gap-2">
            <p class="text-base text-center font-semibold text-primary">
              Lorem, ipsum doipisicing.
            </p>
            <p
              class="smallTet text-lightText text-ns text-center font-medium text-sm"
            >
              Lorem ipsum dolor icing elit. Id vel eius corrupti.
            </p>
          </ColumnComponent>
        </td>
        <td class="text-center"><p class="smText text-center">$233.33</p></td>
        <td>
        <CenterComponent class="gap-3">
          <TextButton text="" :icon="SubtractDuoIcon" theme="primary" />
          <p class="smallText">1</p>
          <TextButton
            class="text-5xl"
            :icon="PlusDuoIcon"
            text=""
            theme="primary"
          />
        </CenterComponent>
                </td>

        <td class="">
          <CenterComponent>
            <IconComponent>
              <TrashBinDuoIcon class="w-5 h-5" />
            </IconComponent>
          </CenterComponent>
        </td>
      </tr>
    </table>
    <EndComponent class="gap-2 py-8">
      <TextButton
        class="duration-500"
        theme="primary"
        :icon="ShuffleDuoIcon"
        text="Update Cart"
      />
      <TextButton
        theme="primary"
        :icon="ShoppingBagIcon"
        text="Continue Shopping"
      />
    </EndComponent>
  </div>
</template>
