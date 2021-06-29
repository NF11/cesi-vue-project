import Vue from "vue";
import VueRouter from "vue-router";
import Me from "@/views/livreur/Me";
import CommandesList from "@/views/commandes/CommandesList";
import MyCommandeList from "@/views/commandes/MyCommandeList";
import NotFound from "@/views/NotFound";
import Login from "@/views/livreur/Login";
import store from "../store/index";
import Parrainer from "@/views/livreur/Parrainer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
  {
    path: "/commandes",
    name: "Commandes",
    component: CommandesList,
  },
  {
    path: "/my-commande",
    name: "MyCommande",
    component: MyCommandeList,
  },
  {
    path: "/parrainage",
    name: "Parrainage",
    component: Parrainer,
  },
  // {
  //   path: "/inscription",
  //   name: "Register",
  //   component: Register,
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function (to, _, next) {
  if (to.name !== "Login" && !store.getters.isLogin) {
    next("/login");
  } else next();
});

export default router;
