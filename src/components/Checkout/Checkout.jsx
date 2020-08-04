import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Checkout.css';
import arrow from '../../assets/icons/109617.svg';

import * as personCounterActions from '../../actions/personCounterActions';

const Checkout = (props) => {
  const addPerson = () => {
    props.addPerson(props.personCounterReducer.personCounter);
  };
  const substractPerson = () => {
    props.substractPerson(props.personCounterReducer.personCounter);
  };

  return (
    <Row bsPrefix className='main-checkout-row'>
      <Col bsPrefix className='persons-col'>
        <Row>
          <p>Persons</p>
        </Row>
        <Row bsPrefix className='qty-persons-selector'>
          <Button
            variant='warning'
            bsPrefix
            className='substract-person-button'
            onClick={substractPerson}
          >
            -
          </Button>
          <Button variant='warning' disabled bsPrefix className='person-qty'>
            {props.personCounterReducer.personCounter}
          </Button>
          <Button
            variant='warning'
            bsPrefix
            className='add-person-button'
            onClick={addPerson}
          >
            +
          </Button>
        </Row>
      </Col>
      <Col bsPrefix className='button-container'>
        <Link to='/'>
          <Row bsPrefix className='checkout-button'>
            <Col bsPrefix className='col-text'>
              <h4>Checkout</h4>
            </Col>
            <Col bsPrefix className='col-arrow'>
              <img src={arrow} alt='arrow' />
            </Col>
          </Row>
        </Link>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ personCounterReducer, shoppingCartReducer }) => {
  return { personCounterReducer, shoppingCartReducer };
};

export default connect(mapStateToProps, personCounterActions)(Checkout);
