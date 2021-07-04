import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  // { path: '/', name: 'app', component:() => import('@/App.vue')},
  { path: '/', name: 'button', component:() => import('@/views/button/index.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
