import React from 'react';
import { connect } from 'react-redux';

import './Cart.css';

const renderProductsSelected = (props) => {
  return props.shoppingCart.map((product, key) => (
    <tr key={product.id} className='product-container'>
      <td className='product-image-container'>
        <img src={product.image} alt='prodImg' />
      </td>
      <td className='qty-products'>1</td>
      <td className='separator'>x</td>
      <td className='product-name'>{product.name}</td>
      <td className='product-price'>{`$${product.price}`}</td>
    </tr>
  ));
};

const renderNonItemsInCart = () => (
  <tr className='non-items-in-cart'>
    <td>¡Aun no has agregado productos al carrito!</td>
  </tr>
);

const Cart = (props) => {
  return (
    <table>
      <tbody>
        {props.shoppingCart.length >= 1
          ? renderProductsSelected(props)
          : renderNonItemsInCart()}
      </tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.shoppingCartReducer;
};

export default connect(mapStateToProps)(Cart);
