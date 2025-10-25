import { handelRouter } from './handle-router';
import { rewriteRouter } from './rewrite-router';

let _apps = [];

// 用于获取注册的子应用信息
export const getApps = () => _apps;

// 注册子应用
export const registerMicroApps = (app) => {
  _apps = app;
};

// 启动微前端
export const start = () => {
  // 微前端运行原理：
  // 1.监听路由变化（两种路由方式：hash/history，此项目用history方式）
  // 2.匹配子应用
  // 3.加载子应用
  // 4.渲染子应用
  rewriteRouter();
  handelRouter();
};
