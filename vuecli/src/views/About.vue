<template>
  <div class="about">
    <div>{{ nowTime }}</div>
  </div>
</template>

<script lang="ts">
import { nowTime, getTime } from "@assets/js/getTime";
import { onUnmounted } from "vue";
export default {
  setup() {
    getTime();
    const Time = setInterval(() => {
      getTime();
    }, 1000);
    // 离开页面时关闭清除定时器
    onUnmounted(() => {
      clearInterval(Time);
    });
    return {
      nowTime
    };
  }
};
</script>
