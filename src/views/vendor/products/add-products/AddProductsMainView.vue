<script lang="ts" setup>
import BetweenComponent from "../../../../components/BetweenComponent.vue";
import ColumnStartComponent from "../../../../components/ColumnStartComponent.vue";
import FlexComponent from "../../../../components/FlexComponent.vue";
import CaretRightIcon from "../../../../components/icons/line-icons/CaretRightIcon.vue";
import EvInput from "../../../../components/inputs/EvInput.vue";
import EvInputLabel from "../../../../components/inputs/EvInputLabel.vue";
import EvTextAreaLabeled from "../../../../components/inputs/EvTextAreaLabeled.vue";
import { useEvModalStore } from "../../../../components/modals/EvModalsStore";
import StartComponent from "../../../../components/StartComponent.vue";
const ModalStore = useEvModalStore();
</script>

<template>
  <section class="p-8">
    <FlexComponent class="items-end justify-between">
      <ColumnStartComponent>
        <router-link to="/vendor/products" >
        <StartComponent class="w-min" >

            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-lightText"
            fill="current"
            viewBox="0 0 256 256"
            >
            <path
            d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
            ></path>
          </svg>
          <p class="text-sm text-lightText font-medium">Back</p>
        </StartComponent>
      </router-link>
      <p class="text-[28px] mt-3 text-darkText font-semibold">Add Product</p>
    </ColumnStartComponent>
      <FlexComponent class="gap-3">
        <button
        v-on:click="
            ModalStore.createModal({
              type: 'success',
              message: 'Export Successfull',
              autoClose: false,
              duration: 0,
            })
          "
          class="px-7 py-2 bg-white rounded text-[#1E5EFF] text-sm font-semibold border"
        >
          Cancel
        </button>
        <router-link to="/vendor/products/add">
          <button
            class="px-7 py-2 bg-[#1E5EFF] text-white font-semibold text-sm flex gap-[6px] items-center justify-center rounded-md"
          >
            Save
          </button>
        </router-link>
      </FlexComponent>
    </FlexComponent>
    <BetweenComponent class="" >
      <div class="bg-white flex flex-col gap-5 rounded-lg flex-1 p-5" >
<p>
  Information
</p>
<EvInputLabel placeholder="Summer-T-Shirt"  label="Product Name" />
<EvTextAreaLabeled  placeholder="Product Description..." label="Product Description" /> 
      </div>
      <div class="flex-1 bg-white"></div>
    </BetweenComponent>
  </section>
</template>
