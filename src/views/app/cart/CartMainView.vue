<script setup >
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import CartItemsComponent from './components/CartItemsComponent.vue';
import CartSummaryComponent from './components/CartSummaryComponent.vue';

</script>

<template>
    <section >
        <nav>
            <NavBarComponent/>
            <HeaderRoutePaginiationComponent/>
        </nav>
           <EvComponent class="my-10" >
            <div class="flex tablet:flex-col my-10 items-start max_width gap-5 flex-wrap" >
                <CartItemsComponent/>
                <CartSummaryComponent/>
            </div>
           </EvComponent>
        <footer>
            <NewsLetterComponent/>
            <FooterComponent/>
        </footer>
    </section>
</template>