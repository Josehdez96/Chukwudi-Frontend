import React, { Fragment } from 'react';
import './Home.css';

import Searchbar from '../../components/Searchbar/Searchbar';
import MainPublicity from '../../components/MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../../components/RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../../components/ListOfCategories/ListOfCategories';
import ListOfFoodSuggestions from '../../components/ListOfFoodSuggestions/ListOfFoodSuggestions';
import Menu from '../../components/Menu/Menu';
import MyOrderSection from '../../components/MyOrderSection/MyOrderSection';

function Home() {
  return (
    <Fragment>
      <main id='app'>Main view</main>
      <Menu />
      <Searchbar />
      <MainPublicity />
      <RestaurantsAndDelivery />
      <ListOfCategories />
      <ListOfFoodSuggestions />

      <MyOrderSection />
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

export default Home;
