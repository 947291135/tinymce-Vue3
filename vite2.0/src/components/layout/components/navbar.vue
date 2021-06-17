<template>
  <div class="navbar-centent">
    <el-menu
      :unique-opened="true"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#001938"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <template v-for="(item, index) of RouterList" :key="index">
        <el-submenu
          v-if="item.children && item.children.length > 1 && !item.meta.hidden"
          :index="item.path"
        >
          <template #title>
            <i :class="[item?.meta?.icon]"></i>
            <span>{{ item?.meta?.title }}</span>
          </template>
          <template v-for="(items, indexs) of item.children" :key="index + '-' + indexs">
            <el-menu-item v-if="!items.meta.hidden" :index="items.path">{{
              items?.meta?.title
            }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else-if="!item.meta.hidden" :index="item.path">
          <i :class="[item?.meta?.icon]"></i>
          <template #title>{{ item?.meta?.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from '@vue/runtime-core';
  import { useRouter, useRoute } from 'vue-router';
  const Router = useRouter();
  const RouterList = Router.options?.routes;
  const activeIndex = computed(() => {
    let route = useRoute();
    if (route?.meta?.activeMenu) {
      return route.meta.activeMenu;
    }
    return route?.path;
  });
</script>

<style lang="scss" scoped>
  .navbar-centent {
    width: 100%;
    height: 100%;
    position: relative;
    .el-menu-vertical-demo {
      border-right: none;
      user-select: none;
    }
    .el-submenu.is-active span,
    .el-submenu.is-active i {
      color: #ffd04b !important;
    }
  }
</style>
