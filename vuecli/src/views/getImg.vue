<template>
  <div class="getImg">
    <div>hello world</div>
    <div v-if="loading">正在加载 loading....</div>
    <div class="img">
      <img v-if="loaded" :src="result.imgUrl" alt="" />
    </div>
    <button @click="reset">重新刷新</button>
    <!-- Teleport组件将改组件挂载到其他地方app以外的地方 -->
    <Teleports />
    <!-- Suspense 异步组件 -->
    <suspense>
      <!-- 组件返回时显示的内容 -->
      <template #default>
        <Suspenses />
      </template>
      <!-- 组件还没返回显示的内容 -->
      <template #fallback>
        <div>loadding *****</div>
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import Teleports from "@/components/Teleport.vue";
import Suspenses from "@/components/Suspense.vue";
import useUrl from "@assets/js/useUrl";
export default {
  components: {
    Teleports,
    Suspenses
  },
  setup() {
    const { result, loading, loaded } = useUrl(
      "https://apiblog.jspang.com/default/getGirl"
    );
    const reset = () => {
      loading.value = true;
      loaded.value = false;
      useUrl("https://apiblog.jspang.com/default/getGirl");
    };
    return {
      reset,
      result,
      loading,
      loaded
    };
  }
};
</script>

<style lang="scss" scoped>
.getImg {
  .img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
