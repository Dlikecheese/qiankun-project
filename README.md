# qiankun 微前端初始化工程 & 手写核心源码

（核心源码位置： main-app/src/micro-fe,可通过 main-app/main.js 中的：
import { registerMicroApps, start } from 'qiankun';
import { registerMicroApps, start } from './micro-fe' 注释进行切换）

## 项目结构

- main-app（主应用，Vue2 + qiankun）
- sub-app1（子应用 1，Vue2）
- sub-app2（子应用 2，Vue2）
- sub-app3（子应用 3，React）

## 启动方式

1. 分别进入各应用目录，安装依赖：
   ```bash
   cd main-app && npm install
   cd ../sub-app1 && npm install
   cd ../sub-app2 && npm install
   cd ../sub-app3 && npm install
   ```
2. 启动各应用（端口分别为 7100、7101、7102、7103）：
   ```bash
   npm run serve   # main-app、sub-app1、sub-app2
   npm start       # sub-app3
   ```
3. 访问主应用：http://localhost:7100

## 说明

- 主应用通过 qiankun 注册并加载子应用。
- 子应用支持独立运行。
- 可根据需要扩展各应用页面和功能。
