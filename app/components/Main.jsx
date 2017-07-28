import React, {Component} from 'react';
import {connect} from 'react-redux';
import DrugConcepts from './DrugConcepts';
import DrugAlternatives from './DrugAlternatives';
import { searchAlternatives } from '../redux/action-creators/drugsearch';
import { searchDrugGroup } from '../redux/utils/WebAPIUtils';

/* -----------------    COMPONENT     ------------------ */

class Main extends Component {
  constructor(props) {
    super(props);

    this.drugConcepts = this.drugConcepts.bind(this);
    this.similarDrugGroup = this.similarDrugGroup.bind(this);
    this.getDrugAlternatives = this.getDrugAlternatives.bind(this);
  };

  drugConcepts() {
    const { getDrugs } = this.props;

    if(getDrugs.length > 0) {
      return getDrugs[0].drugGroup.conceptGroup[1].conceptProperties;
    };
  };

  similarDrugGroup(selectedDrug) {
    const { searchAlternatives } = this.props;
    searchDrugGroup(selectedDrug)
      .then(result => {
        let rxcui = result.data.relatedGroup.conceptGroup[0].conceptProperties[0].rxcui;
        searchAlternatives(rxcui);
      });
  };

  getDrugAlternatives(rxcui) {
    const { getAlternatives } = this.props;
    if(getAlternatives.length > 0) {
      return getAlternatives[0].relatedGroup.conceptGroup[0].conceptProperties;
    };
  };

  render() {
    return (
      <div className='main-container'>
        <div className='another-container'>
        <DrugConcepts
          drugConcepts={this.drugConcepts}
          onSelect={selectedDrug => this.similarDrugGroup(selectedDrug)} />
        <DrugAlternatives
          alternatives={this.getDrugAlternatives} />
        </div>
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
    searchAlternatives: drug => dispatch(searchAlternatives(drug))
  };
};

export default connect(mapState, mapDispatch)(Main);