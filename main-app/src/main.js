import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { registerMicroApps, start } from 'qiankun';

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

start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
