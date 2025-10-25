<template>
  <div>
    首页
    <button @click="onClick">replaceState测试</button>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick: function () {
        this.$router.replace({
          path: '/sub-app2',
        });
      },
    },
  };
</script>
