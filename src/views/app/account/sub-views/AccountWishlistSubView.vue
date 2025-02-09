<script lang="ts" setup >
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import AccountWishlistComponent from '../components/AccountWishlistComponent.vue';
</script>

<template>
     <div class="bg-white shadow-md flex-1 border">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">
        Saved Items (30)
      </p>
    </div>
    <hr />
    <ColumnComponent class="gap-3 w-full p-3" >
        <AccountWishlistComponent/>
        <AccountWishlistComponent/>
        <AccountWishlistComponent/>
    </ColumnComponent>
    </div>
</template>