import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { 
	Router, 
	Route, 
	IndexRedirect, 
	IndexRoute, 
	browserHistory 
} from 'react-router';
import App from './components/App';
import Main from './components/Main';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
    	<Route component={ App }>
	  		<Route path='/' component={ Main } />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
