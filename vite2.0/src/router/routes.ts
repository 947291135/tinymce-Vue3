import Layout from '../components/layout/index.vue';
export default [
  {
    path: '/',
    component: Layout,
    redirect: '/main/ref',
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'el-icon-menu',
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
    component: Layout,
    name: 'form',
    redirect: '/form/index',
    meta: {
      title: '表单',
      icon: 'el-icon-s-order',
    },
    children: [
      {
        path: '/form/index',
        component: () => import('../view/internationalization.vue'),
        name: 'formIndex',
        meta: {
          activeMenu: '/form',
        },
      },
    ],
  },
  {
    path: '/axios',
    component: Layout,
    name: 'axios',
    redirect: '/axios/index',
    meta: {
      title: 'Axios',
      icon: 'el-icon-s-promotion',
    },
    children: [
      {
        path: '/axios/index',
        component: () => import('../view/internationalization.vue'),
        name: 'axiosIndex',
        meta: {
          activeMenu: '/axios',
        },
      },
    ],
  },
  {
    path: '/upload',
    component: Layout,
    name: 'upload',
    redirect: '/upload/index',
    meta: {
      title: '图传',
      icon: 'el-icon-upload',
    },
    children: [
      {
        path: '/upload/index',
        component: () => import('../view/internationalization.vue'),
        name: 'uploadIndex',
        meta: {
          activeMenu: '/upload',
        },
      },
    ],
  },
  {
    path: '/element',
    component: Layout,
    name: 'element',
    redirect: '/element/index',
    meta: {
      title: '组件',
      icon: 'el-icon-orange',
    },
    children: [
      {
        path: '/element/index',
        component: () => import('../view/internationalization.vue'),
        name: 'elementIndex',
        meta: {
          activeMenu: '/element',
        },
      },
    ],
  },
  {
    path: '/map',
    component: Layout,
    name: 'map',
    redirect: '/map/index',
    meta: {
      title: '地图',
      icon: 'el-icon-map-location',
    },
    children: [
      {
        path: '/map/index',
        component: () => import('../view/internationalization.vue'),
        name: 'mapIndex',
        meta: {
          activeMenu: '/map',
        },
      },
    ],
  },
  {
    path: '/code',
    component: Layout,
    name: 'code',
    redirect: '/code/index',
    meta: {
      title: '二维码扫描',
      icon: 'el-icon-full-screen',
    },
    children: [
      {
        path: '/code/index',
        component: () => import('../view/internationalization.vue'),
        name: 'codeIndex',
        meta: {
          activeMenu: '/code',
        },
      },
    ],
  },
  {
    path: '/md',
    component: Layout,
    name: 'md',
    redirect: '/md/index',
    meta: {
      title: 'MD文件预览',
      icon: 'el-icon-s-order',
    },
    children: [
      {
        path: '/md/index',
        component: () => import('../view/internationalization.vue'),
        name: 'mdIndex',
        meta: {
          activeMenu: '/md',
        },
      },
    ],
  },
  {
    path: '/word',
    component: Layout,
    name: 'word',
    redirect: '/word/index',
    meta: {
      title: 'word导出',
      icon: 'el-icon-download',
    },
    children: [
      {
        path: '/word/index',
        component: () => import('../view/internationalization.vue'),
        name: 'wordIndex',
        meta: {
          activeMenu: '/word',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../components/HelloWorld.vue'),
    name: 'HelloWorld',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];
