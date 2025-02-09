<template>
  <div class="h-full overflow-hidden flex flex-col">
    <StartComponent class="p-6 text-darkText text-xl font-semibold">
      Recent Transactions
    </StartComponent>
    <div class="flex-grow overflow-auto">
      <table class="overflow-x-scroll bg-[red w-full">
         <thead class="border-b">
          <tr class="py-6 my-4" style="padding: 100px;" >
            <th class="text-sm text-darkText font-medium text-center py-3">Name</th>
            <th class="text-sm text-darkText font-medium text-center py-2">Date</th>
            <th class="text-sm text-darkText font-medium text-center py-2">Amount</th>
            <th class="text-sm text-darkText font-medium text-center py-2">Status</th>
          </tr>
        </thead>
        <tbody class="">
          <tr class="g-[red] border-b">
            <!-- <hr> -->
            <td class="text-sm py-4 px-3 text-center text-lightText font-normal">
              Chinonso O. Xavier
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm px-3 text-center text-lightText font-normal">$45,842</td>
            <td class="text-sm px-3 text-center font-normal">
              <p class="bg-[#C4F8E2] text-[#06A561] px-2 py-1 rounded" >Paid</p>
            </td>
          </tr> 
          <tr class="g-[red]">
            <!-- <hr> -->
            <td class="text-sm py-4 px-3 text-center text-lightText font-normal">
              Chinonso O. Xavier
            </td>
            <!-- <td class="text-xs py-5 text-lightText font-normal">#201</td> -->
            <td class="text-sm px-3 text-center text-lightText font-normal">
              Oct 10, 2024
            </td>
            <td class="text-sm  px-3 text-center text-lightText font-normal">$45,842</td>
            <td class="text-sm  px-3 text-center font-normal">
              <p class="bg-[#E6E9F4] text-[#5A607F] px-2 py-1 rounded" >Pending</p>
            </td>
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
