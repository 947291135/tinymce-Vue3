import { createApp } from 'vue';
import '@/assets/css/reset.scss';
import App from '@/App.vue';
import Router from '@/router';
import Store from '@/store';
import { components, plugins } from '@/assets/js/element.ui';
import 'element-plus/lib/theme-chalk/index.css';
// import http from "@assets/js/axios";
const app = createApp(App);
// 按需导入Element Plus组件和插件
components.forEach((component) => {
  app.component(component.name, component);
});
plugins.forEach((plugin) => {
  app.use(plugin);
});
// app.config.globalProperties.$http = http

app.use(Router);
app.use(Store);
// app.use(ElementPlus);
app.mount('#app');
