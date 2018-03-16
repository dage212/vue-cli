import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import home  from '@/components/home'
import login from '../components/login'
import jquery from '../assets/jquery-3.3.1.min'
import "../assets/bootstrap/js/bootstrap.min"
import "../assets/bootstrap/css/bootstrap.min.css"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[{
        path:'home',
        name:'home',
        component:home
      }]
    }
  ]
})
