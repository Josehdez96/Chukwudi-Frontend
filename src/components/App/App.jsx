import React, { Fragment } from 'react';
import './App.css';

import Searchbar from '../Searchbar/Searchbar';
import MainPublicity from '../MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../ListOfCategories/ListOfCategories';
import FoodSuggest from '../FoodSuggest/FoodSuggest';

function App() {
  return (
    <Fragment>
      <main id='app'>Main view</main>
      <div>Menu</div>
      <Searchbar />
      <MainPublicity />
      <RestaurantsAndDelivery />
      <ListOfCategories />
      <FoodSuggest />

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
