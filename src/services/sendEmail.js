import axios from 'axios'
import * as _ from 'lodash'

const apiHost = process.env.API_HOST

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
      return Promise.reject(error)
    })
}
