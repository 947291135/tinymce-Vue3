<!--
 *@description:
 *@author: Ming
 *@date: 2021-06-17 00:19:27
 *@version: V1.0.5
-->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="是否展开">
        <el-switch v-model="data" active-color="#13ce66" inactive-color="#ff4949" @change="setOpen">
        </el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { data, setDatas } from '@/hooks/system';
  import _ from 'lodash';
  function setOpen() {
    setDatas(!data.value);
  }
</script>
<style lang="scss" scoped></style>
