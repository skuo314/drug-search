import React, {Component} from 'react';
import {connect} from 'react-redux';

import DrugConcepts from './DrugConcepts';
import DrugAlternatives from './DrugAlternatives';

/* -----------------    COMPONENT     ------------------ */

class Main extends Component {
  constructor(props) {
    super(props);

    this.drugConcepts = this.drugConcepts.bind(this);
  }

  drugConcepts() {
    const { getDrugs } = this.props;


    if (getDrugs.length > 0) {
      console.log('drugConcepts main:', getDrugs[0].drugGroup.conceptGroup[1].conceptProperties)
      return getDrugs[0].drugGroup.conceptGroup[1].conceptProperties;
    }
  }

  render() {
    return (
      <div className='main-container'>
        <DrugConcepts
          drugConcepts={this.drugConcepts} />
        <DrugAlternatives />
      </div>
    );
  };
};

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    getDrugs: state.conceptsReducer
  };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(Main);