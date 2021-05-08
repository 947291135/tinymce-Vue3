export default [
  {
    path: '/',
    component: () => import('../components/layout/index.vue'),
    redirect: '/main',
    name: 'Index',
    children: [
      {
        path: '/main',
        component: () => import('../view/main.vue'),
        name: 'main',
        meta: {
          title: '首页',
          activeMenu: '/'
        }
      }
    ]
  },
  {
    path: '/hw',
    component: () => import('../components/HelloWorld.vue'),
    name: 'HelloWorld'
  }
]
