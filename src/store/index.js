import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    user: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    },
    commandes: [
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acquittementLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acquittementLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acceptationCommande",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
      {
        _id: Math.floor(Math.random() * 10000).toString(),
        clientId: Math.floor(Math.random() * 10000).toString(),
        livreurId: null,
        restaurateurId: Math.floor(Math.random() * 10000).toString(),
        status: "acquittementLivraison",
        productsOrder: [{ id: 25, quantity: 2 }],
        menusOrder: [{ id: 25, quantity: 2 }],
      },
    ],
  }),
  mutations: {
    setLivreur(state, payload) {
      state.user = { ...state.user, ...payload };
    },
  },
  actions: {
    registerLivreur(context, payload) {
      const livreur = {
        firstname: payload.nom,
        lastname: payload.prenom,
        email: payload.email,
        phone: payload.tel,
        password: payload.password,
      };
      context.commit("setLivreur", livreur);
    },
  },
  getters: {
    getCommandes(state) {
      return state.commandes;
    },
    hasCommandes(state) {
      return state.commandes && state.commandes.length > 0;
    },
    isLogin(state) {
      return !!state.user;
    },
  },
});
