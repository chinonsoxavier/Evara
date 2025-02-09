<script lang="ts" setup>
import { onBeforeMount, onMounted, onUnmounted, ref, watch } from "vue";
import LogoImage from "../logo/LogoImage.vue";
import ColumnComponent from "../ColumnComponent.vue";
import EvInput from "../inputs/EvInput.vue";
import SearchIcon from "../icons/line-icons/SearchIcon.vue";
import IconComponent from "../IconComponent.vue";
import HeartIcon from "../icons/duo-tone/HeartIcon.vue";
import ShoppingBagIcon from "../icons/duo-tone/ShoppingBagIcon.vue";
const navbarHeight = ref(null);
const navbar = ref(null);
const inputModel = defineModel();
import { useMenuStore } from "../../utilities/store";
import { useAuthStore } from "../../utilities/store/authStore";
const authStore = useAuthStore();

const MenuStore = useMenuStore();
watch(
  () => inputModel,
  (newValue) => {}
);

onMounted(() => {
  navbarHeight.value = navbar.value.offsetHeight;
});

const scrollThreshold = 400;
var isFixed = ref(false);
const windowWidth = ref(window.innerWidth);


const FixedNavbarScroll = () => {
  isFixed.value = scrollThreshold <= window.scrollY ? true : false;
  windowWidth.value = window.inneridth;
  console.log(navbarHeight.value);
};
onMounted(() => {
  window.addEventListener("scroll", FixedNavbarScroll);
  window.addEventListener("resize", FixedNavbarScroll);
});

onBeforeMount(() => {
  window.addEventListener("scroll", FixedNavbarScroll);
  window.addEventListener("resize", FixedNavbarScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", FixedNavbarScroll);
  window.removeEventListener("resize", FixedNavbarScroll);
});

const Logout = async () => {
   await authStore.logout();
  console.log("logout");
};

</script>

<template>
  <section class=" flex items-center relative flex-col justify-center w-full">
    <div
      class="w-full bg-lightPrimary py-4 h-min flex items-center justify-center border-b-primary border-b-2"
    >
      <div class="montserrat flex justify-between w-full max_width">
        <div class="gap-3 flex">
          <span class="text-small font-medium tracking-widest"
            >(+234)-8774-900-8399</span
          >
          <span class="text-small font-medium">Our Location</span>
        </div>
        <div class="font-medium text-small">
          <p>Super value deals - Save more with coupons</p>
        </div>
        <div class="flex items-center base:hidden">
          <p class="text-small font-medium tracking-widest">
            <span class="cursor-pointer"
              ><RouterLink to="/auth/login">Log In</RouterLink></span
            >
            <span class="mx-1">/</span>
            <span class="cursor-pointer">
              <RouterLink to="/auth/register">Sign Up</RouterLink></span
            >
          </p>
        </div>
      </div>
    </div>
    <div
      ref="navbar"
      :class="[isFixed ? 'fixed top-0 py-5 bg-white shadow-md ' : 'relative']"
      class="flex flex-col items-center gap-3 py-5 z-40 justify-center w-full"
    >
      <div class="max_width gap-8 w-full flex items-center justify-between">
        <div class="flex items-center gap-8 justify-center">
          <LogoImage class="w-24" />
          <div class="flex items-center gap-4 justify-between base:hidden">
            <RouterLink to="/" exactActiveClass="active">
              <span
                class="text-medium cursor-pointer hover-font-bold font-semibold hover:text-primary duration-500"
                >Home</span
              >
            </RouterLink>
            <RouterLink to="/shop" exactActiveClass="active">
              <span
                class="text-medium cursor-pointer hover-font-bold font-semibold hover:text-primary duration-500"
                >Shop</span
              >
            </RouterLink>
            <RouterLink
              to="/account/overview"
              :exact="false"
              activeClass="active"
            >
              <span
                class="text-medium cursor-pointer hover-font-bold font-semibold hover:text-primary duration-500"
                >My Account</span
              >
            </RouterLink>
            <!-- <span
              class="text-medium cursor-pointer hover-font-bold font-semibold hover:text-primary duration-500"
              >Compare</span
            >
            <span
              class="text-medium cursor-pointer hover-font-bold font-semibold hover:text-primary duration-500"
              >Login</span
            > -->
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end gap-4">
          <ColumnComponent class="relative tablet:hidden flex-1">
            <EvInput
              v-model="inputModel"
              placeholder="Search for items..."
              :icon="SearchIcon"
              iconPosition="right"
            />
            <div class="w-full p-3 bg-white hidden shadow-sm absolute top-10">
              <p>search</p>
            </div>
          </ColumnComponent>
          <RouterLink
            to="/account/wishlist"
            activeClass="iconActive"
            class="rounded-full"
          >
            <IconComponent class="relative hover:bg-lightPrimary">
              <span
                class="absolute bottom-6 font-semibold -right-1 bg-primary rounded-full flex items-center justify-center w-[18px] h-[18px]"
                ><span class="text-white mt-[1px] text-sm">0</span></span
              >
              <HeartIcon class="w-[26px] h-[26px]" />
            </IconComponent>
          </RouterLink>
          <RouterLink to="/cart" activeClass="iconActive" class="rounded-full">
            <IconComponent class="relative hover:bg-lightPrimary">
              <span
                class="absolute bottom-6 font-semibold -right-1 bg-primary rounded-full flex items-center justify-center w-[18px] h-[18px]"
                ><span class="text-white mt-[1px] text-sm">0</span></span
              >
              <ShoppingBagIcon class="w-[26px] h-[26px]" />
            </IconComponent>
          </RouterLink>
        </div>
        <div class="hidden base:block" >
          <svg v-on:click="MenuStore.ToggleHomeMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 cursor-pointer"
          >
            <path
              d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="max_width w-full" >
        <ColumnComponent class="relative hidden tablet:flex flex-1">
            <EvInput
              v-model="inputModel"
              placeholder="Search for items..."
              :icon="SearchIcon"
              iconPosition="right"
            />
            <div class="w-full p-3 bg-white hidden shadow-sm absolute top-10">
              <p>search</p>
            </div>
          </ColumnComponent>
          <p v-on:click="Logout" >Logout</p>
    </div>
    </div>
  </section>
</template>

<style scoped>
a.active {
  @apply text-primary duration-500;
}

a.iconActive {
  @apply bg-lightPrimary duration-500;
}
</style>
