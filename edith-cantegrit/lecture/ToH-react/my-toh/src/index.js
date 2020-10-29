import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HeroList from './components/HeroList';
import HeroDetails from './components/HeroDetails';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/heroes" exact component={HeroList}/>
                <Route path="/heroes/:algo" component={HeroDetails}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
