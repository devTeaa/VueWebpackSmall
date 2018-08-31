// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App";
import Hello from "./components/Hello";
import List from "./components/List";

Vue.config.productionTip = true;
Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{ path: "/", component: Hello }, { path: "/list", component: List }]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">    
      <nav>
        <router-link to='/'>Hello</router-link>
        <router-link to='/list'>List</router-link>
      </nav>
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
