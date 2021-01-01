import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configureStore';
import List from './components/List';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
