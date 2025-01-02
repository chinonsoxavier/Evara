<script setup>
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import IconComponent from '../../../../components/IconComponent.vue';
import AccountDuoIcon from '../../../../components/icons/duo-tone/AccountDuoIcon.vue';
import ChatCircleTextDuoIcon from '../../../../components/icons/duo-tone/ChatCircleTextDuoIcon.vue';
import EnvelopeDuoIcon from '../../../../components/icons/duo-tone/EnvelopeDuoIcon.vue';
import HeartIcon from '../../../../components/icons/duo-tone/HeartIcon.vue';
import ShoppingBagOpenDuoIcon from '../../../../components/icons/duo-tone/ShoppingBagOpenDuoIcon.vue';
import TicketDuoIcon from '../../../../components/icons/duo-tone/TicketDuoIcon.vue';


// import { useRoute } from "vue-router";

// const route = useRoute();

// const getCurrentRoute = () => {
//   return route.name;
// };
</script>

<template>
  <div class="bg-white flex-1 max-w-80 shadow-md rounded-md border">
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
            My Evara Account
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
</template>

<style scoped>
a.active {
  @apply bg-primary fill-white duration-500 text-white;
}

a.active p {
  @apply text-white;
}

a.active div {
  @apply fill-white;
}
</style>
