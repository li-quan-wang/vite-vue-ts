import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

setupRouter(app)
setupStore(app)

router.isReady().then(() => {
  app.use(ElementPlus).mount('#app', true)
})
