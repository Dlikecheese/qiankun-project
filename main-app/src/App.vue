<template>
  <div id="app">
    <h1>主应用（Vue2 + qiankun）</h1>
    <nav>
      <router-link to="/sub-app1">子应用1</router-link> |
      <router-link to="/sub-app2">子应用2</router-link> |
      <router-link to="/sub-app3">子应用3</router-link>
    </nav>
    <div id="subapp-viewport" style="border:1px solid #ccc;min-height:400px;margin-top:20px;"></div>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
