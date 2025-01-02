export const vendorRoutes = [
  {
    path: "/vendor",
    name: "vendor",
    meta: { requiresAuth: true },
    component: () => import("../views/vendor/VendorMainView.vue"),
    redirect: "vendor/dashboard",
    children: [
      {
        name: "vendor-dashboard",
        path: "/vendor/dashboard",
        component: () =>
          import("../views/vendor/dashboard/VendorDashboardMainView.vue"),
      },
      {
        name: "vendor-products",
        path: "/vendor/products",
        redirect: "/vendor/products/list",
        children: [
          {
            name: "vendor-products-list",
            path: "/vendor/products/list",
            component: () =>
              import("../views/vendor/products/ProductsListView.vue"),
          },
        ],
      },
      {
        name: "vendor-categories",
        path: "/vendor/categories",
        redirect: "/vendor/categories/list",
        children: [
          {
            name: "vendor-categories-list",
            path: "/vendor/categories/list",
            component: () =>
              import("../views/vendor/categories/CategoryMainView.vue"),
          },
        ],
      },
      {
        name: "vendor-orders",
        path: "/vendor/orders",
        redirect: "/vendor/orders/list",
        children: [
          {
            name: "vendor-orders-list",
            path: "/vendor/orders/list",
            component: () =>
              import("../views/vendor/orders/OrdersMainView.vue"),
          },
        ],
      },
      {
        name: "vendor-attributes",
        path: "/vendor/attributes",
        redirect: "/vendor/attributes/list",
        children: [
          {
            name: "vendor-attributes-list",
            path: "/vendor/attributes/list",
            component: () =>
              import("../views/vendor/attributes/AttributesMainView.vue"),
          },
        ],
      },
    ],
  },
];