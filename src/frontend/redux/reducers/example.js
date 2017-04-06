import { CHANGE_SUPER_VARIABLE,SEND_AJAX } from '../consts/example';

const initialState = {
  superVariable: 'hello world'
};

export default function tab(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUPER_VARIABLE:
      return {
               ...state,
               superVariable:action.newSuperVariable
      };
    case SEND_AJAX: 
    default:
      return state;
  }
}
