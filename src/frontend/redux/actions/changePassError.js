import { CHANGE_PASSERROR_VARIABLE } from '../consts/example';

export function changePassError(newPassErrorVariable){
  return {
    type:CHANGE_PASSERROR_VARIABLE,
    newPassErrorVariable
  }
}
