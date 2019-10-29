<template>
	<div class="home">
		<Header />
		<section class="fl mainbady">
			<router-view></router-view>
		</section>
		<!-- <div>
			<Index />
		</div>-->
		<SideBar />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Index from "./Index";
export default {
  name: "home",
  components: {
    Header,
    SideBar, Index
  }
};
</script>
<style >
body {
	background: url("../../public/img/components/bg.jpg") no-repeat #121747 fixed;
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
