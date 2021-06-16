<!--
 *@description:
 *@author: Ming
 *@date: 2021-04-28 15:46:06
 *@version: V1.0.5
-->
<template>
  <div> 组件</div>
  <el-button type="primary" @click="clickFn">主要按钮</el-button>
</template>

<script lang="ts" setup>
  const clickFn = () => {
    console.log(123);
  };
</script>
<style lang="scss" scoped></style>
