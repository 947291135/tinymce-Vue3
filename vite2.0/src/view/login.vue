<!--
 *@description:
 *@author: Ming
 *@date: 2021-06-18 00:23:10
 *@version: V1.0.5
-->
<template>
  <div></div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onBeforeMount, onMounted } from 'vue';
  interface DataProps {}
  export default defineComponent({
    setup() {
      console.log('1-开始创建组件-setup');
      const data: DataProps = reactive({});
      onBeforeMount(() => {
        console.log('2.组件挂载页面之前执行----onBeforeMount');
      });
      onMounted(() => {
        console.log('3.-组件挂载到页面之后执行-------onMounted');
      });
      const refData = toRefs(data);
      return {
        ...refData,
      };
    },
  });
</script>
<style lang="scss" scoped></style>
