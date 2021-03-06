import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "../vue.config";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.component("base-card", BaseCard);
Vue.component("base-button", BaseButton);
Vue.component("base-badge", BaseBadge);
Vue.component("base-spinner", BaseSpinner);
Vue.component("base-dialog", BaseDialog);

new Vue({
  router,
  store,
  config,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
