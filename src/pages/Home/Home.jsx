import React from 'react';
import { connect } from 'react-redux';
import * as showOrderMenuActions from '../../actions/showOrderMenuActions';

import './Home.css';
import Searchbar from '../../components/Searchbar/Searchbar';
import MainPublicity from '../../components/MainPublicity/MainPublicity';
import RestaurantsAndDelivery from '../../components/RestaurantsAndDelivery/RestaurantsAndDelivery';
import ListOfCategories from '../../components/ListOfCategories/ListOfCategories';
import ListOfFoodSuggestions from '../../components/ListOfFoodSuggestions/ListOfFoodSuggestions';
import Menu from '../../components/Menu/Menu';
import MyOrderSection from '../../components/MyOrderSection/MyOrderSection';
import TotalPurchase from '../../components/TotalPurchase/TotalPurchase';
import Checkout from '../../components/Checkout/Checkout';

const Home = (props) => {
  return (
    <main id='app'>
      {props.showOrderMenu ? (
        <section className='main-section is-active'>
          <section className='menu-searchbar'>
            <Menu />
            <Searchbar />
          </section>
          <MainPublicity />
          <RestaurantsAndDelivery />
          <ListOfCategories />
          <ListOfFoodSuggestions />
        </section>
      ) : (
        <section className='main-section'>
          <section className='menu-searchbar'>
            <Menu />
            <Searchbar />
          </section>
          <MainPublicity />
          <RestaurantsAndDelivery />
          <ListOfCategories />
          <ListOfFoodSuggestions />
        </section>
      )}
      {props.showOrderMenu ? (
        <nav className='my-order-section is-active'>
          <MyOrderSection />
          <TotalPurchase />
          <Checkout />
        </nav>
      ) : (
        <nav className='my-order-section'>
          <MyOrderSection />
          <TotalPurchase />
          <Checkout />
        </nav>
      )}
    </main>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.showOrderMenuReducer;
};

export default connect(mapStateToProps, showOrderMenuActions)(Home);
