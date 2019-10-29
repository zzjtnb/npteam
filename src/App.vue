<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
  created () {
    this.$setTitle(this.$route.meta.title);
  }
};
</script>
<style>
</style>
