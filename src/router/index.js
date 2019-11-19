import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
//import Questionnaire from "../components/Questionnaire";
import Home from "../views/Home.vue";
import Result from "../components/Result.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/result/:id',
    name: 'Result',
    component: Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
