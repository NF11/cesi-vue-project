import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const baseUrl = "http://localhost:5000";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.withCredentials = true;
export default new Vuex.Store({
  state: () => ({
    user: null,
    commandes: [],
    MyCommandes: [],
  }),
  mutations: {
    setLivreur(state, payload) {
      state.user = { ...state.user, ...payload };
    },
    setCommande(state, payload) {
      state.commandes = payload;
    },
    setMyCommandes(state, payload) {
      state.MyCommandes = payload;
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

    async loginUser(context, payload) {
      try {
        let result = await axios.post(
          baseUrl + "/signIn",
          {
            email: payload.email,
            password: payload.password,
          }
          // ,
          // {
          //   withCredentials: false,
          // }
        );
        if (result.data.role !== "livreur")
          throw new Error(
            "Vous n'avez pas le droit d'acceder a cette application"
          );
        context.commit("setLivreur", result.data);
      } catch (err) {
        console.log(err.message);
        throw new Error("erreur avec les identifiant fourni");
      }
    },
    async loadCommandes(context) {
      try {
        let result = await axios.get(baseUrl + "/commandes");
        context.commit("setCommande", result.data);
      } catch (err) {
        throw new Error("impossible d'accéder a la ressource");
      }
    },
    async loadMyCommandes(context, userId) {
      try {
        let result = await axios.get(baseUrl + "/commandes/livreur/" + userId);
        context.commit("setMyCommandes", result.data);
      } catch (err) {
        throw new Error("impossible d'accéder a la ressource");
      }
    },

    async accepteCommandes(context, commandeId) {
      try {
        let result = await axios.patch(
          baseUrl + "/commandes/" + commandeId + "/accepter",
          {
            livreurId: context.getters.getUser._id,
          }
        );
        if (result.status === 202) {
          return result.data.message;
        } else return "ok";
      } catch (err) {
        throw new Error(err.message);
      }
    },

    async annulerCommandes(context, commandeId) {
      try {
        let result = await axios.patch(
          baseUrl + "/commandes/" + commandeId + "/annuler",
          {
            livreurId: context.getters.getUser._id,
          }
        );
        if (result.status === 202) {
          return result.data.message;
        } else return "ok";
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  getters: {
    getCommandes(state) {
      return state.commandes;
    },
    getUser(state) {
      return state.user;
    },
    getMyCommandes(state) {
      return state.MyCommandes;
    },
    hasCommandes(state) {
      return state.commandes && state.commandes.length > 0;
    },
    hasMyCommandes(state) {
      return state.MyCommandes && state.MyCommandes.length > 0;
    },
    isLogin(state) {
      return !!state.user;
    },
  },
});
