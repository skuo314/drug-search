import { expect } from 'chai';
import { createStore } from 'redux';
import alternativesReducer from '../../app/redux/reducers/alternativesReducer';
import * as types from '../../app/redux/constants';
import { searchAlternativeDrugs } from '../../app/redux/utils/WebAPIUtils';

describe('alternativesReducer', () => {
  let testStore;

  const rxcui = '351855';
  const initialState = [];

  beforeEach('create testing store', () => {
    testStore = createStore(alternativesReducer);
  });

  it('has the proper initial state', () => {
    expect(testStore.getState()).to.be.deep.equal(initialState);
  });

  describe('SEARCH_ALT_DRUGS', () => {
    const request = searchAlternativeDrugs(rxcui);
    it('creates a NEW state array on any dispatched action', () => {
      const firstState = testStore.getState();

      testStore.dispatch({
        type: types.SEARCH_ALT_DRUGS,
        payload: request
      });
      expect(testStore.getState()).to.not.be.equal(firstState);
    });
  });  

  describe('REMOVE_ALTERNATIVES', () => {

    it('creates a NEW state array on any dispatched action', () => {
      const firstState = testStore.getState();

      testStore.dispatch({
        type: types.REMOVE_ALTERNATIVES
      });
      expect(testStore.getState()).to.not.be.equal(firstState);
    });

    it('creates a NEW empty state array on dispatched action', () => {
      const firstState = testStore.getState();
      const newState = [];

      testStore.dispatch({
        type: types.REMOVE_ALTERNATIVES
      });
      expect(testStore.getState()).to.not.be.equal(newState);
    });
  });
  
});