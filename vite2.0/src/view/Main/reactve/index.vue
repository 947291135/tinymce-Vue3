<!--
 *@description:
 *@author: Ming
 *@date: 2021-06-17 00:38:44
 *@version: V1.0.5
-->
<template>
  <div class="reactve">
    <el-card class="box-card">
      <el-avatar :size="60" src="https://empty" class="img" @error="errorHandler">
        <img :src="img" />
      </el-avatar>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  const test = 123;
  import { datas, setDatas } from '@/hooks/app';
  import { computed } from '@vue/runtime-core';
  let { userName, userImg } = datas;

  let img = computed(() => {
    return userImg || 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png';
  });
  console.log(userName, userImg);
  console.log(datas, setDatas);
</script>
<style lang="scss" scoped>
  .reactve {
  }
</style>
