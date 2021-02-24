import type { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
})

export function setupStore(app: App<Element>) {
  app.use(store)
}
