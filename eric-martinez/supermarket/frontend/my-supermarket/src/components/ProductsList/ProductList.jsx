import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { requestProducts } from '../../redux/actions/superActions'

function ProductsList({productsList, dispatch}) {

if(!productsList && !productsList?.length){
    dispatch(requestProducts());
}
    return (
        <>
                {<h1>Products List</h1>}
                {(productsList && productsList.length && 
                    productsList.map((product) => {
                    return <li key={product.id}><Link to={`products/${product.id}`}>{product['product-name']}</Link></li>
                    }))}
        </>
    )
}
function mapStateToProps(state){
    return {
        productsList: state.superReducer.productsList,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);