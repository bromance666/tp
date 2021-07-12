import { createRouter,createWebHistory} from "vue-router"
const routes = [
  { path: '/', component: () => import('../App.vue') },
  { path: '/button', component: () => import('../views/button/index') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
