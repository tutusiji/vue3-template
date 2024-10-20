import './assets/main.css'
import 'virtual:uno.css' //  虚拟模块，与 Vite 或类似工具结合使用。它不会引入一个实际存在的 uno.css 文件，而是告诉 Vite 在运行时动态生成和插入 UnoCSS 样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
