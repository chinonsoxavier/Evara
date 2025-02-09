<script  lang="ts" setup >
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import AccountInboxComponent from '../components/AccountInboxComponent.vue';
</script>

<template>
   <div class="border rounded-md shadow-md flex-1">
    <div class="px-3 py-3">
      <p class="text-large text-darkText font-medium font-Heebo">Inbox Messages</p>
    </div>
    <hr>
    <ColumnComponent class="p-3 gap-3 w-full" >
      <AccountInboxComponent/>
      <AccountInboxComponent/>
      <AccountInboxComponent/>
      <AccountInboxComponent/>
      <AccountInboxComponent/>
    </ColumnComponent>
    <hr />
    </div>
</template>