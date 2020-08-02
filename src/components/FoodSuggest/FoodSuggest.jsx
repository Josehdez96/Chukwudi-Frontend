import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodSuggest.css';
import starIcon from '../../assets/icons/149220.svg';

const FoodSuggest = (props) => {
  return (
    <Container bsPrefix className='card'>
      <Row>
        <Link to='/' className='button-go-to-eat'>
          <div className='card-image'>
            <img src={props.image} alt='foodImg' />
            <p>{props.time}</p>
          </div>
        </Link>
      </Row>
      <Row bsPrefix className='row-2'>
        <h4>{props.name}</h4>
      </Row>
      <Row bsPrefix className='row-3'>
        <Col bsPrefix className='star-icon col'>
          <img src={starIcon} alt='star' />
        </Col>
        <Col bsPrefix className='score'>
          {props.qualification}
        </Col>
        <Col bsPrefix className='kind-1'>
          Kind
        </Col>
        <Col bsPrefix className='kind-2'>
          · Kind
        </Col>
        <Col bsPrefix className='price'>
          {`· $ ${props.price}`}
        </Col>
      </Row>
    </Container>
  );
};

export default FoodSuggest;
