<template>
  <div class="main">
    <router-view />
    <!-- <el-input v-model="app.text"></el-input>
    <canvas ref="canvas"></canvas>
    <Text /> -->
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .main {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
