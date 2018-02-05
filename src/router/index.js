import Vue from 'vue'
import Router from 'vue-router'
import Metrics from '@/components/Metrics'
import EmailForm from '@/components/EmailForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/metrics',
      name: 'Metrics',
      component: Metrics
    },
    {
      path: '/',
      name: 'EmailForm',
      component: EmailForm
    }
  ]
})
