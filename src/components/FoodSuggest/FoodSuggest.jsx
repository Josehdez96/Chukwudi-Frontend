import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodSuggest.css';
import starIcon from '../../assets/icons/149220.svg';
import imageTest from '../../assets/images/pexels-photo-156114.jpeg';

// eslint-disable-next-line
const foodMock = [
  {
    id: 1,
    name: 'Filete de ternera con salsa',
    qualification: 4.9,
    time: '25-30min',
    price: 14.99,
    image:
      'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440',
  },
];

const FoodSuggest = () => {
  return (
    <Container bsPrefix className='card'>
      <Row>
        <Link to='/' className='button-go-to-eat'>
          <div className='card-image'>
            <img src={imageTest} alt='imgtest' />
            <p>25-30min</p>
          </div>
        </Link>
      </Row>
      <Row bsPrefix className='row-2'>
        <h4>Bager Story</h4>
      </Row>
      <Row bsPrefix className='row-3'>
        <Col bsPrefix className='star-icon col'>
          <img src={starIcon} alt='star' />
        </Col>
        <Col bsPrefix className='score'>
          4.3
        </Col>
        <Col bsPrefix className='kind-1'>
          Deli
        </Col>
        <Col bsPrefix className='kind-2'>
          · Bagels
        </Col>
        <Col bsPrefix className='price'>
          · $
        </Col>
      </Row>
    </Container>
  );
};

export default FoodSuggest;
