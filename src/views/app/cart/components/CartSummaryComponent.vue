<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';

</script>

<template>
  <div class="max-w-[300px] border flex-1 bg-white p-5 rounded-md shadow-lg">
    <p class="text-normal text-lightText font-medium font-Heebo pb-2">CART SUMMARY</p>
    <hr  />
    <div class="flex items-start justify-between py-2" >
        <span>
            <p class="text-lightText text-base font-Heebo font-medium" >Subtotal</p>
            <p class="text-xs font-light font-Heebo pt-1" >Delivery fees not included yet.</p>
        </span>
        <p class="font-semibold text-lg text-lightText whitespace-nowrap" >$ 52,400</p>
    </div>
    <hr>
    <CenterComponent class="pt-2" >
      <RouterLink to="/checkout">
        <TextButton theme="primary" class="w-full shadow rounded font-Heebo" text="CHECKOUT($ 25,900)" />
      </RouterLink>
    </CenterComponent>
  </div>
</template>
