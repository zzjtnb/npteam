<!--  -->
<template>
  <header>
    <span>夜猫子中队</span>
    <img src="../../public/img/header/img03.png" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {}
};
</script>

<style scoped>
/*头部*/
header {
  position: fixed;
  left: 230px;
  top: 0;
  z-index: 80;
  width: calc(100% - 230px);
  height: 44px;
  border-bottom: 1px solid #15cddd;
  text-align: center;
  background: red;
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#111f53),
    to(rgba(5, 84, 156, 1))
  );
}

header span {
  color: #14effb;
  font-size: 22px;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  margin-top: -0.5em;
}
</style>
