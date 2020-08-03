import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './RecountOrder.css';
import userIcon from '../../assets/icons/747376.svg';

import * as shoppingCartActions from '../../actions/shoppingCartActions';

const RecountOrder = (props) => {
  return (
    <Container bsPrefix className='recount-container'>
      <Row>
        <Col>
          <img src={userIcon} alt='userIcon' />
        </Col>
        <Col>
          <Button variant='info' bsPrefix className='products-counter'>
            {props.shoppingCart.length}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.shoppingCartReducer;
};

export default connect(mapStateToProps, shoppingCartActions)(RecountOrder);
