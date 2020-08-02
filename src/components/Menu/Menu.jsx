import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as showOrderMenuActions from '../../actions/showOrderMenuActions';

import './Menu.css';
import '../../assets/icons/icomoon/style.css';
import menuIcon from '../../assets/icons/icomoon/icomoon.svg';

const Menu = (props) => {
  const showOrHideMenu = () => {
    props.changeOrderMenuState(props.showOrderMenu);
  };

  return (
    <Row bsPrefix className='Menu-row'>
      <button onClick={showOrHideMenu}>
        <Col bsPrefix className='icon-menu'>
          <img src={menuIcon} alt='menuIcon' />
        </Col>
      </button>
      <Col bsPrefix className='Company-name'>
        <h3>Chukwudi</h3>
      </Col>
    </Row>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.showOrderMenuReducer;
};

export default connect(mapStateToProps, showOrderMenuActions)(Menu);
