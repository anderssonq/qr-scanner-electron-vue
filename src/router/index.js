import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("../views/Content/Content.vue"),
    redirect: { path: "/qr-screen" },
    children: [
      {
        name: "qrcode",
        path: "qr-screen",
        component: () => import("../views/QRScreen/QRScreen.vue")
      },
      {
        name: "videos",
        path: "videos",
        component: () => import("../views/Videos/Videos.vue")
      },
      {
        name: "auth",
        path: "auth",
        component: () => import("../views/Auth/Auth.vue")
      }
    ]
  },
  {
    path: "/app",
    name: "dashboard",
    component: () => import("../views/Admin/Admin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
