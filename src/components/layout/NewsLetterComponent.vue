<script lang="ts" setup >
import BetweenComponent from '../BetweenComponent.vue';
import EndComponent from '../EndComponent.vue';
import EvComponent from '../EvComponent.vue';
import MailBoxIcon from '../icons/duo-tone/MailBoxIcon.vue';
import SearchInput from '../inputs/EvInput.vue';
import StartComponent from '../StartComponent.vue';
</script>

<template>
        <EvComponent class="bg-lightPrimary flex-wrap py-8" >
            <BetweenComponent class="flex-wrap gap-5" >
            <StartComponent class="gap-2 flex-1" >
                <MailBoxIcon class="w-6 h-6 min-w-8" />
                <p class="font-medium text-base whitespace-nowrap"  >Sign up to Newsletter</p>
            </StartComponent>
            <StartComponent class="flex-1 min-w-[250px]" >
                <p class="font-medium whitespace-nowrap mobile:text-center mobile:text-sm mobile:whitespace-normal text-medium" >...and recieve $25 coupon for first shopping</p>
            </StartComponent>
            <EndComponent class="flex-1" >
                <SearchInput class=" border bg-white " :icon="false" placeholder="Enter your email" />
              <button class="bg-black py-2  text-white font-semibold text-sm px-5 " >Subscribe</button>
            </EndComponent>
        </BetweenComponent>
    </EvComponent>
</template>