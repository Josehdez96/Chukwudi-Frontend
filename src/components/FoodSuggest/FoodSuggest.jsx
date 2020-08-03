import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './FoodSuggest.css';
import starIcon from '../../assets/icons/149220.svg';

import * as shoppingCartActions from '../../actions/shoppingCartActions';

const FoodSuggest = (props) => {
  const addOrRemove = () => {
    console.log(props);
  };

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
        <button onClick={addOrRemove}>
          <Col bsPrefix className='star-icon col'>
            <img src={starIcon} alt='star' />
          </Col>
        </button>
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

const mapStateToProps = (reducer) => {
  return reducer.shoppingCartReducer;
};

export default connect(mapStateToProps, shoppingCartActions)(FoodSuggest);
