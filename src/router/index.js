import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/login.vue";
import Index from "@/components/index.vue";

import Home from "@/components/home.vue"; //总览

import Plate from "@/components/plate.vue"; //板块管理

import Activity from "@/components/activity/activity.vue"; //活动管理
import Classify from "@/components/activity/classify.vue"; //分类管理

import Goods from "@/components/goods/goods.vue"; //商品管理
import Sort from "@/components/goods/sort.vue"; //分类管理
import Freight from "@/components/goods/freight.vue"; //运费管理

import Users from "@/components/users.vue"; //用户管理

import Orders from "@/components/orders/orders.vue"; //订单管理
import Orderset from "@/components/orders/orderset.vue"; //订单设置
import Activityorder from "@/components/orders/activityorder.vue"; //活动订单

import Material from "@/components/system/material.vue"; //素材管理
import Customservice from "@/components/system/customservice.vue"; //客服设置
import Miniprograms from "@/components/system/miniprograms.vue"; //小程序信息

import Qrcode from "@/components/qrcode.vue"; //二维码

import Homeset from "@/components/homeset.vue"; //首页设置

import Sectionmanage from "@/components/community/sectionmanage.vue"; //板块管理
import Topicmanage from "@/components/community/topicmanage.vue"; //话题管理

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/login" }, //重定向到login下
    { path: "/login", component: Login },
    {
      path: "/index",
      component: Index,
      children: [
        { path: "/", redirect: "/index/home" },
        { path: "home", component: Home },
        { path: "plate", component: Plate },
        { path: "activity", component: Activity },
        { path: "classify", component: Classify },
        { path: "goods", component: Goods },
        { path: "sort", component: Sort },
        { path: "freight", component: Freight },
        { path: "users", component: Users },
        { path: "orders", component: Orders },
        { path: "orderset", component: Orderset },
        { path: "activityorder", component: Activityorder },
        { path: "material", component: Material },
        { path: "customservice", component: Customservice },
        { path: "miniprograms", component: Miniprograms },
        { path: "qrcode", component: Qrcode },
        { path: "homeset", component: Homeset },
        { path: "sectionmanage", component: Sectionmanage },
        { path: "topicmanage", component: Topicmanage }
      ]
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
});
