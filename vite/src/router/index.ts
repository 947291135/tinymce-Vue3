import {createWebHistory,createRouter} from 'vue-router';
// import firet from '../components/firet.vue';
const history = createWebHistory() //mode: history 设置history路由模式

export default createRouter({
    history,
    routes:[
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
})