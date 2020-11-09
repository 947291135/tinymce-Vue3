<template>
    <div class="app">
        <div class="sidebar">
            <sidebar />
        </div>
        <div class="wrapper">
            <div class="navbar">
                <navbar />
            </div>
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidebar from './components/sidebar.vue';
export default {
    components: {
        sidebar,
        navbar
    }
}
</script>

<style lang="scss" scoped>
.app{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    .sidebar{
        width: 100%;
        height: 60px;
        overflow: hidden;
        position: relative;
        background: #fff;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 10px;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        background-color: #001938;
        color: #fff;
    }
    .wrapper{
        position: relative;
        display: flex;
        flex: 1;
        width: 100%;
        .navbar{
            height: 100%;
            width: 220px;
            padding: 24px 0 72px;
            // overflow-y: scroll;
            background-color: #fff;
            box-sizing: border-box;
            box-shadow: 0 8px 12px #ebedf0;
        }
    }
}
</style>