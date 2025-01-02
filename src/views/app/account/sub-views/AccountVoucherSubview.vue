<script setup>
import CenterComponent from '../../../../components/CenterComponent.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <div class="bg-white shadow-md flex-1 border">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">Voucher</p>
    </div>
    <hr />
    <CenterComponent class="px-3" >
    <StartComponent class="gap-3 pt-3 border-b">
      <RouterLink
        to="/customer/account/coupon/index"
        exact-active-class="active"
        class="px-1"
      >
        <p
          class="text-darkText font-Heebo text-base font-medium hover:text-primary duration-500"
        >
          ACTIVE
        </p> </RouterLink
      ><RouterLink
        to="/customer/account/coupon/inactive"
        exact-active-class="active"
        class="px-1"
      >
        <p
          class="text-darkText font-Heebo text-base font-medium hover:text-primary duration-500"
        >
          INACTIVE
        </p>
      </RouterLink>
    </StartComponent>
        </CenterComponent>

    <StartComponent class="p-3" >
        <RouterView/>
    </StartComponent>
  </div>
</template>

<style scoped>
a.active {
  @apply border-b-2 border-b-primary duration-500;
}
</style>
