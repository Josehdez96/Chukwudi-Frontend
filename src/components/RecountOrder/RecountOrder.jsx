import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './RecountOrder.css';
import userIcon from '../../assets/icons/747376.svg';

const RecountOrder = () => {
  return (
    <Container bsPrefix className='recount-container'>
      <Row>
        <Col>
          <img src={userIcon} alt='userIcon' />
        </Col>
        <Col>
          <Button variant='info' bsPrefix className='products-counter'>
            3
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecountOrder;
