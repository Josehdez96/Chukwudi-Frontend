import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './RestaurantsAndDelivery.css';
import RestaurantTitle from '../RestaurantTitle/RestaurantTitle';
import DeliveryTime from '../DeliveryTime/DeliveryTime';

const RestaurantsAndDelivery = () => {
  return (
    <Container bsPrefix className='title-and-delivery-container'>
      <Row>
        <Col>
          <RestaurantTitle />
        </Col>
        <Col bsPrefix className='col-2'>
          <DeliveryTime />
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantsAndDelivery;
