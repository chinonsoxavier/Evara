<script setup>
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import MoneyWavyDuoIcon from '../../../../components/icons/duo-tone/MoneyWavyDuoIcon.vue';
import CheckFilledIcon from '../../../../components/icons/filled-icons/CheckFilledIcon.vue';
import CaretLeftIcon from '../../../../components/icons/line-icons/CaretLeftIcon.vue';
import CaretRightIcon from '../../../../components/icons/line-icons/CaretRightIcon.vue';
import EvRadioInput from '../../../../components/inputs/EvRadioInput.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <div class="flex-1 flex-col flex gap-3">
    <div class="rounded-md bg-white shadow-lg w-full">
      <div class="flex items-center justify-between py-3 px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-primary">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium"> 1. CUSTOMER ADDRESS</span>
        </span>
        <RouterLink to="/checkout/addresses">

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
      <div class="flex items-center justify-between py-3 px-3 border-b">
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
        <ColumnStartComponent class="gap-1">
          <p class="smText font-Heebo">Pick-up Station</p>
          <p class="text-small font-light text-lightText font-Heebo">
            Delivery Between
            <span class="font-semibold text-lightText">24 November</span> and
            <span class="font-semibold text-lightText">26 November</span>
          </p>
        </ColumnStartComponent>
      </div>
    </div>
    <div class="rounded-md bg-white shadow-lg w-full">
      <div class="flex items-center justify-between py-3 px-3 border-b">
        <span class="flex items-center gap-1">
          <span class="fill-gray-400">
            <CheckFilledIcon class="w-5 h-5" />
          </span>
          <span class="font-Heebo text-medium"> 3. PAYMENT METHOD</span>
        </span>
      </div>
      <div class="py-3 px-3">
        <ColumnStartComponent class="gap-1">
          <p class="normalText font-Heebo">Payment on delivery</p>
          <div class="px-3 w-full">
            <BetweenComponent class="py-3 border-b flex-1">
              <StartComponent class="gap-1 flex-1">
                <EvRadioInput name="paymentMethod" />
                <p class="mediumText">
                  Tap & Relax,Pay with Bank Transfer on Delivery
                </p>
              </StartComponent>
              <MoneyWavyDuoIcon class="w-4 h-4 fill-primary" />
            </BetweenComponent>
            <BetweenComponent class="py-3 border-b flex-1">
              <StartComponent class="gap-1">
                <EvRadioInput name="paymentMethod" />
                <p class="mediumText">
                  Old School Cool,Pay with Cash on Delivery for orders below
                  400k naira
                </p>
              </StartComponent>
              <MoneyWavyDuoIcon class="w-4 h-4 fill-primary" />
            </BetweenComponent>
          </div>
        </ColumnStartComponent>
        <ColumnStartComponent class="gap-1 py-3">
          <p class="normalText font-Heebo">Pre-Pay Now</p>
          <div class="px-3 w-full">
            <BetweenComponent class="py-3 border-b flex-1">
              <div class="gap-1 flex items-start justify-start">
                <EvRadioInput name="paymentMethod" class="mt-1" />
                <ColumnStartComponent class="">
                  <p class="font-semibold text-lightText text-medium">
                    Pay with Cards,Bank Transfer or USSD
                  </p>
                  <p class="text-small text-lightText font-normal">
                    Old School Cool,Pay with Cash on Delivery for orders below
                    400k naira
                  </p>
                </ColumnStartComponent>
              </div>
            </BetweenComponent>
            <BetweenComponent class="py-3 border-b flex-1">
              <div class="gap-1 flex items-start justify-start">
                <EvRadioInput name="paymentMethod" class="mt-1" />
                <ColumnStartComponent class="">
                  <p class="font-semibold text-lightText text-medium">
                    Buy Now,Pay Later
                  </p>
                  <p class="text-small text-lightText font-normal">
                    Old School Cool,Pay with Cash on Delivery
                  </p>
                </ColumnStartComponent>
              </div>
            </BetweenComponent>
          
          </div>
        </ColumnStartComponent>
        <ColumnStartComponent class="gap-1 py-3">
          <p class="normalText font-Heebo">Installment</p>
          <div class="px-3 w-full">
            <BetweenComponent class="py-3 border-b flex-1">
              <div class="gap-1 flex items-start justify-start">
                <EvRadioInput name="paymentMethod" class="mt-[2px]" />
                <p class="font-semibold text-lightText text-medium">
                 Standard chartered Credit Card @ 3% Interest - Up to 12 months 
                </p>
              </div>
            </BetweenComponent>
          </div>
        </ColumnStartComponent>
        <EndComponent class="py-3" >
            <TextButton text="COMFIRM PAYMENT METHOD" theme="primary" />
        </EndComponent>
      </div>
    </div>
    <span class="flex items-center my-3" >
        <span>
            <CaretLeftIcon class="w-3 h-3"/>
        </span>
        <span class="smallText" >Go back & continue shopping</span>
    </span>
  </div>
</template>
