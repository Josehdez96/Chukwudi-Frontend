import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/RestaurantsAndDelivery.css';
import RestaurantTitle from './RestaurantTitle';
import DeliveryTime from './DeliveryTime';

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
