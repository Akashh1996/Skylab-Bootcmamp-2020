import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/HeroList';


function App() {
	return (
		<ProductList />,
		<ProductDetail path="/products/:productId" exact component={ProductDetail} />
	);
}

export default App;
