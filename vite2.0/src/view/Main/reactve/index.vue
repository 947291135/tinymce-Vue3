<!--
 *@description:
 *@author: Ming
 *@date: 2021-06-17 00:38:44
 *@version: V1.0.5
-->
<template>
  <div class="reactve">
    <el-card class="box-card">
      <el-avatar :src="img"></el-avatar>
      <div class="userInfo">
        <el-form ref="form" label-width="80px" size="mini">
          <el-form-item label="用户ID:">
            {{ datas.id || '暂无' }}
          </el-form-item>
          <el-form-item label="用户名称:">
            {{ datas.userName || '暂无' }}
          </el-form-item>
        </el-form>
        <div class="bottom">
          <el-button type="text" class="button" @click="update">直接修改</el-button>
          <el-button type="text" class="button" @click="DialogShow">操作按钮</el-button>
        </div>
      </div>
    </el-card>
    <InfoDialog :show="DialogVisible" @close="DialogClose" />
  </div>
</template>

<script lang="ts" setup>
  import { datas, setDatas, getters } from '@/hooks/app';
  import { computed, ref } from '@vue/runtime-core';
  import InfoDialog from '@/components/infoDialog.vue';

  let DialogVisible = ref(false);
  let imgUrl = getters.img;
  // 不可修改
  // datas.userName = 123;
  let img = computed(() => {
    console.log(getters.img);
    return datas.userImg || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
  });

  const DialogShow = () => {
    DialogVisible.value = true;
  };
  const DialogClose = () => {
    DialogVisible.value = false;
  };
  const update = () => {
    setDatas('userName', '小明');
    setDatas('userImg', 'https://img.mgblog.cn/ee69f34f5e4545b92d8fff0b25d944a8.jpg');
    setDatas('id', 123);
  };
</script>
<style lang="scss" scoped>
  .reactve {
    position: relative;
    width: 100%;
    height: 100%;
    .box-card {
      width: 250px;
      margin: 25px;
      display: flex;
      ::v-deep .el-card__body {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        .userInfo {
          width: 100%;
          display: flex;
          margin-top: 20px;
          justify-content: left;
        }
        .bottom {
          position: absolute;
          right: 15px;
          bottom: 10px;
        }
      }
    }
  }
</style>
