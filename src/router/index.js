import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComeSitTool from "../views/ComeSitTool.vue";
import TestPage from "../views/TestPage.vue";
import Login from "../views/Login.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/ComSitTool",
    name: "ComeSitTool",
    component: ComeSitTool,
  },
  {
    path: "/TestPage",
    name: "TestPage",
    component: TestPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    if (from.name !== "Login") {
      router.push({ name: "Login" });
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    if (store.getters.isAuthenticated) {
      if (from.name !== "Home") {
        router.push({ name: "Home" });
      }
      return;
    }
    next();
  } else {
    next();
  }
});
export default router;
