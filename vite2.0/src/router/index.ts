import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(), //history模式使用HTML5模式
  routes,
});

export default router;
