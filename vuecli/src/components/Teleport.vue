<template>
  <!-- 将改组件挂载到其他地方app以外的地方 -->
  <!-- to="挂载到指定的dom元素中" -->
  <teleport to="#model">
    <div class="Teleport">
      <h2>Hello world</h2>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.Teleport {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #ccc;
  border: 1px solid #000;
  box-sizing: border-box;
  transform: translate(-100px, -100px);
  text-align: center;
}
</style>
