import { CHANGE_SUPER_VARIABLE } from '../consts/example';
import { CHANGE_NAME_VARIABLE } from '../consts/example';
import { CHANGE_EMAIL_VARIABLE } from '../consts/example';
import { CHANGE_PASS_VARIABLE } from '../consts/example';
import { CHANGE_PASSREPEAT_VARIABLE } from '../consts/example';
import { CHANGE_PASSERROR_VARIABLE } from '../consts/example';

const initialState = {
  name: '',
  email: '',
  pass: '',
  passRepeat: '',
  passError: ''
};

export default function tab(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME_VARIABLE:
      return {
               ...state,
               name:action.newNameVariable
      };
    case CHANGE_EMAIL_VARIABLE:
      return {
               ...state,
               email:action.newEmailVariable
      };
    case CHANGE_PASS_VARIABLE:
      return {
              ...state,
              pass:action.newPassVariable
      };
    case CHANGE_PASSREPEAT_VARIABLE:
      return {
              ...state,
              passRepeat:action.newPassRepeatVariable
      };
    case CHANGE_PASSERROR_VARIABLE:
      return {
              ...state,
              passError:action.newPassErrorVariable
      };
    default:
      return state;
  }
}
