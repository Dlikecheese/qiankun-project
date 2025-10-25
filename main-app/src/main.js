import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { registerMicroApps, start } from 'qiankun';
// import { registerMicroApps, start } from './micro-fe';

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'sub-app1',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/sub-app1',
  },
  {
    name: 'sub-app2',
    entry: '//localhost:7102',
    container: '#subapp-viewport',
    activeRule: '/sub-app2',
  },
  {
    name: 'sub-app3',
    entry: '//localhost:7103',
    container: '#subapp-viewport',
    activeRule: '/sub-app3',
  },
]);

start({
  sandBox: {
    // strictStyleIsolation: true,// shadow DOM隔离
    // experimentStyleIsolation: true, // 通过添加选择器范围解决样式冲突：如
    // 所有样式都在div[data-qiankun="app-vue2"] 下：
    //  sub-app1 div {}  =>  div[data-qiankun="app-vue2"] sub-app1 div{
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
