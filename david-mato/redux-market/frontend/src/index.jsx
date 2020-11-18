import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Landing from './components/landing/Landing';
import Detail from './components/detail/Detail';
import Cart from './components/cart/Cart';
import { requestProducts } from './redux/actions/productsActions';
import configureStore from './redux/configureStore';
import './index.css';

const store = configureStore();
store.dispatch(requestProducts());

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/detail/:productId" exact component={Detail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
