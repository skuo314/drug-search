import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';

//will remove redux loggerMiddleware when deploying application
const loggerMiddleware = createLogger();
const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware, reduxPromise));

export default store;