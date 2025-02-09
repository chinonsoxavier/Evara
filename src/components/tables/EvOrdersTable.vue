<script  lang="ts" setup >
import { Avatar1 } from '../../utilities/exports';
import BetweenComponent from '../BetweenComponent.vue';
import TextButton from '../buttons/TextButton.vue';
import ColumnStartComponent from '../ColumnStartComponent.vue';
import IconComponent from '../IconComponent.vue';
import EyeDuoIcon from '../icons/duo-tone/EyeDuoIcon.vue';
import PencilSimpleLineDuoIcon from '../icons/duo-tone/PencilSimpleLineDuoIcon.vue';
import PlusDuoIcon from '../icons/duo-tone/PlusDuoIcon.vue';
import TrashBinDuoIcon from '../icons/duo-tone/TrashBinDuoIcon.vue';
import ImageComponent from '../ImageComponent.vue';
import PaginationView from '../pagination/PaginationView.vue';
</script>

<template>
    <div class="bg-white py-5" >
        <BetweenComponent class="px-5" >
            <ColumnStartComponent>
                <p class="text-large text-darkText dark:text-white font-semibold " >Recent Orders</p>
                <p class="text-darkText dark:text-white font-medium text-sm " >You made 100 orders this month</p>
            </ColumnStartComponent>
            <TextButton text="Create Order" :icon="PlusDuoIcon" class="rounded-md" />
        </BetweenComponent>
          <table class="overflow-x-scroll mt-5 rounded-md bg-white p-3 w-full">
        <thead>
          <tr>
            <th class="text-left" scope="col" >
              <input type="checkbox" />
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">
              Order ID
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">
              Buyer Name
            </th>
            <th class="text-sm text-darkText w-36 pl-3 text-left font-medium" scope="col">
              Order Date
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">
              Total Amount
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">
              Payment Method
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">
              Payment Status
            </th>
            <th class="text-sm text-darkText text-left font-medium" scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="my-4 overflow-x-scroll">
          <tr class="px-5 m-5 bg-[#f9f9fc]">
            <td class="w-10 ">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-40 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm ml-20 py-5 text-lightText font-normal pl-3 ">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
              <div class="flex gap-2 items-center justify-center">
                <IconComponent 
                  class="rounded-full bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-8 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-8 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-8 h-8"
                >
                  <TrashBinDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class=" ">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal pl-3 ">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
               <div class="flex gap-2 items-center justify-center">
                <IconComponent 
                  class="rounded-full bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-8 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-8 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-8 h-8"
                >
                  <TrashBinDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="bg-[#f9f9fc]">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal pl-3 ">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#def3e6] w-min px-2 text-[rgba(92,193,132)] py-1 text-center text-xs font-medium"
              >
                Completed
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
               <div class="flex gap-2 items-center justify-center">
                <IconComponent 
                  class="rounded-full bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-8 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-8 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-8 h-8"
                >
                  <TrashBinDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
          <tr class="">
            <td class="w-10">
              <input type="checkbox" name="" id="" />
            </td>
            <td class="text-sm py-5 text-lightText font-semibold">#201</td>
            <td class="text-sm py-5 text-lef w-44 text-lightText font-normal">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  rounded
                  class="max-w-8 min-w-8"
                />
                <p class="h whitespace-nowrap">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm py-5 text-lightText font-normal pl-3 ">
              Oct 10, 2024
            </td>
            <td class="text-sm py-5 text-lightText font-normal">$45,842</td>
            <td class="text-sm py-5 text-lightText font-normal">Mastercard</td>
            <td class="text-sm py-5 text-lightText font-normal">
              <div
                class="bg-[#fbe1e1] w-min px-2 text-[rgba(230,103,102)] py-1 text-center text-xs font-medium"
              >
                Canceled
              </div>
            </td>
            <td class="text-sm py-5 text-lightText font-normal w-32">
                <div class="flex gap-2 items-center justify-center">
                <IconComponent 
                  class="rounded-full bg-[#eef2f7] fill-[#323a46] hover:bg-[rgba(210,214,220)] duration-300 w-8 h-8"
                >
                  <EyeDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(96,74,227,.1)] fill-[#604ae3] hover:bg-[#604ae3] hover:fill-white duration-300 w-8 h-8"
                >
                  <PencilSimpleLineDuoIcon class="w-5 h-5" />
                </IconComponent>
                <IconComponent
                  class="rounded-full bg-[rgba(233,103,103,.3)] fill-[#e96767] hover:fill-white hover:bg-[#e96767] duration-300 w-8 h-8"
                >
                  <TrashBinDuoIcon class="w-5 h-5" />
                </IconComponent>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <BetweenComponent class="p-5 border-t" >
        <p class="text-sm text-darkText" >Showing <b>4</b> of <b>20,000</b> Orders</p>
        <PaginationView/>
      </BetweenComponent>
    </div>
</template>

<style scoped >
th,
td {
  @apply px-3 py-4 whitespace-nowrap;
}
</style>