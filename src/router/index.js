import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComeSitTool from "../views/ComeSitTool.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ComSitTool",
    name: "ComeSitTool",
    component: ComeSitTool,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
