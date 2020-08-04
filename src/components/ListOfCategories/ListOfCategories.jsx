import React, { useEffect } from 'react';

import './ListOfCategories.css';
import FoodCategory from '../FoodCategory/FoodCategory';

import apiCategoriesDataMock from '../../assets/categories.json';

const ListOfCategories = () => {
  useEffect(() => {
    /* Aquí se realizaría el fetching de datos de manera asincrona*/
  });

  return (
    <ul className='All-list'>
      {apiCategoriesDataMock.map((category) => (
        <li key={category.id}>
          <FoodCategory icon={category.icon} name={category.name} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfCategories;
