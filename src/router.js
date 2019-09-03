import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Products from './views/Products.vue'
import Company from './views/Company.vue'
import Services from './views/Services.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
