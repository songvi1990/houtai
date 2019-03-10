import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from '../src/lib/axios';
Vue.use(axios);

Vue.config.productionTip = false


import router from './lib/router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
