import React from 'react';
import { connect } from 'react-redux';

import './Cart.css';

const Cart = (props) => {
  return (
    <table>
      <tbody>
        {props.shoppingCart.length >= 1 ? (
          props.shoppingCart.map((product) => (
            <tr key={product.id} className='product-container'>
              <td className='product-image-container'>
                <img src={product.image} alt='prodImg' />
              </td>
              <td className='qty-products'>1</td>
              <td className='separator'>x</td>
              <td className='product-name'>{product.name}</td>
              <td className='product-price'>{`$${product.price}`}</td>
            </tr>
          ))
        ) : (
          <tr className='non-items-in-cart'>
            <td>¡Aun no has agregado productos al carrito!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.shoppingCartReducer;
};

export default connect(mapStateToProps)(Cart);
