import React, {Component} from 'react';

import DrugConcepts from './DrugConcepts';
import DrugAlternatives from './DrugAlternatives';

/* -----------------    COMPONENT     ------------------ */

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <DrugConcepts />
        <DrugAlternatives />
      </div>
    );
  };
};
