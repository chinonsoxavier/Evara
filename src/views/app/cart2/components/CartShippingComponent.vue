<script setup >
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnComponent from '../../../../components/ColumnComponent.vue';
import ClipBoardDuoIcon from '../../../../components/icons/duo-tone/ClipBoardDuoIcon.vue';
import ShuffleDuoIcon from '../../../../components/icons/duo-tone/ShuffleDuoIcon.vue';
import EvInput from '../../../../components/inputs/EvInput.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
    <ColumnComponent class="flex-1 gap-3" >
        <p class="text-lg font-Heebo font-semibold tracking-wider text-lightText" >Calculate Shipping</p>
        <EvInput type="text" placeholder="State / Country"  />
        <CenterComponent class="gap-3" >
            <EvInput placeholder="City" />
            <EvInput placeholder="PostalCode / Zip" />
        </CenterComponent>
        <StartComponent>
            <TextButton text="Update" theme="primary" :icon="ShuffleDuoIcon" />
        </StartComponent>
        <ColumnComponent class="gap-3 mt-5" >
                <p class="text-lg font-Heebo font-semibold tracking-wider text-lightText" >Apply Vouchers</p>
         <CenterComponent class="gap-3" >
            <EvInput type="text" placeholder="Voucher Code" />
            <TextButton text="Apply" theme="primary" :icon="ClipBoardDuoIcon" />
         </CenterComponent>
        </ColumnComponent>
    </ColumnComponent>
</template>