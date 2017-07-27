import axios from 'axios';

export const fetchConcept = drug => {
	const url = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`;
	const request = axios.get(url)
		.then(response => {
			return response;
		})
		return request;
};