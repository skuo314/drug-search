import axios from 'axios';
import { FETCH_DRUGS } from '../constants';
import { fetchConcept } from '../utils/WebAPIUtils';

export const fetchDrugs = drug => {
	const request = fetchConcept(drug);

	return {
		type: FETCH_DRUGS,
		payload: request
	};
};