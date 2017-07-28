import axios from 'axios';

export const fetchConcept = drug => {
	const url = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`;
	const request = axios.get(url)
		.then(response => {
			return response;
		});
		return request;
};

export const searchDrugGroup = drug => {
	const url = `https://rxnav.nlm.nih.gov/REST/rxcui/${drug.rxcui}/related.json?tty=IN`;
	const request = axios.get(url)
		.then(response => {
			return response;
		});
		return request;
};

export const searchAlternativeDrugs = rxcui => {
	const url = `https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/related.json?tty=SCD+SBD`;
	const request = axios.get(url)
		.then(response => {
			return response;
		});
		return request;
};