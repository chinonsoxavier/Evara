<script lang="ts" setup>
import EvComponent from '../../../components/EvComponent.vue';
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import ProductGridComponent from '../../../components/ProductGridComponent.vue';

</script>

<template>
  <section>
    <nav><NavBarComponent /> <HeaderRoutePaginiationComponent /></nav>
    <section class="py-5">
      <EvComponent class="py-5">
        <p class="text-normal font-semibold">
          <span class="text-primary mr-1">100</span>items found for you
        </p>
      </EvComponent>
      <ProductGridComponent />
    </section>
    <footer>
      <NewsLetterComponent />
      <FooterComponent />
    </footer>
  </section>
</template>
