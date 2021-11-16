import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Education from '../views/Education.vue'
import Signin from '../views/Signin.vue'
import Signout from '../views/Signout.vue'
import Server from '../views/Server.vue'
import QnA from '../views/QnA.vue'
import Workbook from '../views/Workbook.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Education',
    component: Education
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signout',
    name: 'Signout',
    component: Signout
  },
  {
    path: '/server',
    name: 'Server',
    component: Server
  },
  {
    path: '/qna',
    name: 'QnA',
    component: QnA
  },
  {
    path: '/workbook',
    name: 'Workbook',
    component: Workbook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
