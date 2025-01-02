<script setup>
import AdDealsCardComponent from '../../../../components/AdDealsCardComponent.vue';
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import EvComponent from '../../../../components/EvComponent.vue';

</script>

<template>
  <EvComponent class="py-10">
    <BetweenComponent class="gap-8 flex-wrap">
      <ColumnComponent>
        <ColumnStartComponent class="flex-col gap-1 flex-1">
          <p class="font-base text-normal Heebo">Hot Releases</p>
          <div class="rounded-full w-full bg-gray-300 h-[2px] relative">
            <div class="absolute left-0 w-1/4 bg-primary h-full"></div>
          </div>
        </ColumnStartComponent>
        <ColumnComponent>
          <AdDealsCardComponent />
          <AdDealsCardComponent />
          <AdDealsCardComponent />
        </ColumnComponent>
      </ColumnComponent> 
       <ColumnComponent>
        <ColumnStartComponent class="flex-col gap-1 flex-1">
          <p class="font-base text-normal Heebo">Deals & Outlet</p>
          <div class="rounded-full w-full bg-gray-300 h-[2px] relative">
            <div class="absolute left-0 w-1/4 bg-primary h-full"></div>
          </div>
        </ColumnStartComponent>
        <ColumnComponent>
          <AdDealsCardComponent />
          <AdDealsCardComponent />
          <AdDealsCardComponent />
        </ColumnComponent>
      </ColumnComponent>  
      <ColumnComponent>
        <ColumnStartComponent class="flex-col gap-1 flex-1">
          <p class="font-base text-normal Heebo">Top Selling</p>
          <div class="rounded-full w-full bg-gray-300 h-[2px] relative">
            <div class="absolute left-0 w-1/4 bg-primary h-full"></div>
          </div>
        </ColumnStartComponent>
        <ColumnComponent>
          <AdDealsCardComponent />
          <AdDealsCardComponent />
          <AdDealsCardComponent />
        </ColumnComponent>
      </ColumnComponent>  
      <ColumnComponent>
        <ColumnStartComponent class="flex-col gap-1 flex-1">
          <p class="font-base text-normal Heebo">Trendy</p>
          <div class="rounded-full w-full bg-gray-300 h-[2px] relative">
            <div class="absolute left-0 w-1/4 bg-primary h-full"></div>
          </div>
        </ColumnStartComponent>
        <ColumnComponent>
          <AdDealsCardComponent />
          <AdDealsCardComponent />
          <AdDealsCardComponent />
        </ColumnComponent>
      </ColumnComponent>
     
    </BetweenComponent>
  </EvComponent>
</template>
