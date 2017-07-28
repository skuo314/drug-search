import { 
	FETCH_DRUGS, 
	SEARCH_ALT_DRUGS,
	REMOVE_CURRENT_CONCEPT, 
	REMOVE_ALTERNATIVES } from '../constants';
import { fetchConcept, searchDrugGroup, searchAlternativeDrugs } from '../utils/WebAPIUtils';

export const fetchDrugs = drug => {
	const request = fetchConcept(drug);

	return {
		type: FETCH_DRUGS,
		payload: request
	};
};

export const removeCurrentConcept = () => {
	return {
		type: REMOVE_CURRENT_CONCEPT
	}
}

export const searchAlternatives = rxcui => {
	const request = searchAlternativeDrugs(rxcui);

	return {
		type: SEARCH_ALT_DRUGS,
		payload: request
	}
}

export const removeAlternatives = () => {
	return {
		type: REMOVE_ALTERNATIVES
	}
}