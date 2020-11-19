import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserList from './components/UserList/UserList';


const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
        <Switch>
            <Route path = "/" exact component = {UserList} ></Route>
            {/* <Route path = "/:heroId" exact component = {ProductDetail} ></Route> */}
        </Switch>
      </BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
