import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './RecountOrder.css';
import userIcon from '../../assets/icons/747376.svg';

import * as showOrderMenuActions from '../../actions/showOrderMenuActions';
import * as shoppingCartActions from '../../actions/shoppingCartActions';

const RecountOrder = (props) => {
  const showOrHideMenu = () => {
    props.changeOrderMenuState(props.showOrderMenuReducer.showOrderMenu);
  };

  return (
    <Container bsPrefix className='recount-container'>
      <Row>
        <Col bsPrefix className='exit-button-container'>
          <button onClick={showOrHideMenu}>X</button>
        </Col>
        <div className='icon-and-counter-containter'>
          <Col>
            <img src={userIcon} alt='userIcon' />
          </Col>
          <Col>
            <Button variant='info' bsPrefix className='products-counter'>
              {props.shoppingCartReducer.shoppingCart.length}
            </Button>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ shoppingCartReducer, showOrderMenuReducer }) => {
  return { shoppingCartReducer, showOrderMenuReducer };
};

const mapDispatchToProps = {
  ...showOrderMenuActions,
  ...shoppingCartActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecountOrder);
