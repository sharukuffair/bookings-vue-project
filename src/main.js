import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
