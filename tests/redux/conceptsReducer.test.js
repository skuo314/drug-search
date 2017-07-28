import { expect } from 'chai';
import { createStore } from 'redux';
import conceptsReducer from '../../app/redux/reducers/conceptsReducer';
import * as types from '../../app/redux/constants';
import { fetchConcept } from '../../app/redux/utils/WebAPIUtils';

describe('conceptsReducer', () => {
  let testStore;

  const drugName = 'alavert';
  const initialState = [];

  beforeEach('create testing store', () => {
    testStore = createStore(conceptsReducer);
  });

  it('has the proper initial state', () => {
    expect(testStore.getState()).to.be.deep.equal(initialState);
  });

  describe('FETCH_DRUGS', () => {
    const request = fetchConcept(drugName);
    it('creates a NEW state object on any dispatched action', () => {
      const firstState = testStore.getState();

      testStore.dispatch({
        type: types.FETCH_DRUGS,
        payload: request
      });
      expect(testStore.getState()).to.not.be.equal(firstState);
    });
  });

  describe('REMOVE_CURRENT_CONCEPT', () => {

    it('creates a NEW state array on any dispatched action', () => {
      const firstState = testStore.getState();

      testStore.dispatch({
        type: types.REMOVE_CURRENT_CONCEPT
      });
      expect(testStore.getState()).to.not.be.equal(firstState);
    });

    it('creates a NEW empty state array on dispatched action', () => {
      const firstState = testStore.getState();
      const newState = [];

      testStore.dispatch({
        type: types.REMOVE_CURRENT_CONCEPT
      });
      expect(testStore.getState()).to.not.be.equal(newState);
    });
  });
  
});