import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/icons/iconfont.js'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')