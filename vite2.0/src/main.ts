import { createApp } from "vue";
import "@/assets/css/reset.scss";
import App from "@/App.vue";
import Router from "@/router";
import Store from "@/store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import http from "@assets/js/axios";
const app = createApp(App);

// app.config.globalProperties.$http = http

app.use(Router);
app.use(Store);
app.use(ElementPlus);
app.mount("#app");
