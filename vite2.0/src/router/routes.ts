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
          activeMenu: '/',
        },
      },
      {
        path: '/internationalization',
        component: () => import('../view/internationalization.vue'),
        name: 'internationalization',
        meta: {
          title: '国际化',
        },
      },
    ],
  },
  {
    path: '/hw',
    component: () => import('../components/HelloWorld.vue'),
    name: 'HelloWorld',
  },
];
