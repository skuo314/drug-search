import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Sidebar from './Sidebar';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
			<div>
				<Sidebar />
				{this.props.children}
			</div>
    );
  };
};