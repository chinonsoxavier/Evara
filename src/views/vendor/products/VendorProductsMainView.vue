<script setup lang="ts">
import BetweenComponent from "../../../components/BetweenComponent.vue";
import ColumnComponent from "../../../components/ColumnComponent.vue";
import EndComponent from "../../../components/EndComponent.vue";
import FlexComponent from "../../../components/FlexComponent.vue";
import PlusDuoIcon from "../../../components/icons/duo-tone/PlusDuoIcon.vue";
import SearchIcon from "../../../components/icons/line-icons/SearchIcon.vue";
import ImageComponent from "../../../components/ImageComponent.vue";
import EvInput from "../../../components/inputs/EvInput.vue";
import EvSelect from "../../../components/inputs/EvSelect.vue";
import { useEvModalStore } from "../../../components/modals/EvModalsStore";
import PaginationView from "../../../components/pagination/PaginationView.vue";
import { Avatar1 } from "../../../utilities/exports";

const ModalStore = useEvModalStore();


</script>

<template>
  <section class="p-8">
    <BetweenComponent class="">
      <p class="text-[28px] text-darkText font-semibold">Products</p>
      <FlexComponent class="gap-3">
        <button v-on:click="ModalStore.createModal({type:'success',message:'Export Successfull',autoClose:false,duration:0})"
          class="px-7 py-2 bg-white rounded text-[#1E5EFF] text-sm font-semibold border"
        >
          Export
        </button>
        <router-link to="/vendor/products/add" >
            <button
            class="px-7 py-2 bg-[#1E5EFF] text-white font-semibold text-sm flex gap-[6px] items-center justify-center rounded-md"
            >
            <PlusDuoIcon class="w-[18px] h-[18px] fill-white" /> Add Products
        </button>
    </router-link>
      </FlexComponent>
    </BetweenComponent>
    <div class="bg-white my-8 rounded-md shadow-sm p-5">
      <BetweenComponent class="my-5">
        <FlexComponent class="flex-1 gap-5">
          <EvSelect class="" />
          <EvInput
            :icon="SearchIcon"
            iconPosition="left"
            placeholder="Search"
          />
        </FlexComponent>
        <EndComponent class="flex-1 gap-3">
          <div class="rounded-sm border p-2">
            <svg
              class="w-6 h-6 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"
              ></path>
            </svg>
            <!-- <TrashBinDuoIcon class="w-4 h-4 fill-primary" /> -->
          </div>
          <div v-on:click="ModalStore.createModal({type:'delete',autoClose: false,duration:0})" class="rounded-sm border p-2">
            <svg
              class="fill-primary w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z"
                fill="#1E5EFF"
              />
            </svg>
            <!-- <TrashBinDuoIcon class="w-4 h-4 fill-primary" /> -->
          </div>
        </EndComponent>
      </BetweenComponent>
      <table class="overflow-x-scroll bg-[red w-full">
        <thead>
          <tr class="border-b">
            <th class="text-left py-5 flex items-center justify-start gap-2">
              <input type="checkbox" />
              <p class="text-sm text-darkText text-left font-medium">Product</p>
            </th>
            <th class="text-sm text-darkText text-left font-medium">Inventory</th>
            <th class="text-sm text-darkText text-left font-medium">
              Color
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Price
            </th>
            <th class="text-sm text-darkText text-left font-medium">
              Rating
            </th>
          </tr>
        </thead>
        <tbody class="my-4 overflow-x-scroll">
          <tr class="py-4">
            <td class="flex items-center justify-start py-5 gap-2">
              <input type="checkbox" name="" id="" />
              <FlexComponent class="gap-2 items-center" >
                <ImageComponent :src="Avatar1" alt="product image" class="max-w-12 rounded" />
                <ColumnComponent>
                <p class="f font-medium text-sm" >Men Gray Hoddie</p>
                <p class="text-sm" >Hoodies</p>
            </ColumnComponent>
              </FlexComponent>
            </td>
            <td class="text-sm py-5 text-lightText font-medium">
              96 In Stock
            </td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <p class="whitespace-nowrap font-medium">Black</p>
              </div>
            </td>
            <td class="text-sm px-3 text-left text-lightText font-medium">
             
                $34.90
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->

            <td class="text-sm px-3 text-left text-lightText font-medium">
             5.9 (32 votes)
            </td>            
          </tr> <tr class="py-4">
            <td class="flex items-center justify-start py-5 gap-2">
              <input type="checkbox" name="" id="" />
              <FlexComponent class="gap-2 items-center" >
                <ImageComponent :src="Avatar1" alt="product image" class="max-w-12 rounded" />
                <ColumnComponent>
                <p class="f font-medium text-sm" >Men Gray Hoddie</p>
                <p class="text-sm" >Hoodies</p>
            </ColumnComponent>
              </FlexComponent>
            </td>
            <td class="text-sm py-5 text-lightText font-medium">
              96 In Stock
            </td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <p class="whitespace-nowrap font-medium">Black</p>
              </div>
            </td>
            <td class="text-sm px-3 text-left text-lightText font-medium">
             
                $34.90
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->

            <td class="text-sm px-3 text-left text-lightText font-medium">
             5.9 (32 votes)
            </td>            
          </tr> <tr class="py-4">
            <td class="flex items-center justify-start py-5 gap-2">
              <input type="checkbox" name="" id="" />
              <FlexComponent class="gap-2 items-center" >
                <ImageComponent :src="Avatar1" alt="product image" class="max-w-12 rounded" />
                <ColumnComponent>
                <p class="f font-medium text-sm" >Men Gray Hoddie</p>
                <p class="text-sm" >Hoodies</p>
            </ColumnComponent>
              </FlexComponent>
            </td>
            <td class="text-sm py-5 text-lightText font-medium">
              96 In Stock
            </td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <p class="whitespace-nowrap font-medium">Black</p>
              </div>
            </td>
            <td class="text-sm px-3 text-left text-lightText font-medium">
             
                $34.90
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->

            <td class="text-sm px-3 text-left text-lightText font-medium">
             5.9 (32 votes)
            </td>            
          </tr> <tr class="py-4">
            <td class="flex items-center justify-start py-5 gap-2">
              <input type="checkbox" name="" id="" />
              <FlexComponent class="gap-2 items-center" >
                <ImageComponent :src="Avatar1" alt="product image" class="max-w-12 rounded" />
                <ColumnComponent>
                <p class="f font-medium text-sm" >Men Gray Hoddie</p>
                <p class="text-sm" >Hoodies</p>
            </ColumnComponent>
              </FlexComponent>
            </td>
            <td class="text-sm py-5 text-lightText font-medium">
              96 In Stock
            </td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <p class="whitespace-nowrap font-medium">Black</p>
              </div>
            </td>
            <td class="text-sm px-3 text-left text-lightText font-medium">
             
                $34.90
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->

            <td class="text-sm px-3 text-left text-lightText font-medium">
             5.9 (32 votes)
            </td>            
          </tr>
        </tbody>
      </table>
      <PaginationView/>
    </div>
  </section>
</template>
