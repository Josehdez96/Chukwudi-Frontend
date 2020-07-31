import React, { Fragment } from 'react';
import './styles/App.css';

function App() {
  return (
    <Fragment>
      <main id="app">Main view</main>
      <div>Menu</div>
      <div>SearchBar</div>
      <div>main publicity</div>
      <div>title Restaurants</div>
      <div>Order time</div>
      <div>Carrousel with kind of foods</div>
      <div>Carrousel with specific foods</div>

      <section>My order</section>
      <div>
        <div>User</div>
        <div>Count of items in my order</div>
      </div>

      <div>Title my order</div>
      <div>Info address and time</div>
      <div>List of foods in My Order</div>
      <div>Tips for delivery</div>
      <div>
        <div>Total title</div>
        <div>Total money amount</div>
      </div>
      <div>Persons?</div>
      <div>Checkout button</div>
    </Fragment>
  );
}

export default App;
