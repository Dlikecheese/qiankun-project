import { handelRouter } from './handle-router';

// 自己维护一个路由的历史记录。浏览器出于安全考虑没有提供历史记录
let prevRoute = ''; //上一个路由
let nextRoute = window.location.pathname; //下一个路由

export const getPreveRoute = () => prevRoute;
export const getNextRoute = () => nextRoute;

// 采用history路由示例
// hisotry.go ,history.back, history.forward 使用popstate事件监听
// pushState/replaceState 需要重写方法，添加路由变化处理逻辑
export const rewriteRouter = () => {
  // 不能通过window.popstate = function(){}去覆写，会覆盖以前的监听，而是通过如下方式，添加监听
  window.addEventListener('popstate', () => {
    // popstate触发的时候，路由已经完成导航了
    // 利用nextRoute和prevRoute记录路由变化
    prevRoute = nextRoute; //之前的
    nextRoute = window.location.pathname; // 最新的
    handelRouter();
  });

  // 先做备份
  const rowPushState = window.history.pushState;
  window.history.pushState = (...args) => {
    prevRoute = window.location.pathname;
    rowPushState.apply(window.history, args);
    nextRoute = window.location.pathname;

    handelRouter();
  };

  const rawReplaceState = window.history.replaceState;
  window.history.replaceState = (...args) => {
    prevRoute = window.location.pathname;
    rawReplaceState.apply(window.history, args);
    nextRoute = window.location.pathname;

    handelRouter();
  };
};
