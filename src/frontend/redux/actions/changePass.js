import { CHANGE_PASS_VARIABLE } from '../consts/example';

export function changePass(newPassVariable){
  return {
    type:CHANGE_PASS_VARIABLE,
    newPassVariable
  }
}
