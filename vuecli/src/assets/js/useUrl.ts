import { ref } from "vue";
import axios from "axios";
const result = ref<object | null>(null); //返回值
const loading = ref<boolean>(true); //数据正在加载
const loaded = ref<boolean>(false); //数据加载完成
const error = ref<object | null>(null); //报错
function useUrlAxios(url: string) {
  axios
    .get(url)
    .then(res => {
      loading.value = false;
      loaded.value = true;
      result.value = res.data;
    })
    .catch(e => {
      loading.value = false;
      loaded.value = true;
      error.value = e;
    });

  return {
    result,
    loading,
    loaded,
    error
  };
}

export default useUrlAxios;
