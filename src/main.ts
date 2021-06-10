/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:22:19
 * @LastEditTime: 2021-06-09 14:43:58
 * @FilePath: \Assembly\src\main.ts
 */
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.less';
import './style/antd.less'; // 用于覆盖上面定义的变量
import router from './router/index'
import store from './store/index'
import './permission' // permission control
import '../mock/index'
const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(store);
app.mount('#app')