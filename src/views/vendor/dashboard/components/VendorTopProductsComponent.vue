<script setup lang="ts">
import ImageComponent from '../../../../components/ImageComponent.vue';
import { Avatar1,Avatar2 } from '../../../../utilities/exports';

</script>

<template>
  <div class="h-full overflow-hidden flex flex-col">
    <StartComponent class="p-6 text-darkText text-xl font-semibold">Top Products by Units Sold</StartComponent>
    <div class="flex-grow overflow-auto">
      <table class="overflow-x-scroll bg-[red w-full">
         <thead class="border-b">
          <tr class="py-6 my-4" style="padding: 100px;" >
            <th class="text-sm text-darkText font-medium text-left py-3">Name</th>
            <th class="text-sm text-darkText font-medium text-center py-2">Price</th>
            <th class="text-sm text-darkText font-medium text-left py-2">Units Sold</th>
          </tr>
        </thead>
        <tbody class="">
            <tr class="g-[red]">
            <!-- <hr> -->
             <td class="text-sm py-2 px-6 w-44 text-lightText font-medium">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  class="max-0 rounded-md min-w-10"
                />
                <p class="h whitespace-nowrap text-base">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-2 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm  px-3 text-center text-lightText font-normal">$45,842</td>
          </tr>
            <tr class="g-[red]">
            <!-- <hr> -->
             <td class="text-sm py-2 px-6 w-44 text-lightText font-medium">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  class="max-0 rounded-md min-w-10"
                />
                <p class="h whitespace-nowrap text-base">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-2 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm  px-3 text-center text-lightText font-normal">$45,842</td>
          </tr>
            <tr class="g-[red]">
            <!-- <hr> -->
             <td class="text-sm py-2 px-6 w-44 text-lightText font-medium">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  class="max-0 rounded-md min-w-10"
                />
                <p class="h whitespace-nowrap text-base">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-2 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm  px-3 text-center text-lightText font-normal">$45,842</td>
          </tr>
            <tr class="g-[red]">
            <!-- <hr> -->
             <td class="text-sm py-2 px-6 w-44 text-lightText font-medium">
              <div class="flex items-center gap-2">
                <ImageComponent
                  alt="buyer image"
                  :src="Avatar1"
                  class="max-0 rounded-md min-w-10"
                />
                <p class="h whitespace-nowrap text-base">Chinonso O. Xavier</p>
              </div>
            </td>
            <!-- <td class="text-xs py-2 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm  px-3 text-center text-lightText font-normal">$45,842</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table > thead > tr > th {
  @apply px-4 text-sm font-semibold text-lightText;
}

tbody > tr > td {
  @apply text-sm font-medium text-darkText h-0;
}

tbody tr {
}

.table-fixed {
  table-layout: fixed;
}
</style>
