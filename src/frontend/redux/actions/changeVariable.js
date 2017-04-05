export function changeVariable(typeOfAction, newVariable){
  return {
    type: typeOfAction,
    newVariable
  }
}
