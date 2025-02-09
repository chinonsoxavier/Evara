<script  lang="ts" setup >

import { ref } from "vue";

const selectedDeliveryMethod = ref("Home");

import { useRoute } from "vue-router";
import CheckFilledIcon from "../../../../components/icons/filled-icons/CheckFilledIcon.vue";
import CaretRightIcon from "../../../../components/icons/line-icons/CaretRightIcon.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import FlexComponent from "../../../../components/FlexComponent.vue";
import BetweenComponent from "../../../../components/BetweenComponent.vue";
import StartComponent from "../../../../components/StartComponent.vue";
import ImageComponent from "../../../../components/ImageComponent.vue";
import { ProductImg } from "../../../../utilities/exports";
import TextButton from "../../../../components/buttons/TextButton.vue";
import CenterComponent from "../../../../components/CenterComponent.vue";

const route = useRoute();

const getCurrentRoute = () => {
  return route.name;
};
</script>

<template>
  <div class="flex-1 flex-col rounded-md border flex items-start gap-3 relative">
    <div class="rounded-md bg-white shadow-lg w-full">
      <div class="flex items-center justify-between py-3 px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-primary">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium"> 1. CUSTOMER ADDRESS</span>
        </span>
        <RouterLink to='/checkout/addresses'>
          <span class="flex items-center justify-center cursor-pointer">
            <span class="text-sm font-medium text-primary font-Heebo"
            >Change</span
            >
            <span class="fill-primary">
              <CaretRightIcon class="w-[14px] h-[14px]" />
            </span>
          </span>
        </RouterLink>
      </div>
      <div class="py-3 px-3">
        <ColumnStartComponent class="gap-1">
          <p class="smText font-Heebo">Xavier Chnonso</p>
          <p class="text-small font-light text-lightText font-Heebo">
            78 Adekeye Street | Lagos - Apapa (Ajegunle) | +2349168945115
          </p>
        </ColumnStartComponent>
      </div>
    </div>
    <div class="rounded-md bg-white shadow-lg w-full">
      <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-primary">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium"> 2. DELIVERY DETAILS</span>
        </span>
        <RouterLink to="/checkout/shipping-options">
          <span class="flex items-center justify-center cursor-pointer">
            <span class="text-sm font-medium text-primary font-Heebo"
            >Change</span
            >
            <span class="fill-primary">
              <CaretRightIcon class="w-[14px] h-[14px]" />
            </span>
          </span>
        </RouterLink>
      </div>
      <div class="py-3 px-3">
        <ColumnStartComponent
          class="gap-2"
          v-if="getCurrentRoute() == 'checkout-shipping-options'"
        >
          <div class="flex gap-1 items-start">
            <span>
              <input
                name="deliveryMethod"
                value="Home"
                v-model="selectedDeliveryMethod"
                type="radio"
                class="w-4 h-4"
              />
            </span>
            <span>
              <p class="text-sm font-medium font-Heebo text-lightText">
                Home Delivery (from <span class="font-semibold">$ 245,00</span>)
              </p>
              <p class="text-small font-medium text-lightText font-Heebo">
                Delivery Between
                <span class="font-semibold text-lightText">24 November</span> and
                <span class="font-semibold text-lightText">26 November</span>
              </p>
            </span>
          </div>
          <div class="flex gap-1 items-start">
            <span>
              <input
                name="deliveryMethod"
                value="Pickup"
                v-model="selectedDeliveryMethod"
                type="radio"
                class="w-4 h-4"
              />
            </span>
            <span>
              <p class="text-sm font-medium text-lightText font-Heebo">
                Pickup Station (from
                <span class="font-semibold">$ 105,00</span>)
              </p>
              <p class="text-small font-medium text-lightText font-Heebo">
                Pickup Available Between
                <span class="font-semibold text-textLight">24 November</span> and
                <span class="text-lightText font-semibold">26 November</span>
              </p>
            </span>
          </div>
          <Transition name="slide-fade" >
          <div
            class="border rounded-md w-full"
            v-if="selectedDeliveryMethod == 'Pickup'"
          >
            <div class="flex items-center justify-between py-1 bg[red] px-3">
              <span class="font-Heebo text-small font-semibold text-lightText">
                Pickup Station
              </span>
              
            </div>
            <hr class="mb-2" />
            <ColumnStartComponent class="smallText px-3 pb-2">
              <p class="font-Heebo">Evara Pickup Station</p>
              <p class="font-Heebo font-light">
                Evara Pickup Station Ajegunle Apapa Lagos Nigeria
              </p>
            </ColumnStartComponent>
          </div>
          </Transition>
        </ColumnStartComponent>
        <ColumnStartComponent v-else>
          <div class="px-3">
            <ColumnStartComponent class="gap-1">
              <p class="smText font-Heebo">Pickup</p>
              <p class="text-small font-light text-lightText font-Heebo">
                Delivery Between
                <span class="font-medium text-lightText">24 November</span> and
                <span class="font-medium text-lightText">26 November</span>
              </p>
            </ColumnStartComponent>
          </div>
        </ColumnStartComponent>
        <FlexComponent class="gap-3 flex-wrap mt-3">
          <div class="flex-1 mt-3 min-w-[300px] basis-1/3 max-w-[50%]">
            <BetweenComponent class="px-2 my-1">
              <p class="text-lightText text-sm font-medium font-Heebo">
                Shipment 1/6
              </p>
              <p class="text-lightText font-light text-small font-Heebo">
                Fulfilled by Evara
              </p>
            </BetweenComponent>
            <div class="border rounded-md">
              <ColumnStartComponent class="px-3 border-b py-2">
                <p class="font-Heebo text-medium text-lightText font-medium">
                  Pick-Up Station
                </p>
                <p class="text-small font-medium text-lightText font-Heebo">
                  Pickup Available Between
                  <span class="font-semibold text-lightText">24 November</span> and
                  <span class="text-lightText font-semibold">26 November</span>
                </p>
              </ColumnStartComponent>
              <div class="px-3 py-2 flex flex-col gap-2">
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
              </div>
            </div>
          </div>
          <div class="flex-1 mt-3 min-w-[300px] basis-1/3 max-w-[50%]">
            <BetweenComponent class="px-2 my-1">
              <p class="text-lightText text-sm font-medium font-Heebo">
                Shipment 1/6
              </p>
              <p class="text-lightText font-light text-small font-Heebo">
                Fulfilled by Evara
              </p>
            </BetweenComponent>
            <div class="border rounded-md">
              <ColumnStartComponent class="px-3 border-b py-2">
                <p class="font-Heebo text-medium text-lightText font-medium">
                  Pick-Up Station
                </p>
                <p class="text-small font-medium text-lightText font-Heebo">
                  Pickup Available Between
                  <span class="font-semibold text-lightText">24 November</span> and
                  <span class="text-lightText font-semibold">26 November</span>
                </p>
              </ColumnStartComponent>
              <div class="px-3 py-2 flex flex-col gap-2">
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
              </div>
            </div>
          </div>
          <div class="flex-1 mt-3 min-w-[300px] basis-1/3 max-w-[50%]">
            <BetweenComponent class="px-2 my-1">
              <p class="text-lightText text-sm font-medium font-Heebo">
                Shipment 1/6
              </p>
              <p class="text-lightText font-light text-small font-Heebo">
                Fulfilled by Evara
              </p>
            </BetweenComponent>
            <div class="border rounded-md">
              <ColumnStartComponent class="px-3 border-b py-2">
                <p class="font-Heebo text-medium text-lightText font-medium">
                  Pick-Up Station
                </p>
                <p class="text-small font-medium text-lightText font-Heebo">
                  Pickup Available Between
                  <span class="font-semibold text-lightText">24 November</span> and
                  <span class="text-lightText font-semibold">26 November</span>
                </p>
              </ColumnStartComponent>
              <div class="px-3 py-2 flex flex-col gap-2">
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
                <StartComponent class="flex gap-2">
                  <ImageComponent
                    :src="ProductImg"
                    alt="product image"
                    class="max-w-[50px]"
                  />
                  <div class="flex-col flex justify-between items-start">
                    <p class="font-Heebo font-normal text-small text-lightText">
                      Bluetooth Speaker Wireless Charger RGB Atmosphere Lamp
                    </p>
                    <p class="font-Heebo text-small text-lightText">QTY . 1</p>
                  </div>
                </StartComponent>
              </div>
            </div>
          </div>
        </FlexComponent>
        <div class="my-6 flex items-end justify-end" v-if="getCurrentRoute() == 'checkout-shipping-options'">
          <TextButton theme="primary" text="COMFIRM DELIVERY DETAILS" />
        </div>
        <CenterComponent
          v-else
          class="my-5"
        >
          <TextButton theme="" text="MODIFY CART" />
        </CenterComponent>
      </div>
    </div>
    <div class="rounded-md bg-white shadow-lg w-full">
      <div class="flex items-center justify-between py-3 bg[red] px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-primary">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium"> 3. PAYMENT METHODS</span>
        </span>
        <RouterLink to="/checkout/payment-options">
          <span class="flex items-center justify-center cursor-pointer">
            <span class="text-sm font-medium text-primary font-Heebo"
            >Change</span
            >
            <span class="fill-primary">
              <CaretRightIcon class="w-[14px] h-[14px]" />
            </span>
          </span>
        </RouterLink>
      </div>
      <div class="py-3 px-3">
        <ColumnStartComponent class="gap-1">
          <p class="smText font-Heebo">Buy Now,Pay Later - EasyBuy</p>
          <p class="text-small font-light text-lightText font-Heebo">
            To use this option, you must be registered with Easybuy.
          </p>
        </ColumnStartComponent>
      </div>
    </div>
  </div>
</template>

<style scoped >
.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>