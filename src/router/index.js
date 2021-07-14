import Vue from "vue";
import VueRouter from "vue-router";
// import aside from '../components/aside';
// import header from '../components/header';
import home from '../view/home';
import store from '../store/index.js';
// import iframePage from '../view/iframePage';
// import test from '../view/test';

let Layout = home;

var href = window.location.href === 'mian' ? 'test' : 'test1';
// var href = 'test'

console.log('href', href);

Vue.use(VueRouter);

const constantRouterMap = [
  // { path: '/aside', component: aside },
  // { path: '/header', component: header },
  { path: '/login', component: () => import('../view/account/login.vue') },
  {
    path: '/',
    component: home,
    children: [
      // { path: '/iframePage', component: iframePage },
      // { path: '/test', component: test },
      { path: '/test', component: () =>  import(`../view/${href}`) },
    ]
  }
]

// 3. 创建 router 实例，然后传 `constantRouterMap` 配置
const router = new VueRouter({
  routes: constantRouterMap 
})

//异步挂载的路由
//动态需要根据权限加载的路由表 
// export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Layout,
//     name: '权限测试',
//     meta: { role: ['admin','super_editor'] }, //页面需要的权限
//     children: [
//     { 
//       path: 'index',
//       component: Permission,
//       name: '权限测试页',
//       meta: { role: ['admin','super_editor'] }  //页面需要的权限
//     }]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ];
const asyncRoutes = [
  {
    path: '/user',
    component: home,
    children: [
      // { path: '/iframePage', component: iframePage },
      // { path: '/test', component: test },
      { path: 'userList', component: () =>  import(`@/view/user/userList.vue`) },
    ]
  }
]
async function getRoute() {
  return new Promise(resolve => {
    // let asyncRoutes = 
    setTimeout(() => {
      resolve(asyncRoutes)
    }, 1000);
  })
}
let role = '';
router.beforeEach(async (to, from, next) => {
  console.log('to.path', to.path);
  // if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      // next({ path: '/login' });
      next()
    } else {
    //   if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
    //     store.dispatch('GetInfo').then(res => { // 拉取info
    //       const roles = res.data.role;
    //       store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
    //         router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    //         next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    //       })
    //     }).catch(err => {
    //       console.log(err);
    //     });
    //   } else {
    //     next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
    //   }
    // }

    if (!role) {
      role = 1
      let accessRoutes = await getRoute();
      router.addRoutes(accessRoutes)
      next({ ...to, replace: true })
    } else {
      next()
    }

  } 
  // else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next();
  //   } else {
  //     next('/login'); // 否则全部重定向到登录页
  //   }
  // }
});

export default router;