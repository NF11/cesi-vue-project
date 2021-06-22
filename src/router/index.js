import Vue from "vue";
import VueRouter from "vue-router";
import Me from "@/views/livreur/Me";
import CommandesList from "@/views/commandes/CommandesList";
import MyCommandeList from "@/views/commandes/MyCommandeList";
import Register from "@/views/livreur/Register";
import NotFound from "@/views/NotFound";
import Login from "@/views/livreur/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/commandes",
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
    path: "/inscription",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
