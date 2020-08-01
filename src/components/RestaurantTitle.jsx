import React from 'react';

import './styles/RestaurantTitle.css';
import hamburgerIcon from '../assets/icons/1046784.svg';

const RestaurantTitle = () => {
  return (
    <article className='restaurant-title'>
      <h2>Restaurants</h2>
      <img src={hamburgerIcon} alt='hamburger' />
    </article>
  );
};

export default RestaurantTitle;
