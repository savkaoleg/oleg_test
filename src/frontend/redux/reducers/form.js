const initialState = {
  name: '',
  email: '',
  pass: '',
  passRepeat: '',
  passError: ''
};

export default function tab(state = initialState, action) {
  if(action.type) {
      return {
               ...state,
               [action.type]:action.newVariable
      }
   } else {
     return state;
   }

}
