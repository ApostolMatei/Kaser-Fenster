import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProductstView from '@/views/ProductsView.vue'
import ContactView from '@/views/ContactView.vue'
const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/services',
    component: ServicesView
  },
  {
    path: '/produkte',
    component: ProductstView
  },
  {
    path: '/kontact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
