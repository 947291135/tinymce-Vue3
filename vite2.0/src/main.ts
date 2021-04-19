import { createApp } from 'vue'
import '@/assets/css/reset.scss'
import App from '@/App.vue'
import Router from '@/router';
import Store from '@/store';
const app = createApp(App)
app.use(Router)
app.use(Store)
app.mount('#app')