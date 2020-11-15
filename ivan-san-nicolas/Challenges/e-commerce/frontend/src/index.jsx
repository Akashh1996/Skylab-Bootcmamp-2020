import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import SabersList from './components/SabersList/SabersList';
import SaberDetail from './components/SaberDetail/SaberDetail';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './index.css';

const store = configureStore({ sabersReducer: { sabersArray: [] }, cartReducer: { cartArray: [] } });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <Switch>
          <Route path="/sabers" exact component={SabersList}/>
          <Route path="/sabers/:saberName" exact component={SaberDetail}/>
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Provider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
