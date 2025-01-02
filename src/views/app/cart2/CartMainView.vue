<script setup >
import EvComponent from '../../../components/EvComponent.vue';
import FlexComponent from '../../../components/FlexComponent.vue';
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import CartShippingComponent from './components/CartShippingComponent.vue';
import CartTotalsComponent from './components/CartTotalsComponent.vue';
</script>

<template>
    <section>
        <nav>
            <NavBarComponent/>
            <HeaderRoutePaginiationComponent/>
        </nav>
        <EvComponent class="py-20" >
            <CartItemsView/>
            <hr>
            <FlexComponent class="w-full mt-10 flex-wrap gap-5" >
                <CartShippingComponent/>
                <CartTotalsComponent/>
            </FlexComponent>
        </EvComponent>
    <footer>
        <NewsLetterComponent/>
        <FooterComponent/>
    </footer>
</section>
</template>