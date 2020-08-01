import React from 'react';

import './ListOfFoodSuggestions.css';
import FoodSuggest from '../FoodSuggest/FoodSuggest';

const FoodSuggestions = () => {
  return (
    <ul className='All-suggestion-list'>
      {[1, 2, 3, 4, 5, 6, 7].map((suggest) => (
        <li key={suggest}>
          <FoodSuggest />
        </li>
      ))}
    </ul>
  );
};

export default FoodSuggestions;
