import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

export default store;