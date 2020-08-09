import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';

import './DeliveryTime.css';
import clock from '../../assets/icons/149316.svg';
import arrow from '../../assets/icons/118740.svg';

import * as deliveryTimeActions from '../../actions/deliveryTimeActions';

const DeliveryTime = (props) => {
  return (
    <Container bsPrefix className='delivery'>
      <Row>
        <Col>
          <img src={clock} alt='clock' />
        </Col>
        <Col bsPrefix className='delivery-title'>
          Delivery:
        </Col>
        <table className='mini-table-container'>
          <tbody>
            <tr>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    variant='success'
                    id='dropdown-basic'
                    bsPrefix
                    className='time-to-deliver'
                  >
                    <tr>
                      <td className='deliver-time-container'>
                        <Link to='/' className='delivery-time-selector'>
                          <div
                            className={`actual-delivery-time-col ${props.deliveryTime[1]}`}
                          >
                            {props.deliveryTime[0]}
                          </div>
                        </Link>
                      </td>
                      <td className='icon-container'>
                        <Link to='/' className='delivery-time-selector-2'>
                          <td className='arrow-icon'>
                            <img src={arrow} alt='arrowIcon' />
                          </td>
                        </Link>
                      </td>
                    </tr>
                  </Dropdown.Toggle>
                  <Dropdown.Menu bsPrefix className='dropdown-time-menu'>
                    <Dropdown.Item onClick={props.addNowTime}>
                      Now
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.addOneHourTime}>
                      1 hr
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.addFiveHoursTime}>
                      5 hr
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.addTwentyfourHoursTime}>
                      24 hr
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (reducers) => {
  return reducers.deliveryTimeReducer;
};

export default connect(mapDispatchToProps, deliveryTimeActions)(DeliveryTime);
