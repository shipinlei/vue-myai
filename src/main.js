import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from "./router/index";
import './assets/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
