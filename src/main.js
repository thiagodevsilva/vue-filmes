import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  VueRouter,
  
  router,
  render: h => h(App),
}).$mount('#app')
