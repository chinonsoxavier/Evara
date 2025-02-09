<script setup lang="ts">
import HomeLineIcon from "../icons/line-icons/HomeLineIcon.vue";
import OrdersLineIcon from "../icons/line-icons/OrdersLineIcon.vue";
import TagLineIcon from "../icons/line-icons/TagLineIcon.vue";
import FolderLineIcon from "../icons/line-icons/FolderLineIcon.vue";
import CustomersLineIcon from "../icons/line-icons/CustomersLineIcon.vue";
import StaticticsLineIcon from "../icons/line-icons/StatisticsLineIcon.vue";
import StarLineIcon from "../icons/line-icons/StarLineIcon.vue";
import ChatLineIcon from "../icons/line-icons/ChatLineIcon.vue";
import UserLineIcon from "../icons/line-icons/UserLineIcon.vue";
import SettingsLineIcon from "../icons/line-icons/SettingsLineIcon.vue";
import IconComponent from "../IconComponent.vue";
</script>

<template>
  <div class="flex flex-col p-3">
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/dashboard"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <!-- <HomeFilledIcon class="w-[20px] h-[20px] fill-[#5A607F]"/> -->
      <IconComponent>
        <HomeLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current text-sm font-medium mt-1">Dashboard</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/orders/list"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <OrdersLineIcon class="w-[20px] h-[20px] mt-2 fill-current" />
      </IconComponent>

      <p class="text-current text-sm font-medium">Orders</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/products"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <TagLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current mt-1 text-sm font-medium">Products</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/categories"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <FolderLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current mt-1 text-sm font-medium">Categories</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/customers"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <CustomersLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current mt-[2px] text-sm font-medium">Customers</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/reports"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <StaticticsLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current text-sm font-medium">Reports</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/coupons"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <StarLineIcon class="w-6 h-6 fill-current" />
      </IconComponent>

      <p class="text-current text-sm font-medium">Coupons</p>
    </RouterLink>
    <RouterLink
      active-class="active"
      :exact="true"
      to="/vendor/inbox"
      class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
    >
      <IconComponent>
        <ChatLineIcon class="w-[20px] h-[20px] fill-current" />
      </IconComponent>

      <p class="text-current text-sm font-medium">Inbox</p>
    </RouterLink>
    <div>
      <p class="my-3 font px-3 text-white font-medium text-sm">Settings</p>
      <div class="flex flex-col">
        <RouterLink
          active-class="active"
          :exact="true"
          to="/vendor/personal-settings"
          class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
        >
          <IconComponent>
            <UserLineIcon class="w-[20px] h-[20px] fill-current" />
          </IconComponent>

          <p class="text-current text-sm font-medium">Personal</p>
        </RouterLink>
        <RouterLink
          active-class="active"
          :exact="true"
          to="/vendor/global-settings"
          class="flex items-center fill-white text-white justify-start gap-1 rounded-md px-3 py-1"
        >
          <IconComponent>
            <SettingsLineIcon class="w-[20px] h-[20px] fill-current" />
          </IconComponent>

          <p class="text-current text-sm font-medium">General</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.active {
  @apply bg-white fill-[#5A607F] text-[#5A607F] font-semibold;
}
</style>
