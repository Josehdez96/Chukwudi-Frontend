import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import './MainPublicity.css';

import headerImage from '../../assets/images/headerimage.png';
import partyImage from '../../assets/images/d.png';
import arrow from '../../assets/icons/109617red.svg';

const MainPublicity = () => {
  return (
    <Jumbotron fluid bsPrefix className='jumbotron-main-publicity'>
      <Container>
        <Row>
          <Col bsPrefix className='header-image'>
            <img src={headerImage} alt='headerImage' />
          </Col>
          <Col bsPrefix className='message-section'>
            <section className='main-title-section'>
              <h3 className='main-title'>$0 delivery for 30 days!</h3>
              <img src={partyImage} alt='party' />
            </section>
            <sub className='main-paragraph'>
              $0 delivery fee for orders over $10 for 30 days
            </sub>
          </Col>
          <Col bsPrefix className='learn-more-link'>
            <Row bsPrefix className='row-learn-more'>
              <Col>
                <Link to='/' className='button-learn-more'>
                  <p>Learn more</p>
                </Link>
              </Col>
              <Col bsPrefix className='arrow-col'>
                <Link to='/' className='button-learn-more-arrow'>
                  <img src={arrow} alt='arrow' />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MainPublicity;
