<!--
 *@description:
 *@author: Ming
 *@date: 2021-04-28 15:46:06
 *@version: V1.0.5
-->
<template>
  <div> 组件</div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onBeforeMount, onMounted } from 'vue';
  interface DataProps {}
  export default defineComponent({
    setup() {
      console.log(import.meta.env.MODE);
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
