import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/components/List'
import Create from '@/components/Create'
import Article from '@/components/Article'
import About from '@/components/About'

Vue.use(VueRouter)
// Redirect to login if no auth
const requireAuth = function requireAuth (route, redirect, next) {
  if (!localStorage.getItem('id_token')) {
    redirect({
      name: 'about',
      query: { backTo: route.fullPath }
    })
  }
  next()
}
const routes = [
  {
    path: '/',
    component: List,
    auth: requireAuth
  },
  {
    path: '/create',
    component: Create,
    auth: requireAuth
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    auth: requireAuth
  },
  {
    name: 'info',
    path: '/article/:id',
    component: Article,
    auth: requireAuth
  }
]

export default new VueRouter({
  routes
})
