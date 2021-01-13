import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/router';

import App from './App.vue';

import SvgIcon from 'vue-svgicon';
import './icons/components';
import { BootstrapVue } from 'bootstrap-vue';
import '@/App.scss';

import '@/types/types';

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
