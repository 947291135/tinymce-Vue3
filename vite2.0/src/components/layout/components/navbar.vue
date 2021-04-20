<template>
    <div class="navbar-centent">
        <div class="navbar-group" v-for="(item,index) of router" :key="index">
            <div class="navbar-group-title">{{item.meta.title}}</div>
            <div class="navbar-group-item" v-for="(items,indexs) of item.children" :key="index+'-'+indexs">
                <router-link :to="items.path" :class="{'active':isRouter===items.path}">{{items.meta.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            router:[
                {
                    meta: {
                        title: '开发指南',
                    },
                    children: [
                        {
                            path: '/main',
                            meta: {
                                title: '介绍',
                            }
                        },
                        {
                            path: '/hw',
                            meta: {
                                title: '快速上手',
                            }
                        },
                        {
                            path: '/main',
                            meta: {
                                title: '国际化',
                            }
                        }
                    ],
                },
                {
                    meta: {
                        title: '开发指南',
                    },
                    children: [
                        {
                            path: '/main',
                            meta: {
                                title: '介绍',
                            }
                        },
                        {
                            path: '/main',
                            meta: {
                                title: '快速上手',
                            }
                        },
                        {
                            path: '/main',
                            meta: {
                                title: '国际化',
                            }
                        }
                    ],
                },
            ]
        }
    },
    created () {
        // console.log(this.isRouter)
    },
    computed: {
        isRouter(){
            return this.$route.path
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-centent{
    width: 100%;
    height: 100%;
    position: relative;
    .navbar-group{
        margin-bottom: 16px;
        .navbar-group-title{
            padding: 8px 0 8px 30px;
            color: #455a64;
            font-weight: 600;
            font-size: 15px;
            user-select: none;
            line-height: 28px;
        }
        .navbar-group-item a{
            display: block;
            margin: 0;
            padding: 8px 0 8px 30px;
            color: #455a64;
            font-size: 13px;
            line-height: 28px;
            -webkit-transition: color 0.2s;
            transition: color 0.2s;
            text-decoration: none;
            &:hover{
                color: #4fc08d;
            }
        }
    }
}
</style>