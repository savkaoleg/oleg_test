import { CHANGE_SUPER_VARIABLE, SEND_AJAX } from '../consts/example';
import {read,create,patch,destroy} from '../../hooks/fetch';

export function doMagic(newSuperVariable){
  return {
    type:CHANGE_SUPER_VARIABLE,
    newSuperVariable
  }
}

export function doMagicAjax(newSuperVariable){
	return async (dispatch) => {
		const response = await read(`http://web-lab.zzz.com.ua/`);
		console.info('resp', await response.json());
	} 
}
