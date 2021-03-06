import '@babel/polyfill';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from 'axios';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import Phenogrid from 'phenogrid/dist/phenogrid-bundle';
import 'phenogrid/dist/phenogrid-bundle.css';

import router from './router';
// import './registerServiceWorker';

import App from './App.vue';

const Phenogrid = require('phenogrid');

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
// Vue.use(Phenogrid);

new Vue({
  router,
  mounted() {
  },
  render: h => h(App)
}).$mount('#app');

window.MonarchUIVersion = '0.0.20';
