import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
import './ProductList.css';


function ProductList({ productList, dispatch}) {
    
    if (productList.length <= 0) {
        dispatch(requestProducts());
    }
    console.log(productList)
    return (
        <div className = "list-wrapper">
            {productList &&
                productList.length &&
                productList[0].map((product) => <div className="product_wrapper" key = {product.id}>
                <span><Link to= {`/${product.id}`}>{product["product-name"]}</Link></span>
                <span>{product.price}€</span>
                <span class="material-icons">shopping_cart</span>
                <img className="product_img" alt="product-img" src={`${product['product-image-url']}`}></img>
                </div>
                )}
        </div>
    );
}
function mapStateToProps(state) {
   debugger
    return {
        productList: state.productReducer
    };
}
function mapDispatchToProps(dispatch) {
    debugger
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);