import axios from 'axios'
import * as _ from 'lodash'

const apiHost = process.env.API_HOST

const trimEmails = (emails) => {
  return emails.map((e) => e.trim())
}
export const sendEmail = (formData) => {
  let emailParams = {
    to: trimEmails(formData.toEmailAddresses.split(',')),
    subject: formData.subject,
    body: formData.emailText
  }

  let ccEmailAddresses = formData.ccEmailAddresses || ''
  if (!_.isEmpty(ccEmailAddresses.trim())) {
    emailParams.cc = trimEmails(formData.ccEmailAddresses.split(','))
  }

  let bccEmailAddresses = formData.bccEmailAddresses || ''
  if (!_.isEmpty(bccEmailAddresses.trim())) {
    emailParams.bcc = trimEmails(formData.bccEmailAddresses.split(','))
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
