import { fetchResource } from './fetch-resource';

// 注：qiankun采用的是 import-entry-html 库
export const importHTML = async (url) => {
  const html = await fetchResource(url);
  const template = document.createElement('div');
  template.innerHTML = html;

  const scripts = template.querySelectorAll('script');

  // 获取所有script标签的代码：
  // 返回的是文本组成的数组，形式：【代码，代码】
  function getExternalScripts() {
    return Promise.all(
      Array.from(scripts).map((script) => {
        const src = script.getAttribute('src');
        // 内联脚本，不需要src
        if (!src) {
          return Promise.resolve(script.innerHTML);
        } else {
          // 外部脚本，需要src
          // 分情况是因为src可能没有域名，只有pathname ，如<script src="/js/app.js"></script>
          return fetchResource(src.startsWith('http') ? src : `${url}/${src}`);
        }
      })
    );
  }

  // 获取并执行所有的script脚本代码
  // 用eval执行script中的代码
  async function execScripts() {
    const scripts = await getExternalScripts();

    //  手动构造一个commonjs的环境，以获取子应用导出的接口
    const module = { exports: {} };
    const exports = module.exports;

    scripts.forEach((script) => {
      eval(script);
    });

    // module.exports 就是子应用暴露出来的接口
    // 因为子应用打包出来的umd格式的内容，导出了生命周期函数：bootstrap/mount/unmount
    // 注：子应用构建后的umd代码大致形式如下：
    /*
      (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['sub-app2'] = {}));
      })(window, (function () {
      // 内部的代码
        function bootstrap() { ... }
        function mount() { ... }
        function unmount() { ... }
        exports.bootstrap = bootstrap;
        exports.mount = mount;
        exports.unmount = unmount;
      }));
    */
    return module.exports;
  }

  return {
    template,
    getExternalScripts,
    execScripts,
  };
};
