import React from 'react';
import './Home.css';

import Searchbar from '../../components/Searchbar/Searchbar';
import MainPublicity from '../../components/MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../../components/RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../../components/ListOfCategories/ListOfCategories';
import ListOfFoodSuggestions from '../../components/ListOfFoodSuggestions/ListOfFoodSuggestions';
import Menu from '../../components/Menu/Menu';
// import MyOrderSection from '../../components/MyOrderSection/MyOrderSection';
// import TotalPurchase from '../../components/TotalPurchase/TotalPurchase';
// import Checkout from '../../components/Checkout/Checkout';

function Home() {
  return (
    <main id='app'>
      <section className='menu-searchbar'>
        <Menu className='menu' />
        <Searchbar className='searchbar' />
      </section>
      <MainPublicity />
      <RestaurantsAndDelivery />
      <ListOfCategories />
      <ListOfFoodSuggestions />

      {/* <MyOrderSection />
      <TotalPurchase />
      <Checkout /> */}
    </main>
  );
}

export default Home;
