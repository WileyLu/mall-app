import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
    }, {
      path: '/statistics',
      name: 'statistics',
      component: () => import(/* webpackChunkName: "about" */ '../views/statistics.vue'),
    }],
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
