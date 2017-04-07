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
		  const response = await read(`http://web-lab.zzz.com.ua/`);
      const message = await response.json();
      dispatch(changeVariable('sendStatus', message));
      dispatch(changeVariable('formStatus', false));

	  }
}
