import React, { Fragment } from 'react';

import './MyOrderSection.css';

import RecountOrder from '../RecountOrder/RecountOrder';
import emoji from '../../assets/icons/emojiglasses.jpg';

const MyOrderSection = () => {
  return (
    <Fragment>
      <RecountOrder />
      <div className='title-container'>
        <h4>
          My <img src={emoji} alt='emoji' />
          <br />
          order
        </h4>
      </div>
    </Fragment>
  );
};

export default MyOrderSection;
