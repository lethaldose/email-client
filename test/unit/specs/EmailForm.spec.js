import Vue from 'vue'
import EmailForm from '@/components/EmailForm'

describe('EmailForm.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(EmailForm)
    const vm = new Constructor().$mount()
  })
})
