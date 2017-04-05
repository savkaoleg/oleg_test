import { CHANGE_PASSREPEAT_VARIABLE } from '../consts/example';

export function changePassRepeat(newPassRepeatVariable){
  return {
    type:CHANGE_PASSREPEAT_VARIABLE,
    newPassRepeatVariable
  }
}
