<template>
  <div class="navbar-centent">
    <el-menu
      :unique-opened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001938"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) of RouterFirst" :key="index">
        <el-submenu v-if="item.children && item.children.length > 0" :index="item.path">
          <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="(items, indexs) of item.children" :key="index + '-' + indexs">
            <el-menu-item :index="items.path">{{ items.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.path">
          <i class="el-icon-menu"></i>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const Router = useRouter();
  const RouterFirst = Router.options?.routes[0]?.children;
  const handleClose = () => {};
  const handleOpen = () => {};
</script>

<style lang="scss" scoped>
  .navbar-centent {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
