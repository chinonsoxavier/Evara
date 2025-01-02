<script setup>
import ColumnStartComponent from "../ColumnStartComponent.vue";
import IconComponent from "../IconComponent.vue";
import DashboardDuoIcon from "../icons/duo-tone/DashboardDuoIcon.vue";
import DoubleRightArrowDuoIcon from "../icons/duo-tone/DoubleRightArrowDuoIcon.vue";
import ImageComponent from "../ImageComponent.vue";
import LogoImage from "../logo/LogoImage.vue";
import StartComponent from "../StartComponent.vue";
import CaretDownIcon from "../icons/line-icons/CaretDownIcon.vue";
import ProductsDuoIcon from "../icons/duo-tone/ProductsDuoIcon.vue";
import TextButton from "../buttons/TextButton.vue";
import PlusDuoIcon from "../icons/duo-tone/PlusDuoIcon.vue";
import BetweenComponent from "../BetweenComponent.vue";
// import StartComponent from "../StartComponent.vue";
// import { useRoute } from "vue-router";
import {   ref } from "vue";
import CategoriesDuoIcon from "../icons/duo-tone/CategoriesDuoIcon.vue";
import OrdersDuoIcon from "../icons/duo-tone/OrdersDuoIcon.vue";
import AttributesDuoIcon from "../icons/duo-tone/AttributesDuoIcon.vue";
import ProfileDuoIcon from "../icons/duo-tone/ProfileDuoIcon.vue";
import CustomersDuoIcon from "../icons/duo-tone/CustomersDuoIcon.vue";
import ChatDuoIcon from "../icons/duo-tone/ChatDuoIcon.vue";
import EmailDuoIcon from "../icons/duo-tone/EmailDuoIcon.vue";
import {  useRoute } from "vue-router";
import { ProductImg } from "../../utilities/exports";
const route = useRoute();
const pageDropDown = ref(null);
// const activePage = ref('');
// route.name

// const activePageClass =(prop)=> computed(() => {
//   return route.name.includes(prop);
//  })
// onMounted(() => {
//   activePage.value = route.name;
//   alert("changed");
// });


const activePageClass = (page) => {
  return route.name.includes(page);
}

const SetPageDropDown = (page) => {
  if (pageDropDown.value != page) {
    pageDropDown.value = page;
  } else {
    pageDropDown.value = null;
  }
  console.log(pageDropDown.value);
  console.log(page);
};



</script>

<template>
  <div class="w-full border-r border-r-gray-400 bg-white duration-500 dark:bg-[#0a2744] h-screen">
    <div class="h-[30%]" >
    <div class="bg-[re] flex items-center justify-between py-5 pl-6 bg-[#001e3c]">
      <LogoImage class="fill-white max-w-36 w-full bg-[lue]" />
      <IconComponent>
        <DoubleRightArrowDuoIcon class="w-5 h-5 fill-white" />
      </IconComponent>
    </div>
    <StartComponent class="gap-2 py-4 pl-6">
      <ImageComponent
        :src="ProductImg"
        alt="image"
        class="max-w max-w-10"
        :rounded="true"
      />
      <ColumnStartComponent>
        <StartComponent class="p-0">
          <p class="text-medium font-eebo font-medium text-darkText dark:text-white ">
            Chinonso Xavier
          </p>
          <IconComponent class="h-3">
            <CaretDownIcon class="w-5 h-5 fill-darkText dark:fill-white" />
          </IconComponent>
        </StartComponent>
        <p class="smallText">chinonsoxavier@gmail.com</p>
      </ColumnStartComponent>
    </StartComponent>
    <StartComponent class="pb-4 pl-6">
      <TextButton
        :icon="PlusDuoIcon"
        text="Create Product"
        class="rounded-lg text-small"
      />
    </StartComponent>
    </div>
    <div class="overflow-y-scroll h-[70%]">
      <ColumnStartComponent class="gap-2 w-full">
        <RouterLink
          to="/vendor/dashboard"
          active-class="active"
          class="fill-gray-500 text-gray-500 duration-500 gap-2 flex items-center justify-center pl-6"
          :exact="false"
        >
          <IconComponent class="w-7">
            <DashboardDuoIcon
              class="w-6 h-6 fill group-hover:fill-current"
            />
          </IconComponent>
          <p class="font-Heebo text-normal text-inherit font-medium">
            Dashboard
          </p>
        </RouterLink>

        <div
        :class="[activePageClass('vendor-products') && 'active']"
          class="pr-2 cursor-pointer fill-gray-500 text-gray-500 w-full gap-2 group fex items-center justify-center pl-6"
        >
          <BetweenComponent
            class="w-full duration-500"
            @click="SetPageDropDown('products')"
          >
            <StartComponent class="gap-2">
              <IconComponent class="w-7">
                <ProductsDuoIcon class="w-6 h-6 group-hover:fill-current" />
              </IconComponent>
              <p class="font-Heebo text-normal text-inherit font-medium">
                Products
              </p>
            </StartComponent>
            <IconComponent>
              <CaretDownIcon class="w-4 h-4" />
            </IconComponent>
          </BetweenComponent>
          <Transition name="slide-fade">
            <ColumnStartComponent
              v-if="pageDropDown == 'products'"
              class="gap-3 pl-9"
            >
              <RouterLink
                to="/vendor/products/list"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">List</p> </RouterLink
              ><RouterLink
                to="/vendor/products/grid"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Grid</p> </RouterLink
              ><RouterLink
                to="/vendor/products/detail"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Detail</p> </RouterLink
              ><RouterLink
                to="/vendor/products/edit"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Edit</p> </RouterLink
              ><RouterLink
                to="/vendor/products/create"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm hover:opacity-100 duration-500 opacity-65">
                  Create
                </p>
              </RouterLink>
            </ColumnStartComponent>
          </Transition>
        </div>
       <div
               :class="[activePageClass('vendor-categories') && 'active']"

          class="pr-2 cursor-pointer w-full fill-gray-500 text-gray-500 gap-2 group fex items-center justify-center pl-6"
        >
          <BetweenComponent
            class="w-full duration-500"
            @click="SetPageDropDown('categories')"
          >
            <StartComponent class="gap-2">
              <IconComponent class="w-7">
                <CategoriesDuoIcon class="w-6 h-6 group-hover:fill-current" />
              </IconComponent>
              <p class="font-Heebo text-normal text-inherit font-medium">
                Category
              </p>
            </StartComponent>
            <IconComponent>
              <CaretDownIcon class="w-4 h-4" />
            </IconComponent>
          </BetweenComponent>
          <Transition name="slide-fade">
            <ColumnStartComponent
              v-if="pageDropDown == 'categories'"
              class="gap-3 pl-9"
            >
              <RouterLink
                to="/vendor/categories/list"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">List</p> </RouterLink
              ><RouterLink
                to="/vendor/categories/grid"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Grid</p> </RouterLink
              ><RouterLink
                to="/vendor/categories/detail"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Detail</p> </RouterLink
              ><RouterLink
                to="/vendor/categories/edit"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Edit</p> </RouterLink
              ><RouterLink
                to="/vendor/categories/create"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm hover:opacity-100 duration-500 opacity-65">
                  Create
                </p>
              </RouterLink>
            </ColumnStartComponent>
          </Transition>
        </div>

        <div
                :class="[activePageClass('vendor-products') && 'orders']"

          class="pr-2 cursor-pointer w-full fill-gray-500 text-gray-500 gap-2 group fex items-center justify-center pl-6"
        >
          <BetweenComponent
            class="w-full duration-500"
            @click="SetPageDropDown('orders')"
          >
            <StartComponent class="gap-2">
              <IconComponent class="w-7">
                <OrdersDuoIcon class="w-6 h-6 group-hover:fill-current" />
              </IconComponent>
              <p class="font-Heebo text-normal text-inherit font-medium">
                Orders
              </p>
            </StartComponent>
            <IconComponent>
              <CaretDownIcon class="w-4 h-4" />
            </IconComponent>
          </BetweenComponent>
          <Transition name="slide-fade">
            <ColumnStartComponent
              v-if="pageDropDown == 'orders'"
              class="gap-3 pl-9"
            >
              <RouterLink
                to="/vendor/orders/list"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">List</p> </RouterLink
              ><RouterLink
                to="/vendor/orders/grid"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Grid</p> </RouterLink
              ><RouterLink
                to="/vendor/orders/detail"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Detail</p> </RouterLink
              ><RouterLink
                to="/vendor/orders/edit"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Edit</p> </RouterLink
              ><RouterLink
                to="/vendor/orders/create"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm hover:opacity-100 duration-500 opacity-65">
                  Create
                </p>
              </RouterLink>
            </ColumnStartComponent>
          </Transition>
        </div>
         <div
                 :class="[activePageClass('vendor-attributes') && 'active']"

          class="pr-2 cursor-pointer w-full  fill-gray-500 text-gray-500 gap-2 group fex items-center justify-center pl-6"
        >
          <BetweenComponent
            class="w-full duration-500"
            @click="SetPageDropDown('attributes')"
          >
            <StartComponent class="gap-2">
              <IconComponent class="w-7">
                <AttributesDuoIcon class="w-6 h-6 group-hover:fill-current" />
              </IconComponent>
              <p class="font-Heebo text-normal text-inherit font-medium">
                Attributes
              </p>
            </StartComponent>
            <IconComponent>
              <CaretDownIcon class="w-4 h-4" />
            </IconComponent>
          </BetweenComponent>
          <Transition name="slide-fade">
            <ColumnStartComponent
              v-if="pageDropDown == 'attributes'"
              class="gap-3 pl-9"
            >
              <RouterLink
                to="/vendor/attributes/list"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">List</p> </RouterLink
              ><RouterLink
                to="/vendor/attributes/grid"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Grid</p> </RouterLink
              ><RouterLink
                to="/vendor/attributes/detail"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Detail</p> </RouterLink
              ><RouterLink
                to="/vendor/attributes/edit"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Edit</p> </RouterLink
              ><RouterLink
                to="/vendor/attributes/create"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm hover:opacity-100 duration-500 opacity-65">
                  Create
                </p>
              </RouterLink>
            </ColumnStartComponent>
          </Transition>
        </div>
       <div
               :class="[activePageClass('vendor-coupons') && 'active']"

          class="pr-2 cursor-pointer w-full  fill-gray-500 text-gray-500 gap-2 group fex items-center justify-center pl-6"
        >
          <BetweenComponent
            class="w-full duration-500"
            @click="SetPageDropDown('coupons')"
          >
            <StartComponent class="gap-2">
              <IconComponent class="w-7">
                <AttributesDuoIcon class="w-6 h-6 group-hover:fill-current" />
              </IconComponent>
              <p class="font-Heebo text-normal text-inherit font-medium">
                Coupons
              </p>
            </StartComponent>
            <IconComponent>
              <CaretDownIcon class="w-4 h-4" />
            </IconComponent>
          </BetweenComponent>
          <Transition name="slide-fade">
            <ColumnStartComponent
              v-if="pageDropDown == 'coupons'"
              class="gap-3 pl-9"
            >
              <RouterLink
                to="/vendor/coupons/list"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">List</p> </RouterLink
              ><RouterLink
                to="/vendor/coupons/grid"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Grid</p> </RouterLink
              ><RouterLink
                to="/vendor/coupons/detail"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Detail</p> </RouterLink
              ><RouterLink
                to="/vendor/coupons/edit"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm duration-500">Edit</p> </RouterLink
              ><RouterLink
                to="/vendor/coupons/create"
                active-class="sub-active"
                class="w-full text-gray-400 duration-500 hover:text-white hover:translate-x-1"
                :exact="false"
              >
                <p class="text-sm hover:opacity-100 duration-500 opacity-65">
                  Create
                </p>
              </RouterLink>
            </ColumnStartComponent>
          </Transition>
        </div>
        <StartComponent class="pl-6 py-4">
          <p
            class="text-sm tracking-widest font-Heebo font-medium text-gray-500"
          >
            OTHER
          </p>
        </StartComponent>
        <RouterLink
          to="/vendor/profile"
          active-class="active"
          class=" fill-gray-500 text-gray-500 duration-500 hover:opacity-65 gap-2 flex items-center justify-center pl-6"
          :exact="false"
        >
          <IconComponent class="w-7">
            <ProfileDuoIcon
              class="w-6 h-6 fill-lightTxt group-hover:fill-current"
            />
          </IconComponent>
          <p class="font-Heebo text-normal text-inherit font-medium">Profile</p>
        </RouterLink>
        <RouterLink
          to="/vendor/followers"
          active-class="active"
          class=" fill-gray-500 text-gray-500 duration-500 hover:opacity-65 gap-2 flex items-center justify-center pl-6"
          :exact="false"
        >
          <IconComponent class="w-7">
            <CustomersDuoIcon
              class="w-6 h-6 fill-lightTxt group-hover:fill-current"
            />
          </IconComponent>
          <p class="font-Heebo text-normal text-inherit font-medium">
            Followers
          </p>
        </RouterLink>
        <RouterLink
          to="/vendor/chat"
          active-class="active"
          class=" fill-gray-500 text-gray-500 duration-500 hover:opacity-65 gap-2 flex items-center justify-center pl-6"
          :exact="false"
        >
          <IconComponent class="w-7">
            <ChatDuoIcon
              class="w-6 h-6 fill-lightTxt group-hover:fill-current"
            />
          </IconComponent>
          <p class="font-Heebo text-normal text-inherit font-medium">Chat</p>
        </RouterLink>
        <RouterLink
          to="/vendor/mails"
          active-class="active"
          class=" fill-gray-500 text-gray-500 duration-500 hover:opacity-65 gap-2 flex items-center justify-center pl-6"
          :exact="false"
        >
          <IconComponent class="w-7">
            <EmailDuoIcon
              class="w-6 h-6 fill-lightTxt group-hover:fill-current"
            />
          </IconComponent>
          <p class="font-Heebo text-normal text-inherit font-medium">Mail</p>
        </RouterLink>
      </ColumnStartComponent>
    </div>
  </div>
</template>

<style scoped>
a.active {
  @apply dark:fill-white fill-darkText dark:text-white text-darkText font-medium  dark:hover:fill-white hover:fill-darkText dark:hover:text-white hover:text-darkText;
}

a.active div {
  @apply hover:fill-primary hover:text-primary duration-500;
}
div.active {
  @apply dark:fill-white fill-darkText dark:text-white text-darkText font-medium  dark:hover:fill-white hover:fill-darkText hover:text-darkText dark:hover:text-white;
}
a.sub-active {
  @apply font-medium text-darkText dark:text-white duration-500;
}

.slide-fade {
  transition: all 0.15s ease-out;
}
</style>
