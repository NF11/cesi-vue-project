import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "../vue.config";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  config,
  render: (h) => h(App),
}).$mount("#app");
