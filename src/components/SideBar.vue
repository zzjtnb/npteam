<!--  -->
<template>
	<aside class="sidebar">
		<div class="fl people">
			<!-- <p>
				<img src="../../public/img/sidebar/dome2.jpg" />
			</p>-->
			<div class="planediv">
				<div class="plane">
					<div class="wings"></div>
					<div class="fans">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wheels">
						<span class="left"></span>
						<span class="right"></span>
					</div>
				</div>
			</div>
		</div>
		<menu class="fl maxbox menu">
			<ul v-for="(item,index) in this.constantRouterMap[0].children" :key="index">
				<li>
					<router-link :to="item.path">
						<b>{{item.meta.title}}</b>
					</router-link>
				</li>
			</ul>
		</menu>
		<div class="sidebar_line_top">
			<img src="../../public/img/sidebar/img01.png" />
		</div>
		<div class="sidebar_line_foot">
			<img src="../../public/img/sidebar/img01.png" />
		</div>
		<div class="sidebar_line_right">&nbsp;</div>
	</aside>
</template>

<script>
import { constantRouterMap } from '@/router'
export default {
  data () {
    return {
      constantRouterMap,
    };
  },
  mounted () {

  },
  methods: {

  },
  components: {}
};
</script>

<style scoped>
/*左侧*/
.sidebar {
	position: fixed;
	max-width: 230px;
	height: 100%;
	background: url("../../public/img/sidebar/sidebar_bg.png") no-repeat center bottom #0f2153;
	font-size: 12px;
	background-size: 180px auto;
	z-index: 100;
}

.people {
	margin: 40px 0 0 40px;
	width: 140px;
}
.people p {
	width: 140px;
	height: 160px;
	background: url("../../public/img/sidebar/people_bg.jpg") no-repeat;
}
.people p img {
	margin: 20px 0 0 20px;
	width: 100px;
	height: 120px;
}
.people b {
	margin-top: 10px;
	display: block;
}

.menu {
	margin-top: 20px;
}
.menu li a {
	position: relative;
	float: left;
	padding: 1px;
	margin: 4px 40px;
	width: 138px;
	height: 28px;
}
.menu li a.cur {
	background: #15f0fa;
}
.menu li a b {
	position: absolute;
	left: 1px;
	top: 1px;
	float: left;
	z-index: 123;
	width: 136px;
	height: 26px;
	line-height: 26px;
	text-align: center;
	border: 1px solid #115f85;
	background: #0f2053;
}
.menu li a.cur b {
	background: #104a74;
	color: #15f0fa;
}
.menu li a em {
	position: absolute;
	left: 0;
	top: 8px;
	z-index: 121;
	width: 100%;
	height: 14px;
	background: #0f2053;
}
.menu li a i {
	position: absolute;
	left: 20px;
	top: 0;
	z-index: 122;
	width: 100px;
	height: 100%;
	background: #0f2053;
}

.sidebar_line_top {
	position: absolute;
	right: 0;
	top: -3px;
	transform: scale(1, -1);
}
.sidebar_line_foot {
	position: absolute;
	right: 0;
	bottom: -3px;
}
.sidebar_line_right {
	position: absolute;
	right: 0;
	top: 0;
	width: 11px;
	height: 100%;
	background: url("../../public/img/sidebar/img02.jpg") no-repeat left center #15f0fa;
}

/*-----动画效果-左侧导航鼠标经过背景显示效果-----*/
.menu li a b::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #104a74;
	z-index: -1;
	opacity: 0;
	-webkit-transform: scale3d(0.3, 1, 1);
	transform: scale3d(0.3, 1, 1);
	-webkit-transition: -webkit-transform 0.8s, opacity 0.8s;
	transition: transform 0.8s, opacity 0.8s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.menu li a b:hover::before {
	opacity: 1;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}
/**
飞机动画
*/
body {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: deepskyblue;
}
.planediv {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	height: 160px;
	background: url("../../public/img/sidebar/people_bg.jpg") no-repeat;
}
.plane {
	width: 10em;
	height: 8em;
	font-size: 10px;
	display: flex;
	justify-content: center;
	position: relative;
	color: #16f0fa;
	animation: plane-rotating 10s infinite, fly 5s infinite;
}

@keyframes plane-rotating {
	10%,
	30%,
	50% {
		transform: rotate(0deg);
	}

	20% {
		transform: rotate(-4deg);
	}

	80% {
		transform: rotate(8deg);
	}

	100% {
		transform: rotate(-1turn);
	}
}

@keyframes fly {
	10%,
	50%,
	100% {
		top: 0;
	}

	25% {
		top: 1em;
	}

	75% {
		top: -1em;
	}
}

.plane * {
	position: absolute;
}

.plane *::before,
.plane *::after {
	content: "";
	position: absolute;
}

.wings {
	width: inherit;
	display: flex;
	justify-content: center;
}

.wings::before {
	width: inherit;
	height: 5px;
	background-color: currentColor;
}

.wings::after {
	top: 42px;
	width: 90%;
	height: 0.4em;
	background-color: currentColor;
}

.fans {
	width: 70px;
	height: 70px;
	background: radial-gradient(black 2.5em, transparent 2.5em);
}

.fans span {
	width: inherit;
	height: inherit;
	animation: fans-rotating 0.8s linear infinite;
	animation-delay: calc(var(--n) * 0.1s);
}

@keyframes fans-rotating {
	to {
		transform: rotate(-1turn);
	}
}

.fans span::before {
	width: inherit;
	height: 50%;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 50% 50% 0 0 / 100% 100% 0 0;
	transform-origin: bottom;
	transform: rotate(calc((var(--n) - 1) * 90deg));
}

.fans span:nth-child(1) {
	--n: 1;
}

.fans span:nth-child(2) {
	--n: 2;
}

.fans span:nth-child(3) {
	--n: 3;
}

.fans span:nth-child(4) {
	--n: 4;
}

.wheels {
	width: 9em;
	height: 2em;
	bottom: 0;
	display: flex;
	justify-content: space-between;
}

.wheels span {
	position: static;
	width: 1em;
	height: inherit;
	background-color: currentColor;
	border-radius: 0.5em;
	display: flex;
	justify-content: center;
}

.wheels span::before {
	width: 0.2em;
	height: 4em;
	background-color: currentColor;
	transform-origin: bottom;
	bottom: 1em;
	z-index: -1;
}

.wheels .left::before {
	transform: rotate(45deg);
}

.wheels .right::before {
	transform: rotate(-45deg);
}
</style>
