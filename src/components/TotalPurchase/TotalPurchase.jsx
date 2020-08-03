import React, { useState, useEffect } from 'react';

import './TotalPurchase.css';

const TotalPurchase = () => {
  // const [cartTotal, setCartTotal] = useState(0);

  // const getTotal = () => {
  //   setCartTotal(carrito.reduce(
  //     (accumulator, current) => accumulator + current.price,
  //     0 /* Este 0 hace que el reduce comience desde el primer elemento*/
  //   ))
  // };
  return (
    <section className='total-container'>
      <h4>Total:</h4>
      <h3>$25,97</h3>
    </section>
  );
};

export default TotalPurchase;
