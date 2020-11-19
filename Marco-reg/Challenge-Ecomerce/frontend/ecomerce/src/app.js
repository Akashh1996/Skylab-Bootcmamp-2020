
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/HeroList';
import Navbar from './redux/components/Navbar/';
function App() {
    return (
        <Navbar/>,
        <ProductList />,
        <ProductDetail />
    );
}
export default App;