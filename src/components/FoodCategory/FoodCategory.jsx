import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodCategory.css';

const FoodCategory = (props) => {
  return (
    <Link to='/' className='button-go-to-category'>
      <Container bsPrefix className='category-container'>
        <Row>
          <Col>
            <div>
              <img src={props.icon} alt='Cirlce' />
            </div>
          </Col>
          <Col>
            <h6 className='category-name'>{props.name}</h6>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};

export default FoodCategory;
