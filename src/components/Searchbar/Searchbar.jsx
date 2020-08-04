import React from 'react';
import './Searchbar.css';

import searchIcon from '../../assets/icons/126474.svg';

const Searchbar = () => {
  return (
    <section className='main-input'>
      <div className='searchbar-container'>
        <div>
          <img className='search-icon' src={searchIcon} alt='search-icon' />
        </div>
        <div className='search-input'>
          <input type='text' placeholder='Search' />
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
