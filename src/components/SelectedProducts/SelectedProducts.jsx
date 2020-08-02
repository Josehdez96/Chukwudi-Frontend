import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

import './SelectedProducts.css';

import deliveryCar from '../../assets/icons/delivery-car.png';
import productImageMock from '../../assets/images/pexels-photo-262959.jpeg';

const SelectedProducts = () => {
  return (
    <Fragment>
      <div>
        {[1, 2, 3, 4].map((product) => (
          <Row key={product} bsPrefix className='product-container'>
            <Col className='product-image-container'>
              <img src={productImageMock} alt='productImage' />
            </Col>
            <Col bsPrefix className='qty-products'>
              1
            </Col>
            <Col bsPrefix className='separator'>
              x
            </Col>
            <Col bsPrefix className='product-name'>
              Burger master
            </Col>
            <Col bsPrefix className='product-price'>
              $14,99
            </Col>
          </Row>
        ))}
      </div>
      <Row bsPrefix className='delivery-container'>
        <Col bsPrefix className='delivery-img'>
          <img src={deliveryCar} alt='DeliveryImage' />
        </Col>
        <Col bsPrefix className='delivery'>
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
