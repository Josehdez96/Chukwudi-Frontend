import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Menu.css';
import '../../assets/icons/icomoon/style.css';
import menuIcon from '../../assets/icons/icomoon/icomoon.svg';

const Menu = () => {
  return (
    <Row bsPrefix className='Menu-row'>
      <Col bsPrefix className='icon-menu'>
        <img src={menuIcon} alt='menuIcon' />
      </Col>
      <Col bsPrefix className='Company-name'>
        <h3>Chukwudi</h3>
      </Col>
    </Row>
  );
};

export default Menu;
