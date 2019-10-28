<template>
  <div class="home">
    <Header />
    <router-view></router-view>
    <SideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default {
  name: "home",
  components: {
    Header,
    SideBar
  }
};
</script>
