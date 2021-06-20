// 公共状态文件：替代VUEX
import { ref, readonly } from 'vue';
type navOpen = boolean;

const navOpen = ref<navOpen>(true);

//  导出函数修改data,相当于 mutations
export function setDatas(value: navOpen): void {
  navOpen.value = value;
}

export const data = readonly(navOpen);
