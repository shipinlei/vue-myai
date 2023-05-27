import {createApp} from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from "./router/index";
 import './assets/base.css'
import './api/mock.js'
// 1. 引入你需要的组件
// import {Button, Icon} from 'vant';

// 2. 引入组件样式
// import 'vant/lib/index.css';

const app = createApp(App)
// app.use(router).use(Button).use(Icon)
app.use(router)
app.mount('#app')
