import { CHANGE_SUPER_VARIABLE } from '../consts/example';

export function doMagic(newSuperVariable){
  return {
    type:CHANGE_SUPER_VARIABLE,
    newSuperVariable
  }
}