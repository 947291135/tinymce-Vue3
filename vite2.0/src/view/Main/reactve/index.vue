<!--
 *@description:
 *@author: Ming
 *@date: 2021-06-17 00:38:44
 *@version: V1.0.5
-->
<template>
  <div></div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount, onMounted } from 'vue';
  export default defineComponent({
    setup() {
      console.log('1-开始创建组件-setup');
      onBeforeMount(() => {
        console.log('2.组件挂载页面之前执行----onBeforeMount');
      });
      onMounted(() => {
        console.log('3.-组件挂载到页面之后执行-------onMounted');
      });
      return {};
    },
  });
</script>
<style lang="scss" scoped></style>
