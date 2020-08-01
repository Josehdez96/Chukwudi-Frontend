import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './Checkout.css';
import arrow from '../../assets/icons/109617.svg';

const Checkout = () => {
  return (
    <Row bsPrefix className='main-checkout-row'>
      <Col bsPrefix className='persons-col'>
        <Row>
          <p>Persons</p>
        </Row>
        <Row bsPrefix className='qty-persons-selector'>
          <Button
            variant='warning'
            bsPrefix
            className='substract-person-button'
          >
            -
          </Button>
          <Button variant='warning' disabled bsPrefix className='person-qty'>
            1
          </Button>
          <Button variant='warning' bsPrefix className='add-person-button'>
            +
          </Button>
        </Row>
      </Col>
      <Col bsPrefix className='button-container'>
        <Link to='/'>
          <Row bsPrefix className='checkout-button'>
            <Col bsPrefix className='col-text'>
              <h4>Checkout</h4>
            </Col>
            <Col bsPrefix className='col-arrow'>
              <img src={arrow} alt='arrow' />
            </Col>
          </Row>
        </Link>
      </Col>
    </Row>
  );
};

export default Checkout;
