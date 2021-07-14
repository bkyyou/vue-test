import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router/index.js';
import ElementUI from 'element-ui';
import './utils/response.js';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';

console.log('ElementUI', ElementUI);

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  // el: '#app',
  template: '<div>1111<div>',
  router,
  store,
  render: h => h(App),
})
.$mount('#app')
