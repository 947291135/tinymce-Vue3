<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>欢迎来到网鱼网咖，请选择你的上网配置</div>
  <div>
    <button @click="selectFn(index)" v-for="(item,index) of option" :key="index">{{item}}</button>
  </div>
  <div>您选择了【{{selectText}}】套餐</div>
</template>

<script lang="ts">
import { 
  ref,
  reactive,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
} from 'vue';
// 新建接口规范data
interface DataProps {
  option: string[];
  selectText: string;
  selectFn: (index: number) => void;
}
export default({
  name: 'App',
  setup(){

    // setup 替代了data\method和,在这统一写方法和定义变量

    // 第一种写法
    // ref只可以监听简单数据，reactive可以监听所有数据
    const option2 = ref(['电竞区','休闲区','娱乐区','豪华大包间'])
    // const selectText = ref('')
    // // 注意这里要空格 (index: number)
    // const selectFn = (index: number) =>{
    //   // 在这里不用使用this了，但是用ref暴露的数据 必须使用.value 获取数据 或者设置数据
    //   selectText.value = option.value[index]
    // }

    // 第二种写法
    const data: DataProps = reactive({
      option:['电竞区','休闲区','娱乐区','豪华大包间'],
      selectText:'',
      selectFn(index: number){
        this.selectText = this.option[index]
      }
    })

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });

    // 最后通过return 出去，需要暴露的属性和方法 return出去，不需要的内置方法和属性则不用暴露
    return{
      // 第一种写法
      option2,
      // selectText,
      // selectFn

      //第二种写法
      ...toRefs(data) 
    }
  },
  beforeCreate() {
    console.log("1-组件创建之前-----beforeCreate()");
  },
  beforeMount() {
    console.log("2-组件挂载到页面之前执行-----BeforeMount()");
  },
  mounted() {
    console.log("3-组件挂载到页面之后执行-----Mounted()");
  },
  beforeUpdate() {
    console.log("4-组件更新之前-----BeforeUpdate()");
  },
  updated() {
    console.log("5-组件更新之后-----Updated()");
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
