<template>
  <div class="app">
    <div class="navbar">
      <navbar />
    </div>
    <div class="wrapper">
      <div class="sidebar">
        <sidebar />
      </div>
      <div class="content">
        <router-view />
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
      navbar,
    },
  };
</script>

<style lang="scss" scoped>
  .app {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;

    .wrapper {
      position: relative;
      display: flex;
      flex: 1;
      width: 100%;
      flex-direction: column;
      background: #fafafa;
      .sidebar {
        width: 100%;
        flex: 0 0 auto;
        overflow: hidden;
        position: relative;
        background: #fff;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-right: 10px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        color: #fff;
        box-shadow: 0 8px 0px #ebedf0;
      }
      .content {
        flex: 1 1 auto;
        margin-top: 10px;
        background: #fff;
      }
    }
    .navbar {
      height: 100%;
      flex: 0 0 auto;
      background-color: #fff;
      box-sizing: border-box;
      background-color: #001938;
    }
  }
</style>
