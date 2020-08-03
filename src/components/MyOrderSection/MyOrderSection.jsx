import React, { Fragment } from 'react';

import './MyOrderSection.css';

import emoji from '../../assets/icons/emojiglasses.jpg';
import RecountOrder from '../RecountOrder/RecountOrder';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';
import ListOfSelectedProducts from '../ListOfSelectedProducts/ListOfSelectedProducts';

const MyOrderSection = () => {
  return (
    <Fragment>
      <RecountOrder />
      <div className='title-container'>
        <h4>
          My <img src={emoji} alt='emoji' />
          {/* No hallé un emoji con el fondo transparente */}
          <br />
          order
        </h4>
      </div>
      <DeliveryDetail />
      <ListOfSelectedProducts />
    </Fragment>
  );
};

export default MyOrderSection;
