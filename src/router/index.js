import Vue from "vue";
import VueRouter from "vue-router";
// import aside from '../components/aside';
// import header from '../components/header';
import home from '../view/home';
import iframePage from '../view/iframePage';
import test from '../view/test';

Vue.use(VueRouter);

const routes = [
  // { path: '/aside', component: aside },
  // { path: '/header', component: header },
  {
    path: '/',
    component: home,
    children: [
      { path: '/iframePage', component: iframePage },
      { path: '/test', component: test },
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;