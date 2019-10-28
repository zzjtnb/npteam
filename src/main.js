import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引入vuex
import store from "./store";
import "./registerServiceWorker";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$setTitle = function(title) {
  if (title) {
    document.title = title;
  }
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
