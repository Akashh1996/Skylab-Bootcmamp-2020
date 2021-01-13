import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserDetail from './components/detail/UserDetail';
import SpotDetail from './components/spotDetail/SpotDetail';
import './index.css';
import Header from './components/header/Header';
import List from './components/list/List';
import MainPage from './components/home/MainPage';

import Form from './components/form/Form';
import Footer2 from './components/footer2/Footer2';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <div style={{ width: '100%' }}>

        <Switch>
          <Route path="/user/:userId" component={UserDetail} />

          <Route path="/spot/:spotId" component={SpotDetail} />
          <Route path="/spots/" component={List} />
          <Route path="/create" component={Form} />
          <Route path="/" component={MainPage} />

        </Switch>
        <Footer2 />
      </div>
    </BrowserRouter>

  );
}

export default App;
