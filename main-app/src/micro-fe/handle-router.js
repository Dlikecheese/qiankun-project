import { getApps } from '.';
import { importHTML } from './import-html';
import { getNextRoute, getPreveRoute } from './rewrite-router';

/**
 * 处理路由变化
 */
export const handelRouter = async function () {
  // 1.匹配子应用
  const apps = getApps();

  // 1.1获取当前的路由路由
  const prevRoute = apps.find((ele) =>
    getPreveRoute().startsWith(ele.activeRule)
  );

  if (prevRoute) {
    await unmount(prevRoute);
  }

  // 1.2 获取当前路由对应的子应用
  const app = apps.find((ele) => getNextRoute().startsWith(ele.activeRule));
  if (!app) {
    return;
  }

  // 2.加载子应用
  const { template, execScripts } = await importHTML(app.entry);
  const container = document.querySelector(app.container);
  container.appendChild(template);

  //  配置全局环境变量
  window.__POWERED_BY_QIANKUN__ = true;
  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry + '/';

  // 执行子应用的代码，获取子应用导出的生命周期函数（bootstrap/mount/unmount）
  // 子应用打包出来的格式是umd格式。
  const appExport = await execScripts();
  app.bootstrap = appExport.bootstrap;
  app.mount = appExport.mount;
  app.unmount = appExport.unmount;

  await bootstrap(app);
  await mount(app);

  // const html = await fetch(app.entry).then((res) => {
  //   return res.text();
  // });
  // console.log(html);
  // const container = document.querySelector(app.container);
  // // 浏览器处于安全考虑，不会加载innerHTML中的js
  // // 故手动加载js
  // container.innerHTML = html;

  // 3.渲染子应用
};

async function bootstrap(app) {
  if (app.bootstrap) {
    await app.bootstrap();
  }
}
async function mount(app) {
  if (!app.mount) return;
  await app.mount({
    container: document.querySelector(app.container),
  });
}
async function unmount(app) {
  if (!app.unmount) return;
  await app.unmount();
}
