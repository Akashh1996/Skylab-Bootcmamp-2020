import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroDetail from './components/HeroDetail/HeroDetail';
import HeroList from './components/HeroList/HeroList';


const myInitialState={
	heroReducer:{
		akash: 'Gerard'
	}
}

const store = configureStore(myInitialState);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
        <Switch>
            <Route path = "/" exact component = {HeroList} ></Route>
            <Route path = "/:heroId" exact component = {HeroDetail} ></Route>
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
