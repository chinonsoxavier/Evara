<script  lang="ts" setup>
import { ref } from 'vue';
import CategoryButton from '../../../components/buttons/CategoryButton.vue';
import EvComponent from '../../../components/EvComponent.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import ProductGridComponent from '../../../components/ProductGridComponent.vue';
import ProductsSlider from '../../../components/ProductsSlider.vue';
import StartComponent from '../../../components/StartComponent.vue';
import AdDealsComponent from './components/AdDealsComponent.vue';
import DealsComponent from './components/DealsComponent.vue';
import HeroView from './components/HeroView.vue';
import SideMenu from '../../../components/nav-menus/SideMenu.vue';


const activeCategories = ref("Featured");

const setActiveCategory = (category) => {
  if (activeCategories.value) {
    activeCategories.value = category;
  }
};
</script>

<template class="relative" >
  <SideMenu/>
  <section>
    <nav>
      <NavBarComponent />
    </nav>
    <section>
      <HeroView />
      <ProductsSlider label="Popular Categories" />
      <div>
        <EvComponent>
          <StartComponent class="gap-3 my-10">
            <CategoryButton
              @emitTextButtonClick="setActiveCategory('Featured')"
              v-model="activeCategories"
              :active="activeCategories == 'Featured'"
              text="Featured"
            />
            <CategoryButton
              @emitTextButtonClick="setActiveCategory('Popular')"
              v-model="activeCategories"
              :active="activeCategories == 'Popular'"
              text="Popular"
            />
            <CategoryButton
              @emitTextButtonClick="setActiveCategory('New Added')"
              v-model="activeCategories"
              :active="activeCategories == 'New Added'"
              text="New Added"
            />
          </StartComponent>
        </EvComponent>
        <ProductGridComponent />
      </div>
      <DealsComponent />
      <ProductsSlider label="New Arrivals" />
      <AdDealsComponent />
    </section>
    <footer>
      <NewsLetterComponent />
      <FooterComponent />
    </footer>
  </section>
</template>
