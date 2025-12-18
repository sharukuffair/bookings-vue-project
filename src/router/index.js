import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingForm from "../views/BookingForm.vue";
import BookingTable from "../views/BookingTable.vue";
import BookingCard from "../views/BookingCard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/add-booking",
      name: "BookingForm",
      component: BookingForm,
    },
    {
      path: "/view-booking",
      name: "BookingTable",
      component: BookingTable,
    },
    {
      path: "/events",
      name: "BookingCard",
      component: BookingCard,
    },
  ],
});
