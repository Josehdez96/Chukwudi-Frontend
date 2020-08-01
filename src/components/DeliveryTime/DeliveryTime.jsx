import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './DeliveryTime.css';
import clock from '../../assets/icons/149316.svg';
import arrow from '../../assets/icons/118740.svg';

const DeliveryTime = () => {
  return (
    <Container bsPrefix className='delivery'>
      <Row>
        <Col>
          <img src={clock} alt='clock' />
        </Col>
        <Col bsPrefix className='delivery-title'>
          Delivery
        </Col>
        <Col bsPrefix className='time-to-deliver'>
          <Row>
            <Col bsPrefix className='now-col'>
              Now
            </Col>
            <Col bsPrefix className='arrow-icon'>
              <img src={arrow} alt='arrowIcon' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DeliveryTime;
