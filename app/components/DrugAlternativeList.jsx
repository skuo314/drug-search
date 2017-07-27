import React from 'react';

const DrugAlternativesList = ({ alternatives }) => {

  return (
    <li className='list-group-item drug-items'>
      {alternatives.name}
    </li>
  );
};

export default DrugAlternativesList;