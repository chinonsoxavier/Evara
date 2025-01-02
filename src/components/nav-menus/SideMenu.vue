<script setup lang="ts" >
import { computed, ref } from 'vue';
import { useMenuStore } from "../../utilities/store";
import { Ref } from 'vue';
import LogoImage from '../logo/LogoImage.vue';
import IconComponent from '../IconComponent.vue';
import CaretRightIcon from '../icons/line-icons/CaretRightIcon.vue';
import ColumnComponent from '../ColumnComponent.vue';
import AccountDuoIcon from '../icons/duo-tone/AccountDuoIcon.vue';
import ShoppingBagOpenDuoIcon from '../icons/duo-tone/ShoppingBagOpenDuoIcon.vue';
import EnvelopeDuoIcon from '../icons/duo-tone/EnvelopeDuoIcon.vue';
import ChatCircleTextDuoIcon from '../icons/duo-tone/ChatCircleTextDuoIcon.vue';
import TicketDuoIcon from '../icons/duo-tone/TicketDuoIcon.vue';
import HeartIcon from '../icons/duo-tone/HeartIcon.vue';
// import LogoImage from '../logo/LogoImage.vue';
const MenuStore = useMenuStore(); 

const sideMenuOpen = computed(() => MenuStore.homeMenu);
const sideMenuRoot : Ref<HTMLDivElement | null> = ref(null);

const ToggleHomeMenu = (event:MouseEvent) => {
    if (event.target == sideMenuRoot.value) {
        MenuStore.ToggleHomeMenu();
        console.log("clicked parent");
    }
}

</script>

<template>
  <div ref="sideMenuRoot" v-on:click="ToggleHomeMenu" :class="[sideMenuOpen ?'w-screen':'w-0']" class="fixed h-screen bg-[rgba(0,0,0,0.5)] duration-700 overflow-x-hidden z-50 right-0">
    <div class="w-full h-full bg-white max-w-[320px] absolute right-0 py-5">
      <div class="flex items-center justify-start gap-6 w-full px-5">
        <svg @click.stop="MenuStore.ToggleHomeMenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-7 h-7 cursor-pointer"
        >
          <path
            d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"
          ></path>
        </svg>
        <LogoImage class="w-20" />
      </div>
      <hr class="my-4" >
      <div>
        <div class="flex items-center justify-between  py-2 pr-2 pl-5">
            <p class="text- text-darkText font-semibold text-[15px]" >MY EVARA ACCOUNT</p>
            <IconComponent class="w-5 h-5" >
                <CaretRightIcon class="w-5 h-5" />
            </IconComponent>
        </div>
        <ColumnComponent class="">
      <RouterLink
         to="/account/overview/"
        active-class="active"
        :exact="false"
        class="w-full rounded-t"
      >
        <div
          class="py-2 px-3 text-lightText group border-b fill-current cursor-pointer hover:fill-white duration-500 rounded-t-md hover:bg-primary flex-1 flex items-center justify-start"
        >
          <IconComponent>
            <AccountDuoIcon class="w-[22px] h-[22px]" />
          </IconComponent>
          <p
            class="text-medium font-medium text-lightText group-hover:text-white duration-500"
          >
            Account Overview
          </p>
        </div>
      </RouterLink>
      <RouterLink
        to="/account/order"
        :exact="false"
        active-class="active"
        class="w-full"
      >
        <div
          class="py-2 px-3 text-lightText group border-b fill-current cursor-pointer hover:fill-white duration-500 hover:bg-primary flex-1 flex items-center justify-start"
        >
          <IconComponent>
            <ShoppingBagOpenDuoIcon class="w-[22px] h-[22px]" />
          </IconComponent>
          <p
            class="text-medium font-medium text-lightText group-hover:text-white duration-500"
          >
            Orders
          </p>
        </div>
      </RouterLink>
      <RouterLink
        to="/account/inbox"
        :exact="false"
        active-class="active"
      >
        <div
          class="py-2 px-3 text-lightText group border-b fill-lightText cursor-pointer hover:fill-white duration-500 hover:bg-primary flex-1 flex items-center justify-start"
        >
          <IconComponent>
            <EnvelopeDuoIcon class="w-[22px] h-[22px]" />
          </IconComponent>
          <p
            class="text-medium font-medium text-lightText group-hover:text-white duration-500"
          >
            Inbox
          </p>
        </div>
      </RouterLink>
      <RouterLink
        to="/pendingreviews"
        :exact="false"
        class="w-full"
        active-class="active"
      >
        <div
          class="py-2 px-3 text-lightText group border-b fill-lightText cursor-pointer hover:fill-white duration-500 hover:bg-primary flex-1 flex items-center justify-start"
        >
          <IconComponent>
            <ChatCircleTextDuoIcon class="w-[22px] h-[22px]" />
          </IconComponent>
          <p class="text-medium font-medium text-lightText group-hover:text-white duration-500">Pending Reviews</p>
        </div>
      </RouterLink>
      <RouterLink
        to="/account/wishlist"
        :exact="false"
        active-class="active"
      >
      <div
          class="py-2 px-3 text-lightText group border-b fill-lightText cursor-pointer hover:fill-white duration-500 hover:bg-primary flex-1 flex items-center justify-start"
      >
        <IconComponent>
          <HeartIcon class="w-[22px] h-[22px]" />
        </IconComponent>
        <p class="text-medium font-medium text-lightText group-hover:text-white duration-500">Saved Items</p>
      </div>
      </RouterLink> 
      <RouterLink
        to="/account/coupon"
        :exact="false"
        active-class="active"
      >
      <div
          class="py-2 px-3 text-lightText group border-b fill-lightText cursor-pointer hover:fill-white duration-500 hover:bg-primary flex-1 flex items-center justify-start"
      >
        <IconComponent>
          <TicketDuoIcon class="w-[22px] h-[22px]" />
        </IconComponent>
        <p class="text-medium font-medium text-lightText group-hover:text-white duration-500">Voucher</p>
      </div>
      </RouterLink>
     
    </ColumnComponent>
      </div>
    </div>
  </div>
</template>
