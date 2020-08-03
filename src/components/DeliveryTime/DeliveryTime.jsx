import React from 'react';
import { Link } from 'react-router-dom';
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
          Delivery:
        </Col>
        <Col bsPrefix className='time-to-deliver'>
          <Row>
            <Link to='/' className='delivery-time-selector'>
              <Col bsPrefix className='actual-delivery-time-col'>
                Now
              </Col>
            </Link>
            <Link to='/' className='delivery-time-selector-2'>
              <Col bsPrefix className='arrow-icon'>
                <img src={arrow} alt='arrowIcon' />
              </Col>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DeliveryTime;
