import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
import './HeroList.css';
function ProductList({ productList, dispatch}) {
    debugger;
    if (productList.length <= 0) {
        dispatch(requestProducts());
    }
    console.log(productList)
    debugger;
    return (
        <div className = "list-wrapper">
            {productList &&
                productList.length &&
                productList[0].map((product) => {
                return <p>{product["product-name"]}</p>
                })}
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