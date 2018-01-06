import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog/Blog'
import AboutUs from '@/components/AboutUs/AboutUs'
import Login from '@/components/Login/Login'
import ContactMe from '@/components/ContactMe/ContactMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contactme',
      name: 'ContactMe',
      component: ContactMe
    }
  ],
  mode: 'history'
})
