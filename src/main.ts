import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/router';

import App from './App.vue';

import SvgIcon from 'vue-svgicon';
import { BootstrapVue } from 'bootstrap-vue';

import '@/App.scss';
import '@/api/types';
import './icons/components';

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
