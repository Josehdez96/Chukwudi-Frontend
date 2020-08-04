import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

import './ListOfSelectedProducts.css';

import deliveryCar from '../../assets/icons/delivery-car.png';
import Cart from '../Cart/Cart';

const SelectedProducts = () => {
  return (
    <Fragment>
      <Cart />
      <Row bsPrefix className='delivery-container'>
        <Col bsPrefix className='delivery-img'>
          <img src={deliveryCar} alt='DeliveryImage' />
        </Col>
        <Col bsPrefix className='delivery-tip'>
          Delivery
        </Col>
        <Col bsPrefix className='delivery-price'>
          $0,00
        </Col>
      </Row>
    </Fragment>
  );
};

export default SelectedProducts;
