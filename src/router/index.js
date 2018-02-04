import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EmailForm from '@/components/EmailForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/email',
      name: 'EmailForm',
      component: EmailForm
    }
  ]
})
