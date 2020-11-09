import {createWebHistory,createRouter} from 'vue-router';
// import firet from '../components/firet.vue';
const history = createWebHistory() //mode: history 设置history路由模式

export default createRouter({
    history,
    routes:[
        {
            path: '/',
            component: () => import('../components/firet.vue'),
            name: 'Index'
        },
        {
            path: '/hw',
            component: () => import('../components/HelloWorld.vue'),
            name: 'HelloWorld'
        }
    ]
})