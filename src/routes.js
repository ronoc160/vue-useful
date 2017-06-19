import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/components/List'
import Create from '@/components/Create'
import Cardinfo from '@/components/Card-info'
import About from '@/components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/list',
    component: List
  },
  {
    name: 'info',
    path: '/card-info/:id',
    component: Cardinfo
  }
]

export default new VueRouter({
  routes
})
