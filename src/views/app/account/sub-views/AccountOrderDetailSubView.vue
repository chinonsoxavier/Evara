<script setup>
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import FlexComponent from "../../../../components/FlexComponent.vue";
import IconComponent from "../../../../components/IconComponent.vue";
import CaretLeftIcon from "../../../../components/icons/line-icons/CaretLeftIcon.vue";
import StartComponent from "../../../../components/StartComponent.vue";
import AccountOrderDetailComponent from "../components/AccountOrderDetailComponent.vue";
</script>

<template>
  <div class="border rounded-md shadow-md flex-1">
    <div class="px-3 py-3">
      <StartComponent class="">
        <RouterLink to="/account/order">
          <IconComponent>
            <CaretLeftIcon class="w-6 h-6" />
          </IconComponent>
        </RouterLink>
        <p class="text-large text-darkText font-medium font-Heebo">
          Order Details
        </p>
      </StartComponent>
    </div>
    <hr />
    <ColumnStartComponent class="p-3">
      <p class="text-normal font-medium text-darkText font-Heebo">
        Order nº 1942821182
      </p>
      <p class="text-lightText text-small font-normal">3 Items</p>
      <p class="text-lightText text-small font-normal">Placed on 30-08-2024</p>
      <p class="text-lightText text-small font-normal">Total: ₦ 8,168</p>
      <hr />
    </ColumnStartComponent>
    <div class="p-3">
      <hr />
      <StartComponent class="my-2">
        <p class="text-large text-darkText font-medium font-Heebo">
          Order Details
        </p>
      </StartComponent>
      <ColumnStartComponent class="gap-3 w-full">
        <AccountOrderDetailComponent />
        <AccountOrderDetailComponent />
        <AccountOrderDetailComponent />
        <AccountOrderDetailComponent />
        <AccountOrderDetailComponent />
      </ColumnStartComponent>
      <FlexComponent class="flex items-start justify-between my-3 gap-3">
        <div class="rounded-md border flex-1">
          <StartComponent class="p-3">
            <p
              class="font-Heebo text-darkText text-medium font-medium capitalize"
            >
              PAYMENT INFORMATION
            </p>
          </StartComponent>
          <hr />
          <ColumnStartComponent class="p-3">
            <p class="text-darkText font-medium text-normal font-Heebo">
              Payment Method
            </p>
            <p class="text-lightText text-sm font-normal">
              Tap & Relax, Pay with Bank Transfer on Delivery
            </p>
          </ColumnStartComponent>
          <ColumnStartComponent class="p-3 gap-1">
            <p class="text-darkText font-medium text-normal font-Heebo">
              Payment Details
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Items total: ₦ 12,188
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Delivery Fees: ₦ 1,350
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Coupon Discount: ₦ -5,370
            </p>
            <p class="text-darkText text-sm font-medium font-Heebo">
              Total: ₦ 8,188
            </p>
          </ColumnStartComponent>
        </div>
        <div class="rounded-md border flex-1">
          <StartComponent class="p-3">
            <p
              class="font-Heebo text-darkText text-medium font-medium capitalize"
            >
              DELIVERY INFORMATION
            </p>
          </StartComponent>
          <hr />
          <ColumnStartComponent class="p-3">
            <p class="text-darkText font-medium text-normal font-Heebo">
              Delivery Method
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Pickup Station
            </p>
          </ColumnStartComponent>
          <ColumnStartComponent class="p-3 gap-1">
            <p class="text-darkText font-medium text-normal font-Heebo">
              Pick-up Station Address
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Evara Pick-up Station Apapa
            </p>
            <p class="text-lightText font-Heebo text-sm font-normal">
              Lagos,Nigeria
            </p>
          </ColumnStartComponent>
          <ColumnStartComponent class="my-1 px-3">
            <p class="text-darkText text-sm font-normal font-Heebo">
              Opening Hours:
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Mon-Fri 8AM-6PM; Sat 8am- 5pm
            </p>
          </ColumnStartComponent>
          <ColumnStartComponent class="p-3">
            <p class="text-darkText text-base font-medium font-Heebo">
              Shipping Details:
            </p>
            <p class="text-darkText text-sm font-medium font-Heebo my-1 ">Shipment</p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Pickup Station Fulfilled by Jeto
            </p>
            <p class="text-lightText text-sm font-normal font-Heebo">
              Delivery between 03 September and 04 September.
            </p>
          </ColumnStartComponent>
        </div>
      </FlexComponent>
    </div>
  </div>
</template>
