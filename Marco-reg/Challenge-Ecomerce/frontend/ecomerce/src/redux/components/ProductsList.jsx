import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProducts } from '../actions/shopActions';
import {Link}from 'react-router-dom';



function ProductList({ productList, dispatch}) {
   
    
    if (!productList || productList?.length <= 0) {
        debugger
        dispatch(requestProducts());
    }
    console.log(productList)
   
    return (
        <div className = "list-wrapper">
            {productList &&
                productList.length &&
                productList.map((product) => {
                return <p><Link to={`/${product.id}`}>{product["product-name"]}</Link>
                <img alt="product-img" src={product['product-image-url']}/></p>
                })}
        </div>
    );
}
function mapStateToProps(state) {
    debugger;
   
    return {
        productList: state.productReducer.productList
    };
}
function mapDispatchToProps(dispatch) {
    
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);