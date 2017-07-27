import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import { fetchDrugs } from '../redux/action-creators/drugsearch';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		let input = evt.target.value.toLowerCase();
		this.setState({ input });
	}

	handleSubmit(evt) {
    evt.preventDefault();

    this.props.fetchDrugs(this.state.input)
    this.setState({input: ''});
	}

	render() {
		return (
			<div className='searchbar-container'>
			  <h1 className='searchbar-header'>Search Medication</h1>
		    <form className='searchbar-form'>
          <input 
          	type='text' className='searchbar rounded' 
          	placeholder='Enter Drug Name'
          	onChange={this.handleChange}
          	value={this.state.input} />
          <button 
          	className='search-btn' type='submit'
          	onClick={this.handleSubmit}>
          	<img 
          		className='magnify-img'
          		src='../images/magnifying-glass.png'/>
          </button>
		    </form>
		    <div></div>
		  </div>
		);
	}; 
};

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {
  	fetchDrugs: drug => dispatch(fetchDrugs(drug))
  };
};

export default connect(mapState, mapDispatch)(SearchBar);