<script setup >
import BetweenComponent from '../../../../components/BetweenComponent.vue';
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ImageComponent from '../../../../components/ImageComponent.vue';
import { HeroBg } from '../../../../utilities/exports';

</script>

<template>
    <section>
        <CenterComponent class="w-full h-sceen" >
             <BetweenComponent class="w-full max_width base:flex-col base:gap-10 h-full mt-10" >
                <div class="flex-col w-full flex-1 gap-2 font-Heebo flex items-start justify-start" >
                    <p class="text-medium font-semibold text-Heebo mobile:text-sm text-lightText" >Hot Promotions</p>
                    <h2 class="text-5xl font-bold font-Heebo tablet:text-4xl " >Fashion Trending</h2>
                    <h2 class="text-6xl font-bold font-Heebo tablet:text-5xl text-primary" >Great Collection</h2>
                    <p class="text-sm font-semibold font-Heebo text-lightText" >Save more with coupons & 20% off</p>
                    <TextButton theme="primary" />
                </div>
                <CenterComponent class="w-full flex-1" >
                    <ImageComponent class="object-contain" :src="HeroBg" alt="Hero Image" />
                </CenterComponent>
             </BetweenComponent>
        </CenterComponent>
    </section>
</template>