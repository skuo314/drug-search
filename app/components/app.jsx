import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Sidebar from './Sidebar';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(path) {
		browserHistory.push(path);
	}

  render() {
    return (
			<div>
				<Sidebar changeTab={this.changeTab}/>
				{this.props.children}
			</div>
    );
  };
};