import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
import './HeroList.css';



function ProductList({ productList, dispatch}) {
    debugger;
    if (!productList && !productList?.length) {
        dispatch(requestProducts());
    }
    console.log(productList)
    debugger;
    return (
        
        <div className = "list-wrapper">

            {productList &&
                productList.length &&
                productList.map((product) => <p key = {product.id}>
                  
                     <span><Link to= {`/${product.id}`}>{product.name}</Link></span>
                </p> )}
        </div>
        
    );
    
}
function mapStateToProps(state) {
   debugger
    return {
        productList: state.productReducer.productList
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