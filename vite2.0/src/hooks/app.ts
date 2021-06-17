// 公共状态文件：替代VUEX
import { reactive, readonly, computed } from 'vue';
// https://juejin.cn/post/6856718746694713352
interface appType {
  userName: string;
  id: number | null;
  userImg: string;
  [key: string]: any;
}

//  也可以ref 相当于 state
export const data = reactive<appType>({
  userName: '',
  id: null,
  userImg: '',
});

//  导出函数修改data,相当于 mutations
export function setDatas(key: string, value: any): void {
  data[key] = value;
}
export function setDataAll(value: appType): void {
  data.userName = value.userName;
  data.id = value.id;
  data.userImg = value.userImg;
}

// actions 基本就是在这里写个方法调用 setData 而已没什么好说的

// getters
const img = computed(() => {
  return data.userImg || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
});
export const getters = {
  img,
};

// readonly 可以保护data，外部代码只能访问状态，只有导出的函数才可以修改状态。
//  这里有点像 react useState
export const datas = readonly(data);
