import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

import clock from '../../assets/icons/149316.svg';
import './DeliveryDetail.css';

const DeliveryDetail = () => {
  return (
    <section className='all-delivery-detail'>
      <Jumbotron fluid bsPrefix className='delivery-detail'>
        <Row bsPrefix className='row-1'>
          <Col bsPrefix className='address'>
            625 St Marks Ave
          </Col>
          <Col>
            <Link to='/' className='edit-button'>
              Edit
            </Link>
          </Col>
        </Row>
        <Row bsPrefix className='row-2'>
          <Col>
            <Container bsPrefix className='clock-container'>
              <img src={clock} alt='clockIcon' />
            </Container>
          </Col>
          <Col bsPrefix className='minutes'>
            35 min
          </Col>
          <Col bsPrefix className='choose-time-button'>
            Choose time
          </Col>
        </Row>
      </Jumbotron>
    </section>
  );
};

export default DeliveryDetail;
