import type { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  strict: true,
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
