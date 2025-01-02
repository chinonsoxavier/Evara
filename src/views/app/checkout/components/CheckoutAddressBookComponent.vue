<script setup>
import BetweenComponent from "../../../../components/BetweenComponent.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import HighLighterDuoIcon from "../../../../components/icons/duo-tone/HighLighterDuoIcon.vue";
</script>

<template>
  <div class="p-4 border rounded-md">
    <BetweenComponent class="items-start" >
      <div class="gap-2 flex items-start justify-start" >
        <input type="radio" name="address" id="" class="w-5 h-5" />
        <ColumnStartComponent class="gap-1" >
          <p class="text-lightText text-small font-semibold font-Heebo">
            ADDRESS BOOK(3)
          </p>
          <p class="text-xs font-normal text-lightText" >78 Adekeye St | Apapa (Ajegunle) - Lagos </p>
          <p  class="text-xs font-normal text-lightText">+234 7025128667 / +234 8024782494</p>
          <p class="bg-gray-200 text-[10px] font-medium px-1 py-[2px]" >DEFAULT ADDRESS</p>
        </ColumnStartComponent>
    </div>
    <RouterLink to="/checkout/addresses/edit/3r3r434r4r">
      <button class="flex items-center gap-1 bg-lightPrimary py-1 px-3 rounded-md" >
        <!-- <span class="text-small font-medium" >EDIT</span> -->
        <HighLighterDuoIcon class="w-4 h-4"/>
      </button>
    </RouterLink>
    </BetweenComponent>
    
  </div>
</template>
