import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileMenu from './components/Header/MobileMenu';
import ListComponent from './components/List/ListComponent/ListComponent';

import Checkout from './components/Checkout/Checkout';
import Contacts from './components/Contacts/Contacts';
import Thank from './components/Checkout/Thank/Thank';
import About from './components/About/About';
import Events from './components/Eventos/Events';
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading';
import Faqs from './components/Faqs/Faqs';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MobileMenu />
        <Header />
        <Switch>
          <Route path="/lala" exact component={Loading} />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/events" exact component={Events} />
          <Route path="/contact" exact component={Contacts} />
          <Route path="/products" exact component={ListComponent} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/ty" exact component={Thank} />
          <Route path="/faqs" exact component={Faqs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
