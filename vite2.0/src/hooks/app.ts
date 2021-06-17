// 公共状态文件：替代VUEX
import { reactive, readonly } from 'vue';

interface appType {
  userName: string;
  id: number | null;
  userImg: string;
  [key: string]: any;
}

const data = reactive<appType>({
  userName: '',
  id: null,
  userImg: '',
});

export const setDatas = (key: string, value: any): void => {
  data[key] = value;
};

export const datas = readonly(data);
