<script lang="ts" setup >
import EvComponent from '../../../components/EvComponent.vue';
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import AccountMenuComponent from './components/AccountMenuComponent.vue';

</script>

<template>
   <section class="b-[#f1f1f2] bg-white" >
    <nav>
        <NavBarComponent/>
        <HeaderRoutePaginiationComponent/>
    </nav>
       <EvComponent class="py-10" >
          <div class="flex items-start justify-between gap-5" >
            <AccountMenuComponent/>
            <RouterView></RouterView>
          </div>
       </EvComponent>
    <footer>
        <NewsLetterComponent/>
        <FooterComponent/>
    </footer>
   </section>
</template>