<template>
  <div class="sidebar-centent">
    <el-avatar :src="img" style="float: right"></el-avatar>
  </div>
</template>

<script lang="ts" setup>
  import { datas } from '@/hooks/app';
  import { computed } from '@vue/runtime-core';
  let img = computed(() => {
    return datas.userImg || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
  });
</script>

<style lang="scss" scoped>
  .sidebar-centent {
    width: 100%;
  }
</style>
