import Vue from "vue";
import App from "./App.vue";
import './assets/style.css'
import { App as AppLication } from "./modules/App";

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", () => {
  new AppLication(document.querySelector("body"));
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
