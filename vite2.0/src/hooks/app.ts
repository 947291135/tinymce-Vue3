// 公共状态文件：替代VUEX
import { reactive } from 'vue';

interface appType {
  text: string | null;
  num: number;
}

export const app = reactive<appType>({
  text: 'text',
  num: 14,
});
