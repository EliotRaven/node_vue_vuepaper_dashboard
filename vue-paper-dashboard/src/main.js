import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from './store/index';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import {DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

Vue.use(PaperDashboard);
Vue.component(DatePicker.name, DatePicker)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
