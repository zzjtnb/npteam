import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error404 from "../views/Error404";
Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/index",
    name: "首页",
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
      {
        path: "/play",
        component: () => import("../views/description/Play.vue"),
        meta: {
          title: "玩法介绍", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      {
        path: "/activity",
        component: () => import("../views/description/Activity.vue"),
        meta: {
          title: "活动介绍", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      {
        path: "/trackfile",
        component: () => import("../views/description/TrackFile.vue"),
        meta: {
          title: "轨迹文件", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
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
      {
        path: "/flightinformation",
        component: () => import("../views/description/FlightInformation.vue"),
        meta: {
          title: "飞行资料", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
      {
        path: "/game",
        component: () => import("../views/Game.vue"),
        meta: {
          title: "在线游戏", //菜单名称
          roles: ["user", "admin"], //当前菜单哪些角色可以看到
          icon: "el-icon-info" //菜单左侧的icon图标
        }
      },
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
  routes: constantRouterMap,
  linkActiveClass: "cur"
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title);
  next();
});
export default router;
