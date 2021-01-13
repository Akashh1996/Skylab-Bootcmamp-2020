import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BeerList from './components/BeerList';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerDetail from './components/BeerDetail';
import Home from './components/Home';
import MaltList from './components/MaltList';
import Contact from './components/Contact';
import About from './components/About';
import UserProfile from './components/UserProfile';
import HopList from './components/HopList';
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/beers/contact" exact component={Contact}/>
          <Route path="/beers/about" exact component={About} />
          <Route path="/beers/" exact component={BeerList} />
          <Route path="/beers/hops/:hopName" component={HopList}/>
          <Route path="/beers/malt/:maltName" component={MaltList} />
          <Route path="/beers/:beerId" component={BeerDetail} />
          <Route path="/profile" exact component={UserProfile} />

      </Switch>
      <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
