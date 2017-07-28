'use strict'

import { expect } from 'chai';

import { 
  fetchDrugs,
  removeCurrentConcept,
  searchAlternatives,
  removeAlternatives 
} from '../../app/redux/action-creators/drugSearch';

import { fetchConcept, searchAlternativeDrugs } from '../../app/redux/utils/WebAPIUtils';

import * as types from '../../app/redux/constants';

describe('Front end action creators', () => {

  const drugName = 'alavert';
  const rxcui = '351855';

  describe('fetchDrugs', () => {
    const request = fetchConcept(drugName);
    it('returns correct drug concept', () => {
      const expectedAction = {
        type: types.FETCH_DRUGS,
        payload: request
      };
      expect(fetchDrugs(drugName)).to.be.deep.equal(expectedAction);
    });
  });

  describe('removeCurrentConcept', () => {
    it('empties the concepts array', () => {
      const expectedAction = {
        type: types.REMOVE_CURRENT_CONCEPT
      };
      expect(removeCurrentConcept()).to.be.deep.equal(expectedAction);
    });
  });

  describe('searchAlternatives', () => {
    const request = searchAlternativeDrugs(rxcui);
    it('finds the correct alternatives for selected concept', () => {
      const expectedAction = {
        type: types.SEARCH_ALT_DRUGS,
        payload: request
      };
      expect(searchAlternatives(rxcui)).to.be.deep.equal(expectedAction);
    });
  });

  describe('removeAlternatives', () => {
    it('empties the alternatives array', () => {
      const expectedAction = {
        type: types.REMOVE_ALTERNATIVES
      }
      expect(removeAlternatives()).to.be.deep.equal(expectedAction)
    });
  });

});

