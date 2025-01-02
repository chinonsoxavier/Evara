<script setup >
import { RouterView, useRoute } from 'vue-router';
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import CheckoutOrderSummary from './components/CheckoutOrderSummary.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
const route = useRoute();

const getCurrentRoute = () => {
    return route.name;
}

console.log(getCurrentRoute());
</script>

<template>
    <section class=" relative" >

        <nav>
            <NavBarComponent/>
            <HeaderRoutePaginiationComponent/>
    </nav>
    <EvComponent class="py-10" >
        <div class="flex items-start gap-5" >
            <!-- <RouterView name="" ></RouterView> -->
            <RouterView></RouterView>
            <CheckoutOrderSummary  />
        </div>
    </EvComponent>
    
    <footer>
        <NewsLetterComponent/>
        <FooterComponent/>
    </footer>
</section>
</template>