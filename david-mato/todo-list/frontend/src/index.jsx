/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import TodoList from './components/TodoList';
import { requestTodoList } from './redux/actions/todoListActions';
import configureStore from './redux/configureStore';

const store = configureStore();
store.dispatch(requestTodoList());

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <TodoList />
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/detail/:productId" exact component={Detail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter> */}
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
