import React from 'react';

const DrugConceptsList = ({ drug }) => {

  return (
    <li className='list-group-item drug-items'
        id={drug.name} >
      {drug.name}
    </li>
  );
};

export default DrugConceptsList;