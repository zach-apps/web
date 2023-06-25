import Vue from 'vue';
import router from "./router";
import App from './App.vue';
import recipes from "./recipes.json";

Vue.config.productionTip = false

let data = {
  recipes: recipes
};



new Vue({
  router, // Make sure to pass the router instance
  data,
  render: (h) => h(App),
}).$mount('#app');
