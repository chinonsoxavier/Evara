<script  lang="ts" setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import TextOutlineButton from '../../../../components/buttons/TextOutlineButton.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import PlusDuoIcon from '../../../../components/icons/duo-tone/PlusDuoIcon.vue';
import CheckFilledIcon from '../../../../components/icons/filled-icons/CheckFilledIcon.vue';
import CheckoutAddressBookComponent from './CheckoutAddressBookComponent.vue';

</script>

<template>
  <div class="flex-1">
    <div class="bg-white shadow-md rounded-md pb-3 mb-3">
      <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-primary">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium font-medium text-lightText">
            1. CUSTOMER ADDRESS</span
          >
        </span>
      </div>
      <ColumnStartComponent class="p-3" >
    <p class="text-lightText text-small font-semibold font-Heebo" >ADDRESS BOOK(3)</p>
    </ColumnStartComponent>
    <div class="px-3 flex flex-col gap-3" >
        <CheckoutAddressBookComponent/>
        <CheckoutAddressBookComponent/>
        <CheckoutAddressBookComponent/>
    </div>
    <RouterLink to="/checkout/addresses/create">
      <ColumnStartComponent class="px-3 my-3" >
        <TextOutlineButton :icon="PlusDuoIcon" text="ADD ADDRESS" theme="" />
      </ColumnStartComponent>
    </RouterLink>
    <hr>
    <div class="flex items-center justify-end gap-3 px-3 my-3" >
      <RouterLink to="/checkout">
        <TextOutlineButton text="CANCEL" theme=""/>
      </RouterLink>
        <TextButton text="SELECT ADDRESS" theme="primary"/>
    </div>
    </div>
    <div class="bg-white shadow-md rounded-md mb-3" >
         <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-[#a3a3a6]">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium font-medium text-[#a3a3a6]">
            2. CUSTOMER ADDRESS</span
          >
        </span>
      </div>
    </div> 
    <div class="bg-white shadow-md rounded-md mb-3" >
         <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-[#a3a3a6]">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium font-medium text-[#a3a3a6]">
            3. PAYMENT METHOD</span
          >
        </span>
      </div>
    </div>
    <ColumnStartComponent>
      <RouterLink to="/">
        <p class="text-[11px] text-lightText " >Go back and continue shopping</p>
      </RouterLink>
    </ColumnStartComponent>
  </div>
</template>
