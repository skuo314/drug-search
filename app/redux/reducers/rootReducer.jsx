import { combineReducers } from 'redux';
import conceptsReducer from './conceptsReducer';
import alternativesReducer from './alternativesReducer';

const rootReducer = combineReducers({
	conceptsReducer,
	alternativesReducer
});

export default rootReducer;