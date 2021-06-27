import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const baseUrl = "http://localhost:5000";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default new Vuex.Store({
  state: () => ({
    user: {
      _id: "60d3d8195adfde7b89689ca0",
      name: "trcommerciale566",
      email: "strincommercial56@gmail.com",
      phone: "0784654645564",
      role: "commercial",
      password: "string",
    },
    commandes: [],
  }),
  mutations: {
    setLivreur(state, payload) {
      state.user = { ...state.user, ...payload };
    },
    setCommande(state, payload) {
      state.commandes = payload;
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
    async loadCommandes(context) {
      try {
        let result = await axios.get(baseUrl + "/commandes", {});
        context.commit("setCommande", result.data);
      } catch (err) {
        throw new Error("impossible d'accéder a la ressource");
      }
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
