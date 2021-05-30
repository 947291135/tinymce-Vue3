<!--
 *@description: internationalization to test
 *@author: Ming
 *@date: 2021-05-30 21:51:43
 *@version: V1.0.5
-->
<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import http from '@assets/js/axios';
  import { toCanvas } from 'qrcode';
  let canvas = ref<HTMLCanvasElement | HTMLImageElement | null>(null);
  console.log(canvas);
  http
    .post('/upload/index.php', {})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  onMounted(() => {
    toCanvas(canvas.value, 'sample text', function (error) {
      if (error) console.error(error);
      console.log('success!');
    });
  });
</script>
<style lang="scss" scoped></style>
