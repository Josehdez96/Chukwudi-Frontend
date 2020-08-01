import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './FoodCategory.css';
import imageTest from '../../assets/icons/135367.svg';

const FoodCategory = () => {
  return (
    <Container bsPrefix className='category-container'>
      <Row>
        <Col>
          <div>
            <img src={imageTest} alt='Cirlce' />
          </div>
        </Col>
        <Col>
          <h6>Titulo</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodCategory;
