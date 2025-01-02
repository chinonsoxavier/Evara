<script setup>
import { PaymentGatewaysImg } from '../../utilities/exports';
import BetweenComponent from '../BetweenComponent.vue';
import ColumnStartComponent from '../ColumnStartComponent.vue';
import EvComponent from '../EvComponent.vue';
import FlexComponent from '../FlexComponent.vue';
import IconComponent from '../IconComponent.vue';
import FacebookDuoIcon from '../icons/duo-tone/FacebookDuoIcon.vue';
import InstagramDuoIcon from '../icons/duo-tone/InstagramDuoIcon.vue';
import PintrestDuoIcon from '../icons/duo-tone/PintrestDuoIcon.vue';
import XDuoIcon from '../icons/duo-tone/XDuoIcon.vue';
import YoutubeDuoIcon from '../icons/duo-tone/YoutubeDuoIcon.vue';
import ImageComponent from '../ImageComponent.vue';
import LogoImage from '../logo/LogoImage.vue';
</script>

<template>
  <EvComponent class="py-10 border-t border-t-gray-100">
    <FlexComponent class="items-start flex-wrap gap-5 flex justify-between" >
      <ColumnStartComponent>
        <LogoImage />
        <p class="text-normal text-lightText font-medium">Contact :</p>
        <p class="text-sm text-lightText">
          <span class="font-semibold mr-1">Address:</span
          ><span class="f font-Heebo"
            >562 Washington Road,Street 32 San Fransisco</span
          >
        </p>
        <p class="text-sm text-lightText py-1">
          <span class="font-semibold mr-1">Phone:</span
          ><span class="font-Heebo"
            >(+234)-8774-900-8399/(+234)-222-567-9909</span
          >
        </p>
        <p class="text-sm text-lightText">
          <span class="font-semibold mr-1">Hours:</span
          ><span class="font-Heebo">10:00-18:00 Mon-Sat</span>
        </p>
        <ColumnStartComponent class="pt-4">
          <p class="font-semibold text-sm text-lightText">Follow Us</p>
          <FlexComponent>
            <IconComponent class="w-7 h-7">
              <!-- <RouterLink to="https://facebook.com"> -->
              <FacebookDuoIcon class="w-5 h-5" />
            </IconComponent>
            <!-- </RouterLink> -->
            <IconComponent class="w-7 h-7">
              <XDuoIcon class="w-5 h-5" /> </IconComponent
            ><IconComponent class="w-7 h-7">
              <InstagramDuoIcon class="w-5 h-5" /> </IconComponent
            ><IconComponent class="w-7 h-7">
              <PintrestDuoIcon class="h-5 w-5" /> </IconComponent
            ><IconComponent class="w-7 h-7">
              <YoutubeDuoIcon class="w-5 h-5" />
            </IconComponent>
          </FlexComponent>
        </ColumnStartComponent>
      </ColumnStartComponent>
      <ColumnStartComponent class="gap-2">
        <h2 class="font-semibold text-lightText text-lg">Address</h2>
        <p class="smallText cursor-pointer">About Us</p>
        <p class="smallText cursor-pointer">Delivery Information</p>
        <p class="smallText cursor-pointer">Privacy Policy</p>
        <p class="smallText cursor-pointer">Terms & Conditions</p>
        <p class="smallText cursor-pointer">Contact Us</p>
        <p class="smallText cursor-pointer">Support Center</p>
      </ColumnStartComponent>
      <ColumnStartComponent class="gap-2">
        <h2 class="font-semibold text-lightText text-lg">My Account</h2>
        <p class="smallText cursor-pointer">Sign in</p>
        <p class="smallText cursor-pointer">View Cart</p>
        <p class="smallText cursor-pointer">My Wishlist</p>
        <p class="smallText cursor-pointer">Terms & Conditions</p>
        <p class="smallText cursor-pointer">Track My Order</p>
        <p class="smallText cursor-pointer">Help</p>
        <p class="smallText cursor-pointer">Order</p>
      </ColumnStartComponent>
      <ColumnStartComponent class="gap-2">
        <h2 class="font-semibold text-lightText text-lg">Secured Payment Gateways</h2>
        <ImageComponent alt="payment gateways" :src="PaymentGatewaysImg" />
      </ColumnStartComponent>
    </FlexComponent>
    <hr class="my-8 border-none w-full bg-gray-400 h-[1px]" >
    <BetweenComponent>
        <p class="smallText text-center" >2024 All Rights Reserved</p>
        <p class="smallText text-center" >Designed By Chinonso Xavier</p>
    </BetweenComponent>
  </EvComponent>
</template>
