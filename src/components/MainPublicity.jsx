import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './styles/MainPublicity.css';

import headerImage from '../assets/images/headerimage.png';
import partyImage from '../assets/images/d.png';
import arrow from '../assets/icons/109617red.svg';

const MainPublicity = () => {
  return (
    <Jumbotron fluid bsPrefix className='jumbotron-main-publicity'>
      <Container>
        <Row>
          <Col bsPrefix className='header-image'>
            <img src={headerImage} alt='headerImage' />
          </Col>
          <Col>
            <section className='main-title-section'>
              <h3 className='main-title'>$0 delivery fo 30 days!</h3>
              <img src={partyImage} alt='party' />
            </section>
            <sub className='main-paragraph'>
              $0 delivery fee for orders over $10 for 30 days
            </sub>
          </Col>
          <Col bsPrefix className='learn-more-link'>
            <div>
              <p>Learn more</p>
              <img src={arrow} alt='arrow' />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MainPublicity;
