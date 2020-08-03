import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './TotalPurchase.css';

const TotalPurchase = (props) => {
  const [cartTotal, setCartTotal] = useState(0);

  const getTotal = () => {
    setCartTotal(
      props.shoppingCart.reduce(
        (accumulator, current) => accumulator + current.price,
        0 /* Este 0 hace que el reduce comience desde el primer elemento*/
      )
    );
  };

  useEffect(() => {
    getTotal();
  });

  return (
    <section className='total-container'>
      <h4>Total:</h4>
      <h3>{`$ ${cartTotal}`}</h3>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.shoppingCartReducer;
};

export default connect(mapStateToProps)(TotalPurchase);
