import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 添加router
import Router from '/@/router/index';

const app = createApp(App)
app.use(Router)
app.mount('#app')

