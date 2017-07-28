import React, { Component } from 'react';
import {connect} from 'react-redux';
import DrugAlternativeList from './DrugAlternativeList';

export default class DrugAlternatives extends Component {
  constructor(props) {
    super(props);

    this.showAlternatives = this.showAlternatives.bind(this);
  };

  showAlternatives() {
    const { alternatives } = this.props;
    const alternativesArray = alternatives();

    if (alternativesArray) {
      return alternativesArray.map((alternatives, idx) => {
        return (
          <DrugAlternativeList
            key={ idx }
            alternatives={ alternatives } />
        );
      });
    };
  };

  render() {
	  return (
	    <ul className='col-md-6 header-styles'>
	      <h1 className='drug-header'>Alternatives</h1>
        { this.showAlternatives() }
	    </ul>
	  );	
  };
};