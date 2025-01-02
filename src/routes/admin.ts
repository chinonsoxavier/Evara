export const adminRoutes = [
 {
    path:"/admin",
      name: "admin",
    redirect:"/admin/dashboard",
      children: [
         {
            name: "admin-dashboard",
            path: "/admin/dashboard",
            component: () => import("../views/admin/dashboard/AdminDashboardMainVue.vue"),
       }
    ],
 }
]