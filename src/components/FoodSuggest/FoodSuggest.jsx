import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodSuggest.css';
import starIcon from '../../assets/icons/149220.svg';

import * as shoppingCartActions from '../../actions/shoppingCartActions';

const FoodSuggest = ({
  shoppingCart,
  addToCart,
  image,
  time,
  name,
  qualification,
  price,
  id,
}) => {
  const handleAddToCart = () => {
    addToCart({ image, price, name, id });
  };

  return (
    <Container bsPrefix className='card'>
      <Row>
        <Link to='/' className='button-go-to-eat'>
          <div className='card-image'>
            <img src={image} alt='foodImg' />
            <p>{time}</p>
          </div>
        </Link>
      </Row>
      <Row bsPrefix className='row-2'>
        <h4>{name}</h4>
      </Row>
      <Row bsPrefix className='row-3'>
        <button onClick={handleAddToCart}>
          <Col bsPrefix className='star-icon col'>
            <img src={starIcon} alt='star' />
          </Col>
        </button>
        <Col bsPrefix className='score'>
          {qualification}
        </Col>
        <Col bsPrefix className='kind-1'>
          Kind
        </Col>
        <Col bsPrefix className='kind-2'>
          · Kind
        </Col>
        <Col bsPrefix className='price'>
          {`· $ ${price}`}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (reducer) => {
  return reducer.shoppingCartReducer;
};

export default connect(mapStateToProps, shoppingCartActions)(FoodSuggest);
