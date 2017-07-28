import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { 
	fetchDrugs, 
	removeCurrentConcept,
	removeAlternatives } from '../redux/action-creators/drugsearch';

/* -----------------    COMPONENT     ------------------ */

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { input: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(evt) {
		let input = evt.target.value.toLowerCase();
		this.setState({ input });
	};

	handleSubmit(evt) {
		const { 
			getDrugs, 
			fetchDrugs, 
			getAlternatives, 
			removeCurrentConcept, 
			removeAlternatives } = this.props;
    
    evt.preventDefault();
    fetchDrugs(this.state.input);
    this.setState({ input: '' });	

    if(getDrugs.length > 0) removeCurrentConcept();
    if(getAlternatives.length > 0) removeAlternatives();
	};

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
		  </div>
		);
	}; 
};

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
  	getDrugs: state.conceptsReducer,
  	getAlternatives: state.alternativesReducer
  };
};

const mapDispatch = dispatch => {
  return {
  	fetchDrugs: drug => dispatch(fetchDrugs(drug)),
  	removeCurrentConcept: () => dispatch(removeCurrentConcept()),
  	removeAlternatives: () => dispatch(removeAlternatives())
  };
};

export default connect(mapState, mapDispatch)(SearchBar);
