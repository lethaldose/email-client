import axios from 'axios'
import * as lodash from 'lodash'

const apiHost = 'http://localhost:3000'

export const sendEmail = (formData) => {
  let emailParams = {
    to: formData.toEmailAddresses.split(','),
    subject: formData.subject,
    body: formData.emailText
  }

  if (!_.isEmpty(formData.ccEmailAddresses)) {
    emailParams.cc = formData.ccEmailAddresses.split(',')
  }
  if (!_.isEmpty(formData.bccEmailAddresses)) {
    emailParams.bcc = formData.bccEmailAddresses.split(',')
  }

  return axios.post(`${apiHost}/email`, emailParams)
    .then(function (response) {
      console.log(response)
      return true
    })
    .catch(function (error) {
      console.log(error)
      Promise.reject(error)
    })
}
