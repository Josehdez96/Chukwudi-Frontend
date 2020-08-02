import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodCategory.css';
import imageTest from '../../assets/icons/135367.svg';

const FoodCategory = () => {
  return (
    <Link to='/' className='button-go-to-category'>
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
    </Link>
  );
};

export default FoodCategory;
