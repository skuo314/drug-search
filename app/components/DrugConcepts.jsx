import React, { Component } from 'react';

import DrugConceptsList from './DrugConceptsList';

export default class DrugConcepts extends Component {
  constructor(props) {
    super(props);

    this.showDrugConcepts = this.showDrugConcepts.bind(this);
  }

  showDrugConcepts() {
    const { drugConcepts } = this.props;
    const drugConceptsArray = drugConcepts();

    if (drugConceptsArray) {
      return drugConceptsArray.map((drug, idx) => {
        return (
          <DrugConceptsList
            onSelect={this.props.onSelect} 
            key={idx}
            drug={drug} />
        );
      });
    };
  };


  render() {
    return (
      <ul className='col-md-6 header-styles'>
        <h1 className='drug-header'>Concepts</h1>
        {this.showDrugConcepts()}
      </ul>
    );  
  };
};