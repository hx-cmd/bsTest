import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);


import less from "less";
Vue.use(less);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
