import { CHANGE_EMAIL_VARIABLE } from '../consts/example';

export function changeEmail(newEmailVariable){
  return {
    type:CHANGE_EMAIL_VARIABLE,
    newEmailVariable
  }
}
