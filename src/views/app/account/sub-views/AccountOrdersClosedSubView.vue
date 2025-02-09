<script  lang="ts" setup>
import ColumnComponent from "../../../../components/ColumnComponent.vue";
import StartComponent from "../../../../components/StartComponent.vue";
import AccountOrdersComponent from "../components/AccountOrdersComponent.vue";
</script>

<template>
  <div class="border rounded-md shadow-md flex-1">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">Orders</p>
    </div>
    <hr />
    <StartComponent class="gap-2 border-b" >
      <StartComponent class="p-3  w-min">
        <RouterLink to="/account/order/index">
          <p class="font-Heebo mediumText text-lightText font-medium whitespace-nowrap">
            ONGOING/DELIVERED (11)
          </p>
        </RouterLink>
      </StartComponent>
      <StartComponent class="p-3 border-b-2 border-b-primary w-min">
        <RouterLink to='/account/order/closed'>
          <p class="font-Heebo mediumText text-darkText font-semibold whitespace-nowrap">
            CANCELLED/RETURNED (16)
          </p>
        </RouterLink>
      </StartComponent>
      <hr>
    </StartComponent>
    <ColumnComponent class="p-3 gap-3" >
      <AccountOrdersComponent  />
      <AccountOrdersComponent  />
      <AccountOrdersComponent  />
      <AccountOrdersComponent  />
  </ColumnComponent>
  </div>
</template>