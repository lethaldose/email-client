import * as _ from 'lodash'

import { email } from 'vuelidate/lib/validators'

const emailValidator = email
export const emailList = value => {
  const emailAddList = value.split(',')
  const result = _.some(emailAddList, (v) => emailValidator(v) === false)
  return !result
}
