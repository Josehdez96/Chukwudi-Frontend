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

const renderHomePage = (baseClass, actualMenuState) => {
  const activeClass = actualMenuState ? `${baseClass} is-active` : baseClass;
  return (
    <section className={activeClass}>
      <section className='menu-searchbar'>
        <Menu />
        <Searchbar />
      </section>
      <MainPublicity />
      <RestaurantsAndDelivery />
      <ListOfCategories />
      <ListOfFoodSuggestions />
    </section>
  );
};

const renderMyOrderPage = (baseClass, actualMenuState) => {
  const activeClass = actualMenuState ? `${baseClass} is-active` : baseClass;
  return (
    <nav className={activeClass}>
      <MyOrderSection />
      <TotalPurchase />
      <Checkout />
    </nav>
  );
};

/* Componente que se renderiza */
const Home = (props) => {
  return (
    <main id='app'>
      {renderHomePage('main-section', props.showOrderMenu)}
      {renderMyOrderPage('my-order-section', props.showOrderMenu)}
    </main>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.showOrderMenuReducer;
};

export default connect(mapStateToProps, showOrderMenuActions)(Home);
