import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router/index.js';

import './assets/reset.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
