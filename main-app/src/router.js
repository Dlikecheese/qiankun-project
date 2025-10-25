import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    {
      path: '/sub-app1',
      component: { render: (h) => h('div', '子应用1加载中...') },
    },
    {
      path: '/sub-app2',
      component: { render: (h) => h('div', '子应用2加载中...') },
    },
    {
      path: '/sub-app3',
      component: { render: (h) => h('div', '子应用3加载中...') },
    },
    { path: '/', redirect: '/home' },
  ],
});
