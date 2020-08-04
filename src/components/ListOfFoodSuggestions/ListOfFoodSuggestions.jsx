import React, { useEffect } from 'react';

import './ListOfFoodSuggestions.css';
import FoodSuggest from '../FoodSuggest/FoodSuggest';

import apiProductsDataMock from '../../assets/products.json';

const FoodSuggestions = () => {
  useEffect(() => {
    /* Aquí se haría el fetching de datos*/
  });

  return (
    <ul className='All-suggestion-list'>
      {apiProductsDataMock.map((suggest) => (
        <li key={suggest.id}>
          <FoodSuggest
            id={suggest.id}
            image={suggest.image}
            name={suggest.name}
            price={suggest.price}
            qualification={suggest.qualification}
            time={suggest.time}
          />
        </li>
      ))}
    </ul>
  );
};

export default FoodSuggestions;
