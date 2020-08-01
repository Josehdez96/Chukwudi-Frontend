import React from 'react';

import './ListOfCategories.css';
import FoodCategory from '../FoodCategory/FoodCategory';

const ListOfCategories = () => {
  return (
    <ul className='All-list'>
      {[1, 2, 3, 4, 5, 6, 7].map((category) => (
        <li key={category}>
          <FoodCategory />
        </li>
      ))}
    </ul>
  );
};

export default ListOfCategories;
