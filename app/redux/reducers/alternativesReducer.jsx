import { SEARCH_ALT_DRUGS } from '../constants';

export default function(state = [], action) {
	
	switch(action.type) {
		case SEARCH_ALT_DRUGS:
			return [ action.payload.data, ...state ]
	}

	return state;
};