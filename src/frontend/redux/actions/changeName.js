import { CHANGE_NAME_VARIABLE } from '../consts/example';

export function changeName(newNameVariable){
  return {
    type:CHANGE_NAME_VARIABLE,
    newNameVariable
  }
}
