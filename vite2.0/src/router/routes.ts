export default [
    {
        path:'/',
        name:'Home',
        component:()=>import('@/components/HelloWorld.vue') //路由懒加载
    }
]