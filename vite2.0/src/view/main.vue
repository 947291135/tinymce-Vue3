<template>
  <div class="main">
    <router-view></router-view>
    <!-- <el-input v-model="app.text"></el-input>
    <canvas ref="canvas"></canvas>
    <Text /> -->
  </div>
</template>

<script lang="ts">
  import { app } from '@hooks/app';
  import Text from '@/components/view/main/text.vue';
  import { defineComponent, ref, reactive, onMounted, watch } from 'vue';
  import { toCanvas } from 'qrcode';
  import http from '@assets/js/axios';
  export default defineComponent({
    name: 'App',
    components: {
      Text,
    },
    setup() {
      // 获取全局方法
      let obj = reactive({
        name: '小明',
        age: 15,
        sex: '女',
        list: [{ index: 1, name: '魈', age: 2000, sex: '男' }],
      });
      let a = ref(null);
      watch(a, () => {});
      watch(
        () => obj.name,
        () => {}
      );
      http
        .post('/upload/index.php', obj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      let canvas = ref<HTMLCanvasElement | HTMLImageElement | null>(null);
      onMounted(() => {
        toCanvas(canvas.value, 'sample text', function (error) {
          if (error) console.error(error);
          console.log('success!');
        });
      });
      return {
        canvas,
        app,
      };
    },
  });
</script>

<style lang="scss" scoped>
  // .firet {
  //   margin-top: 10px;
  // }
</style>
