<template>
  <div class="Suspense">
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    try {
      const imgUrl = await axios.get(
        "https://apiblog.jspang.com/default/getGirl"
      );
      return {
        code: 200,
        msg: "ok",
        imgUrl: imgUrl.data.imgUrl
      };
    } catch (error) {
      console.log(error);
      return {
        code: 404,
        msg: error,
        imgUrl: "https://img.mgblog.cn/4242d4301973a51913761108c5429076.jpg"
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.Suspense {
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
</style>
