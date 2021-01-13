import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

export const mainRoutes: RouteConfig[] = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/index.vue'),
    },
    {
      path: '/someRoute',
      redirect: '/',
  },
];

const createRouter = () => new VueRouter({
    // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: process.env.BASE_URL,
    routes: mainRoutes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
