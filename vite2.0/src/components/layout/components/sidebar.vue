<template>
  <div class="sidebar-centent">
    <div class="navOpen" @click="setNavOpen">
      <i :class="[data ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
    </div>
    <el-avatar :src="img" style="float: right"></el-avatar>
  </div>
</template>

<script lang="ts" setup>
  import { datas } from '@/hooks/app';
  import { data, setDatas } from '@/hooks/system';
  import { computed } from '@vue/runtime-core';
  let img = computed(() => {
    return datas.userImg || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
  });
  function setNavOpen() {
    setDatas(!data.value);
  }
</script>

<style lang="scss" scoped>
  .sidebar-centent {
    width: 100%;
    height: 50px;
    .navOpen {
      line-height: 50px;
      height: 100%;
      float: left;
      cursor: pointer;
      -webkit-transition: background 0.3s;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;
      :hover {
        background: #ccc;
      }
      > i {
        padding: 0 15px;
        font-size: 20px;
        line-height: 50px;
        color: #000;
      }
    }
  }
</style>
