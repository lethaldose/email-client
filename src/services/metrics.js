import axios from 'axios'

const apiHost = process.env.API_HOST

export const getMetrics = (formData) => {
  return axios.get(`${apiHost}/metrics`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return Promise.reject(error)
    })
}
