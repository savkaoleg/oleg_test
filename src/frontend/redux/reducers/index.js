import example from './example';
import form from './form';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	example,
	form

})

export default rootReducer
