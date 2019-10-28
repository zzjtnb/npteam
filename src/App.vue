<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$setTitle(this.$route.meta.title);
  }
};
</script>
<style>
body {
  background: url("../public/img/components/bg.jpg") no-repeat #121747 fixed;
  background-size: 100% 100%;
  color: #26ccd4;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  color: #26ccd4;
}
a:hover {
  color: #15f0fa;
}
</style>
