import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import VueQrcodeReader from "vue-qrcode-reader";

import App from './App.vue'

import Login from './pages/Login.vue'
import Scan from './pages/Scan.vue'
import Alternative from './pages/Alternative.vue'
import History from './pages/History.vue'
import List from './pages/List.vue'
import Result from './pages/Result.vue'
import Home from './pages/Home.vue'
import Coupon from './pages/Coupon.vue'
import Comparison from './pages/Comparison.vue'
import Ranking from './pages/Ranking.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/scan', component: Scan },
  { path: '/alternative', component: Alternative },
  { path: '/history', component: History },
  { path: '/list', component: List },
  { path: '/result', component: Result },
  { path: '/home', component: Home },
  { path: '/coupon', component: Coupon },
  { path: '/comparison', component: Comparison },
  { path: '/ranking', component: Ranking },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(VueQrcodeReader)

app.mount('#app')
