<!--  -->
<template>
	<div>
		<div class="fl info_top">
			<p>
				<router-link to="/drone">
					<b>无人机高速飞行</b>
				</router-link>
			</p>
			<p>
				<router-link to="/airliner">
					<b>客机观光</b>
				</router-link>
			</p>
		</div>
		<div class="fl plate" style="height:600px">
			<div class="decorate_left_foot">
				<img src="../../public/img/components/img07.png" />
			</div>
			<div class="decorate_right_top">
				<img src="../../public/img/components/img07.png" />
			</div>
			<div class="fl column" style="height:200px">
				<router-view></router-view>
			</div>
		</div>
		<div class="footline">
			<img class="fr" src="../../public/img/components/img06.png" />
		</div>
		<div class="fl space">
			<img class="fl" src="../../public/img/components/img04.png" />
			<p class="fl">&nbsp;</p>
			<img class="fl right" src="../../public/img/components/img04.png" />
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {};
  },
  mounted () { },
  methods: {},
  components: {}
};
</script>

<style scoped></style>
