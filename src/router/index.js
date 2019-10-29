import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error404 from "../views/Error404";
Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/index",
    redirect: '/server',
    component: Home,
    meta: {
      title: "首页", //菜单名称
      roles: ["user", "admin"], //当前菜单哪些角色可以看到
      icon: "el-icon-info" //菜单左侧的icon图标
    },
    children: [
      {
        path: "/server",
        component: () => import("../views/description/Server.vue"),
        meta: {
          title: "服务器介绍", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      // {
      //   path: "/trackfile",
      //   component: () => import("../views/description/TrackFile.vue"),
      //   meta: {
      //     title: "轨迹文件", //菜单名称
      //     roles: ["user", "admin"], //当前菜单哪些角色可以看到
      //     icon: "el-icon-info" //菜单左侧的icon图标
      //   }
      // },
      {
        path: "/bannedlist",
        component: () => import("../views/description/BannedList.vue"),
        meta: {
          title: "封禁名单", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      {
        path: "/record",
        component: () => import("../views/description/Record.vue"),
        meta: {
          title: "战绩统计", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      // {
      //   path: "/flightinformation",
      //   component: () => import("../views/description/FlightInformation.vue"),
      //   meta: {
      //     title: "飞行资料", //菜单名称
      //     roles: ["user", "admin"], //当前菜单哪些角色可以看到
      //     icon: "el-icon-info" //菜单左侧的icon图标
      //   }
      // },
      // {
      //   path: "/game",
      //   redirect: '/drone',
      //   component: () => import("../views/Game.vue"),
      //   meta: {
      //     title: "飞行游戏", //菜单名称
      //     roles: ["user", "admin"], //当前菜单哪些角色可以看到
      //     icon: "el-icon-info" //菜单左侧的icon图标
      //   }, children: [
      //     {
      //       path: "/drone",
      //       component: () => import("../views/game/Drone.vue"),
      //     },
      //     {
      //       path: "/airliner",
      //       component: () => import("../views/game/Airliner.vue"),
      //     },
      //   ]
      // },
      {
        path: "/aboutus",
        component: () => import("../views/description/AboutUs.vue"),
        meta: {
          title: "关于我们", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      }
    ]
  },

  {
    path: "/404",
    component: Error404
  },

  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "*",
    redirect: "/index"
  }
];

const router = new VueRouter({
  // mode: 'history',
  routes: constantRouterMap,
  linkActiveClass: "cur",
  // scrollBehavior (to, from, savedPosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
  //   console.log(to) // to：要进入的目标路由对象，到哪里去
  //   console.log(from) // from：离开的路由对象，哪里来
  //   console.log(savedPosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // }
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title);
  next();
});
export default router;
