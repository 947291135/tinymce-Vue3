<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>欢迎来到网鱼网咖，请选择你的上网配置</div>
    <div>
      <button
        @click="selectFn(index)"
        v-for="(item, index) of option"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
    <div>您选择了【{{ selectText }}】套餐</div>
    <button @click="overClick">点餐完成</button>
    <div>{{ overText }}</div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  toRefs,
  // onMounted,
  // onBeforeMount,
  // onBeforeUpdate,
  // onUpdated,
  // onRenderTracked,
  // onRenderTriggered,
  watch
} from "vue";
// 新建接口规范data
interface DataProps {
  option: string[];
  selectText: string;
  selectFn: (index: number) => void;
}
export default {
  setup() {
    const option2 = ref(["电竞区", "休闲区", "娱乐区", "豪华大包间"]);
    // const selectText = ref('')
    // // 注意这里要空格 (index: number)
    // const selectFn = (index: number) =>{
    //   // 在这里不用使用this了，但是用ref暴露的数据 必须使用.value 获取数据 或者设置数据
    //   selectText.value = option.value[index]
    // }

    // 第二种写法
    const data: DataProps = reactive({
      option: ["电竞区", "休闲区", "娱乐区", "豪华大包间"],
      selectText: "",
      selectFn(index: number) {
        this.selectText = this.option[index];
      }
    });
    const overText = ref("红浪漫");
    const overClick = () => {
      overText.value = "点餐完成: 红浪漫" + data.selectText;
    };

    watch([overText, () => data.selectText], (newVal, oldVal) => {
      console.log(newVal);
      console.log(oldVal);
      document.title = newVal[0].toString();
    });

    // onBeforeMount(() => {
    //   console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    // });

    // onMounted(() => {
    //   console.log("3-组件挂载到页面之后执行-----onMounted()");
    // });
    // onBeforeUpdate(() => {
    //   console.log("4-组件更新之前-----onBeforeUpdate()");
    // });

    // onUpdated(() => {
    //   console.log("5-组件更新之后-----onUpdated()");
    // });

    // onRenderTracked(event => {
    //   console.log("状态更新钩子");
    //   console.log(event);
    // });

    // onRenderTriggered(event => {
    //   console.log("状态更新钩子2");
    //   console.log(event);
    // });

    // 最后通过return 出去，需要暴露的属性和方法 return出去，不需要的内置方法和属性则不用暴露
    return {
      // 第一种写法
      option2,
      // selectText,
      // selectFn

      //第二种写法
      ...toRefs(data),
      overText,
      overClick
    };
  }
};
</script>
