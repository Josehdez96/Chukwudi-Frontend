import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import './Cart.css';

/* Mocks
import productImageMock from '../../assets/images/pexels-photo-262959.jpeg';
const cartMockReducer = [1, 2, 3, 4];
*/

const Cart = (props) => {
  console.log(props.shoppingCart);
  return (
    <section>
      {props.shoppingCart.length >= 1 ? (
        props.shoppingCart.map((product) => (
          <Row key={product.id} bsPrefix className='product-container'>
            <Col className='product-image-container'>
              <img src={product.image} alt='productImage' />
            </Col>
            <Col bsPrefix className='qty-products'>
              1
            </Col>
            <Col bsPrefix className='separator'>
              x
            </Col>
            <Col bsPrefix className='product-name'>
              {product.name}
            </Col>
            <Col bsPrefix className='product-price'>
              {product.price}
            </Col>
          </Row>
        ))
      ) : (
        <div className='non-items-in-cart'>
          <p>¡Aun no has agregado productos al carrito!</p>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.shoppingCartReducer;
};

export default connect(mapStateToProps)(Cart);
