const initialState = {
  name: '',
  email: '',
  pass: '',
  passRepeat: '',
  passError: ''
};

export default function tab(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME_VARIABLE':
      return {
               ...state,
               name:action.newVariable
      };
    case 'CHANGE_EMAIL_VARIABLE':
      return {
               ...state,
               email:action.newVariable
      };
    case 'CHANGE_PASS_VARIABLE':
      return {
              ...state,
              pass:action.newVariable
      };
    case 'CHANGE_PASSREPEAT_VARIABLE':
      return {
              ...state,
              passRepeat:action.newVariable
      };
    case 'CHANGE_PASSERROR_VARIABLE':
      return {
              ...state,
              passError:action.newVariable
      };
    default:
      return state;
  }
}
