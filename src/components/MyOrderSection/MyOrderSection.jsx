import React, { Fragment } from 'react';

import './MyOrderSection.css';

import emoji from '../../assets/icons/emojiglasses.jpg';
import RecountOrder from '../RecountOrder/RecountOrder';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';

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
      <DeliveryDetail />
    </Fragment>
  );
};

export default MyOrderSection;
