import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductsList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/products" exact component={ProductList}/>
        <Route path="/products/select/:productId" exact component={ProductDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
