import { SEARCH_ALT_DRUGS, REMOVE_ALTERNATIVES } from '../constants';

export default function(state = [], action) {
	
	switch(action.type) {
		case SEARCH_ALT_DRUGS:
			return [ action.payload.data, ...state ];

		case REMOVE_ALTERNATIVES:
			return [];

		default:
			return state;
	};
	
	return state;
};