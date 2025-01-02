<script setup>
import BetweenComponent from "../../../../components/BetweenComponent.vue";
import TextButton from "../../../../components/buttons/TextButton.vue";
import CenterComponent from "../../../../components/CenterComponent.vue";
import ColumnComponent from "../../../../components/ColumnComponent.vue";
import FlexComponent from "../../../../components/FlexComponent.vue";
import TicketDuoIcon from "../../../../components/icons/duo-tone/TicketDuoIcon.vue";
import EvInput from "../../../../components/inputs/EvInput.vue";
import StartComponent from "../../../../components/StartComponent.vue";
// import SelectPickupModal from "@/components/modals/SelectPickupModal.vue";

const route = useRoute();

const getCurrentRoute = () => {
    return route.name;
}
</script>

<template>
    <div class="max-w-[300px] rounded-md flex-1 bg-white shadow-md py-3">
        <StartComponent class="px-3">
            <p class="largeText font-Heebo">Order Summary</p>
        </StartComponent>
      <hr />
      <ColumnComponent class="px-3 py-3 gap-3" >
        <BetweenComponent class="baseText">
            <p class="font-normal font-Heebo">Item`s total (6)</p>
            <p class="font-medium font-Heebo">$ 54,300</p>
        </BetweenComponent>
        <BetweenComponent class="baseText">
            <p class="font-normal font-Heebo">Delivery fee`s</p>
            <p class="font-medium font-Heebo">$ 2,400</p>
        </BetweenComponent>
        <BetweenComponent class="baseText">
            <p class="font-normal font-Heebo">Customs fee</p>
            <p class="font-medium font-Heebo">$ 5,300</p>
        </BetweenComponent>
      <BetweenComponent class="lgText">
          <p class="font-medium font-Heebo ">Total</p>
          <p class="font-semibold text-large font-Heebo">$ 56,300</p>
        </BetweenComponent>
    </ColumnComponent>
    <hr>
    <FlexComponent class="py-3 px-3" >
        <EvInput :icon="TicketDuoIcon" iconPosition="left" placeholder="Enter code here" />
         <TextButton :disabled="!getCurrentRoute()=='checkout'" text="Apply" theme="" />
    </FlexComponent>
    <hr>
    <CenterComponent class="flex-1 px-3 py-3" >
        <TextButton class="flex-1" theme="primary" text="COMFIRM ORDER" :disabled="!getCurrentRoute()=='checkout'" />
    </CenterComponent>
    </div>
</template>
