import * as _ from 'lodash'

import { email } from 'vuelidate/lib/validators'

const emailValidator = email
export const emailList = value => {
  if (_.isEmpty(value)) {
    return true
  }
  const emailAddList = value.split(',')
  const result = _.some(emailAddList, (v) => emailValidator(v.trim()) === false)
  return !result
}
