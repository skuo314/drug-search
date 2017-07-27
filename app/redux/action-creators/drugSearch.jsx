import { FETCH_DRUGS, SEARCH_ALT_DRUGS } from '../constants';
import { fetchConcept, searchDrugGroup, searchAlternativeDrugs } from '../utils/WebAPIUtils';

export const fetchDrugs = drug => {
	const request = fetchConcept(drug);

	return {
		type: FETCH_DRUGS,
		payload: request
	};
};

export const searchAlternatives = rxcui => {
	const request = searchAlternativeDrugs(rxcui);

	return {
		type: SEARCH_ALT_DRUGS,
		payload: request
	}
}