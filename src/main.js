import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from "vue-clipboard2";
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.component('v-calendar', Calendar)
Vue.component('v-date-picker', DatePicker)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
