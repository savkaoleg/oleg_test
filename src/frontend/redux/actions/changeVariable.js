import {read,create,patch,destroy} from '../../hooks/fetch';


export function changeVariable(typeOfAction, newVariable){
  return {
    type: typeOfAction,
    newVariable
  }
}



export function sendForm(){
  	return async (dispatch) => {
      dispatch(changeVariable('formStatus', true));
		  const response = await create(`http://jsonplaceholder.typicode.com/posts`);


      if(response.status == 201){
        dispatch(changeVariable('formStatus', false));
        dispatch(changeVariable('sendStatus', 'Saved, have nice day'));
      }
      else if(response.status == 401){
        dispatch(changeVariable('formStatus', false));
        dispatch(changeVariable('sendStatus', 'Sorry, our server is down'));
      }
	  }
}
