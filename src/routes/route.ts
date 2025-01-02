import {
  AccountMainView,
  CartsMainView,
  CheckoutMainView,
  HomeMainView,
  LoginMainView,
  ProductDetailsMainView,
  RegisterMainView,
  ResetPasswordMainView,
  ShopMainView,
  verifyAccountMainView,
} from "../views/app/exports";
import { createRouter, createWebHistory } from "vue-router";
import { vendorRoutes } from "./vendor";
import { adminRoutes } from "./admin";
import { useAuthStore } from "../utilities/store/authStore";
import { computed, onMounted, ref, watch } from "vue";

const watchedAuthStatus = ref("");

const routes = [
  ...vendorRoutes,
  ...adminRoutes,
  {
    path: "/",
    name: "home",
    component: HomeMainView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopMainView,
  },
  {
    path: "/auth/login",
    name: "login",
    component: LoginMainView,
    meta: { requiresGuest: true },
  },
  {
    path: "/auth/register",
    name: "register",
    component: RegisterMainView,
    meta: { requiresGuest: true },
  },
  {
    path: "/auth/reset-password",
    name: "reset-password",
    component: ResetPasswordMainView,
  },
  {
    path: "/auth/verify/:token",
    name: "verify",
    component: verifyAccountMainView,
  },
  {
    path: "/auth/refresh-token/:token",
    name: "refresh-token",
    component: verifyAccountMainView,
  },
  {
    path: "/product-details/:id",
    name: "product-details",
    component: ProductDetailsMainView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartsMainView,
  },
  {
    path: "/checkout",
    redirect: "/checkout/summary",
    name: "checkout",
    component: CheckoutMainView,
    children: [
      {
        path: "/checkout/summary",
        name: "checkout-summary",
        component: () =>
          import(
            "../views/app/checkout/components/CheckoutSummaryComponent.vue"
          ),
      },
      {
        path: "/checkout/addresses",
        name: "checkout-addresses",
        component: () =>
          import(
            "../views/app/checkout/components/CheckoutAddressComponent.vue"
          ),
      },
      {
        path: "/checkout/addresses/edit/:id",
        name: "checkout-addresses-edit",
        component: () =>
          import(
            "../views/app/checkout/components/CheckoutAddressEditComponent.vue"
          ),
      },
      {
        path: "/checkout/addresses/create",
        name: "checkout-addresses-create",
        component: () =>
          import(
            "../views/app/checkout/components/CheckoutAddressCreateComponent.vue"
          ),
      },
      {
        path: "/checkout/shipping-options",
        name: "checkout-shipping-options",
        component: () =>
          import(
            "../views/app/checkout/components/CheckkoutShippingOptionsComponent.vue"
          ),
      },
      {
        path: "/checkout/payment-options",
        name: "checkout-payment-options",
        component: () =>
          import(
            "../views/app/checkout/components/CheckoutPaymentComponent.vue"
          ),
      },
    ],
  },
  {
    path: "/account",
    name: "account",
    component: AccountMainView,
    children: [
      {
        path: "/account/overview",
        name: "account-overview",
        redirect: "/account/overview/index",
        children: [
          {
            path: "/account/overview/index",
            name: "account-overview-index",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountOverviewSubView.vue"
              ),
          },
          {
            path: "/account/overview/address/:id",
            name: "account-overview-address",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountAddressSubView.vue"
              ),
          },
          {
            path: "/account/overview/details/edit/:id",
            name: "account-overview-details-edit",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountOverviewDetailsSubView.vue"
              ),
          },
        ],
      },
      {
        path: "/account/order",
        name: "account-order",
        redirect: "/account/order/index",
        children: [
          {
            path: "/account/order/index",
            name: "account-order-index",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountOrdersIndexSubView.vue"
              ),
          },
          {
            path: "/account/order/closed",
            name: "account-order-closed",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountOrdersClosedSubView.vue"
              ),
          },
          {
            path: "/account/order/detail/:id",
            name: "account-order-detail",
            component: () =>
              import(
                "../views/app/account/sub-views/AccountOrderDetailSubView.vue"
              ),
          },
        ],
      },
      {
        path: "/account/inbox",
        name: "account-inbox",
        component: () =>
          import("../views/app/account/sub-views/AccountInboxSubComponent.vue"),
      },
      {
        path: "/pendingreviews",
        name: "pendingreviews",
        component: () =>
          import(
            "../views/app/account/sub-views/AccountPendingReviewsSubView.vue"
          ),
      },
      {
        path: "/pendingreviews/detail/:id",
        name: "pendingreviews-detail",
        component: () =>
          import(
            "../views/app/account/sub-views/AccountPendingReviewsDetailSubView.vue"
          ),
      },
      {
        path: "/account/wishlist",
        name: "pendingreviews-detail",
        component: () =>
          import("../views/app/account/sub-views/AccountWishlistSubView.vue"),
      },
      {
        path: "/account/coupon",
        name: "voucher-index",
        redirect: "/account/coupon/index",
        children: [
          {
            path: "/account/coupon/index",
            name: "voucher",
            component: () =>
              import(
                "../views/app/account/components/AccountCouponActiveComponent.vue"
              ),
          },
          {
            path: "/account/coupon/inactive",
            name: "voucher-inactive",
            component: () =>
              import(
                "../views/app/account/components/AccountCouponInActiveComponent.vue"
              ),
          },
        ],
        component: () =>
          import("../views/app/account/sub-views/AccountVoucherSubview.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

window.addEventListener("load", async () => {
  // alert("js cdsncdscd");
  const authStore = useAuthStore();
  await authStore.LoadUser();
  const user = authStore.getUser();
  console.log(user);
  const authStatus = computed(() => authStore.authStatus);

  watch(authStatus, (newValue) => {
    watchedAuthStatus.value = newValue;
    console.log(newValue);
    console.log(watchedAuthStatus.value);
  });
});

onMounted(async () => {
  const authStore = useAuthStore();
  await authStore.LoadUser();
  const user = computed(() => authStore.user);
  console.log(user.value);
  alert("jh hjh j");
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const authStatus = computed(() => authStore.authStatus);
  const user = computed(() => authStore.user);
  const role = user.value.role;
  console.log(user.value);
  //  await authStore.LoadUser();
  console.log(from);
  // const role = authStore?.user.role;
  // watch(user, (newValue) => {
  //   console.log(newValue);
  // });
  // watch(authStatus, (newValue) => {
  //   watchedAuthStatus.value = newValue;
  //   console.log(newValue);
  //   console.log(watchedAuthStatus.value);
  // });

  // watch([() => authStatus.value,()=>user.value,], ([newAuthStatus, newNewUser]) => {
  //   newUser = newNewUser;
  //   newauthStatus = newAuthStatus
  //   console.log(newAuthStatus);
  // });
  console.log(user.value);
  watch(authStatus, (newValue) => {
    if (newValue == "Logged In") {
      console.log(newValue);
    } else {
      console.log(newValue);
    }
  });

  // if (to.meta.requiresAuth && role != "vendor") {
  //   next({ name: "home" });
  //   return;
  // };
  watch(user, (newValue) => {
    console.log(newValue.role);
    if (to.meta.requiresAuth && newValue.role != "vendor") {
      console.log("role");
      router.push({ path: "/" });
      next({ path: "/" });
      // return;
    }
  });
  watch(authStatus, (newValue) => {
    console.log(newValue);
    if (to.meta.requiresGuest && newValue == "Logged In") {
      console.log("redirect to home");
      router.push({ path: "/" });
      next({ path: "/" });
      // return;
    }
  });
  next();
  // }
});

export default router;
