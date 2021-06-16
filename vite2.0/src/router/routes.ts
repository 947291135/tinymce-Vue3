export default [
  {
    path: '/',
    component: () => import('../components/layout/index.vue'),
    redirect: '/main/ref',
    name: 'Index',
    children: [
      {
        path: '/main',
        component: () => import('../view/Main/index.vue'),
        name: 'main',
        meta: {
          title: '首页',
          activeMenu: '/',
        },
        children: [
          {
            path: '/main/ref',
            component: () => import('../view/Main/ref/index.vue'),
            name: 'ref',
            meta: {
              title: 'ref 测试',
            },
          },
          {
            path: '/main/reactive',
            component: () => import('../view/Main/reactve/index.vue'),
            name: 'reactive',
            meta: {
              title: 'reactive 测试',
            },
          },
        ],
      },
      {
        path: '/form',
        component: () => import('../view/internationalization.vue'),
        name: 'form',
        meta: {
          title: '表单',
        },
      },
      {
        path: '/axios',
        component: () => import('../view/internationalization.vue'),
        name: 'axios',
        meta: {
          title: 'Axios',
        },
      },
      {
        path: '/upload',
        component: () => import('../view/internationalization.vue'),
        name: 'upload',
        meta: {
          title: '图传',
        },
      },
      {
        path: '/element',
        component: () => import('../view/internationalization.vue'),
        name: 'element',
        meta: {
          title: '组件',
        },
      },
      {
        path: '/map',
        component: () => import('../view/internationalization.vue'),
        name: 'map',
        meta: {
          title: '地图',
        },
      },
      {
        path: '/code',
        component: () => import('../view/internationalization.vue'),
        name: 'code',
        meta: {
          title: '二维码扫描',
        },
      },
      {
        path: '/md',
        component: () => import('../view/internationalization.vue'),
        name: 'md',
        meta: {
          title: 'MD文件预览',
        },
      },
      {
        path: '/world',
        component: () => import('../view/internationalization.vue'),
        name: 'world',
        meta: {
          title: 'world导出',
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
