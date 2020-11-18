import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail, cleanProductDetail } from '../actions/shopActions';
import { Button } from '@material-ui/core';


function Detail({match, productDetail, dispatch, actions }){
    const [productId] = useState(+match.params.productId);
    useEffect(() => {
        if(productId){
            dispatch(requestProductDetail(productId));
        }
        return () => actions.cleanProductDetail();
    },[productId, dispatch, actions])
    return(
        <>
            {productDetail && 
            <h1>{productDetail[0]['product-name']}</h1>}
            {productDetail && 
            <img src={productDetail[0]['product-image-url']} alt={"product img"}/>}
            <Button color="primary">ADD TO CART</Button>

        </>
    )
}
function mapStateToProps(state){
    
    return {
        
        productDetail: state.productReducer.productDetail,
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ cleanProductDetail }, dispatch),
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);