import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/HeroList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<ProductList />,
				<ProductDetail  />
				<Route path="/cart" exact component={ShoppingCart}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
