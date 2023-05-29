import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'


import posPlugin from '../packages/index';
import './index.less'
// import posPlugin from '@syman/pos-plugin';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui';
Vue.use(posPlugin);
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
