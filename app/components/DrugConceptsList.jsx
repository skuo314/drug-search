import React from 'react';

const DrugConceptsList = ({ drug, onSelect }) => {

  function selectDrug(evt) {
    evt.preventDefault();
    onSelect(drug);
  }

  return (
    <li className='list-group-item drug-items'
        id={ drug.name }
        onClick={ evt => selectDrug(evt) } >
      { drug.name }
    </li>
  );
};

export default DrugConceptsList;