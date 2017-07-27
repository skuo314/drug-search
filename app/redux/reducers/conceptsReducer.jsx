import { FETCH_DRUGS } from '../constants';

export default function(state = [], action) {
	
	switch(action.type) {
		case FETCH_DRUGS:
			return [ action.payload.data, ...state ]
	}

	return state;
};