import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Questionnaire from "../components/Questionnaire";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
