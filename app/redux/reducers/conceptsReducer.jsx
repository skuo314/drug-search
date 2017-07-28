import { FETCH_DRUGS, REMOVE_CURRENT_CONCEPT } from '../constants';

export default function(state = [], action) {
	
	switch(action.type) {
		case FETCH_DRUGS:
			return [ action.payload.data, ...state ];

		case REMOVE_CURRENT_CONCEPT:
			return [];

		default:
			return state;
	}

	return state;
};